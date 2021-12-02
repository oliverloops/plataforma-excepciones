import mysql from "mysql2";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection({
  host: "eu-cdbr-west-01.cleardb.com",
  user: "b6e4f89bd3ac67",
  password: "5b0f57a3",
  database: "heroku_0a589e8de137ec8",
});

connection.connect(function (err) {
  if (err) {
    //Handle live connection
    setInterval(() => {
      connection.query("SELECT 1");
      console.log("DB server reconnected");
    }, 2000);
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve) => {
    switch (req.method) {
      case "DELETE":
        connection.query(
          `SELECT evidence FROM categories WHERE project_title='${req.body.project}' AND month=${req.body.month} AND category='${req.body.rubro}'`,
          (err, rows, fields) => {
            res.send(rows);
          }
        );

        break;
      case "POST":
        //Query that matches an specific month with the user's requested project name and month
        connection.query(
          `SELECT month FROM categories WHERE month=${req.body.month} AND project_title='${req.body.project_title}'`,
          (err, rows, fields) => {
            let collects = JSON.parse(JSON.stringify(rows));
            //This queries inserts all category cards with the new project's basic info
            if (collects.length === 0) {
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.generales}');`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.biotico}');`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.suelo}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.aire}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.agua}');`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.hidrologia}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.residuos}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.operacion}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.abandono}')`
              );
              connection.query(
                `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.seguridad}')`
              );
            }

            //This query returns all category records and their progress after store it
            connection.query(
              `SELECT category, progress FROM categories WHERE month=${req.body.month} AND project_title='${req.body.project_title}'`,
              (err, rows, fields) => {
                res.send(rows);
              }
            );
          }
        );

        break;
      case "PUT":
        if (req.body.rubro === "Generales") {
          let toStore = req.body.values.toString();
          //Query that updates the form values from Generales field with user selected data
          connection.query(
            `UPDATE categories SET compliance='${toStore}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
          );
        } else {
          connection.query(
            `SELECT evidence FROM categories WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`,
            (err, rows, fields) => {
              let val = JSON.parse(JSON.stringify(rows));
              if (Object.is(val[0].evidence, null)) {
                console.log("Evidence is empty");

                let initial_progress: number;

                if (req.body.rubro === "Biótico") {
                  initial_progress = 14.285714285714286;
                } else if (req.body.rubro === "Suelo") {
                  initial_progress = 20;
                } else if (req.body.rubro === "Aire") {
                  initial_progress = 16.666666666666667;
                } else if (req.body.rubro === "Agua") {
                  initial_progress = 33.333333333;
                } else if (req.body.rubro === "Hidrología") {
                  initial_progress = 50;
                } else if (req.body.rubro === "Manejo de Residuos") {
                  initial_progress = 25;
                } else if (req.body.rubro === "Operación y Mantenimiento") {
                  initial_progress = 16.666666666666667;
                } else if (req.body.rubro === "Abandono y Restauración") {
                  initial_progress = 20;
                } else if (req.body.rubro === "Seguridad") {
                  initial_progress = 100;
                }

                connection.query(
                  `UPDATE categories SET progress=${initial_progress}, evidence='${req.body.files}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                );
              } else {
                console.log("Evidence isn't null");

                let tempUrls = [val[0].evidence];
                tempUrls.push(req.body.files);
                console.log(req.body.files);

                connection.query(
                  `SELECT progress, category FROM categories WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`,
                  (err, rows, fields) => {
                    let fullValue = JSON.parse(JSON.stringify(rows));
                    let status = fullValue[0].progress;

                    if (fullValue[0].category === "Biótico") {
                      status = status + 14.285714285714286;
                    } else if (fullValue[0].category === "Suelo") {
                      status = status + 20;
                    } else if (fullValue[0].category === "Aire") {
                      status = status + 16.666666666666667;
                    } else if (fullValue[0].category === "Agua") {
                      status = status + 33.333333333;
                    } else if (fullValue[0].category === "Hidrología") {
                      status = status + 50;
                    } else if (fullValue[0].category === "Manejo de Residuos") {
                      status = status + 25;
                    } else if (
                      fullValue[0].category === "Operación y Mantenimiento"
                    ) {
                      status = status + 16.666666666666667;
                    } else if (
                      fullValue[0].category === "Abandono y Restauración"
                    ) {
                      status = status + 20;
                    } else if (fullValue[0].category === "Seguridad") {
                      status = status + 0;
                    }

                    connection.query(
                      `UPDATE categories SET progress=${status}, evidence='${tempUrls}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                    );
                  }
                );
              }
            }
          );
        }

        break;
      default:
        res.status(405).end();
        break;
    }
    return resolve;
  });
}
