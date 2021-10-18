import mysql from "mysql2";
import FormData from "form-data";
import fs from "fs";
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
    }, 5000);
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.generales}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.atm}');`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.ruido}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.rsu}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.rme}');`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.rp}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.flora}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.fauna}')`
            );
            connection.query(
              `INSERT INTO categories (project_title, month, category) VALUES ('${req.body.project_title}', ${req.body.month}, '${req.body.arbolado}')`
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
        let toStore = req.body.complianceData.toString();
        console.log(req.body.files);

        connection.query(
          `SELECT evidence FROM categories WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`,
          (err, rows, fields) => {
            let val = JSON.parse(JSON.stringify(rows));
            if (Object.is(val[0].evidence, null)) {
              //Cloudinary API - Wrapping into format handler and request
              const data: any = new FormData();
              data.append("file", fs.createReadStream(req.body.files[0]));
              data.append("upload_preset", "Evidencias");
              data.append(
                "folder",
                `${req.body.project}/Mes ${req.body.month}/${req.body.rubro}`
              );

              fetch("https://api.cloudinary.com/v1_1/dggf3zgah/image/upload", {
                method: "POST",
                body: data,
              })
                //Cloudinary response
                .then((res) => res.json())
                .then((fileResponse) => {
                  let fileUrls = [fileResponse.secure_url];
                  connection.query(
                    `UPDATE categories SET progress=16, compliance='${toStore}', evidence='${fileUrls}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                  );
                });
            } else {
              console.log("Evidence isn't null");

              //Cloudinary API - Wrapping into format handler and request
              const data: any = new FormData();
              data.append("file", fs.createReadStream(req.body.files[0]));
              data.append("upload_preset", "Evidencias");
              data.append(
                "folder",
                `${req.body.project}/Mes ${req.body.month}/${req.body.rubro}`
              );

              //This request updates evidence record with new urls array
              fetch("https://api.cloudinary.com/v1_1/dggf3zgah/image/upload", {
                method: "POST",
                body: data,
              })
                //Cloudinary response
                .then((res) => res.json())
                .then((fileResponse) => {
                  let tempUrls = [val[0].evidence];
                  tempUrls.push(fileResponse.secure_url);
                  console.log(fileResponse.secure_url);

                  connection.query(
                    `SELECT progress FROM categories WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`,
                    (err, rows, fields) => {
                      let fullValue = JSON.parse(JSON.stringify(rows));
                      let status = fullValue[0].progress + 16;

                      connection.query(
                        `UPDATE categories SET progress=${status}, compliance='${toStore}', evidence='${tempUrls}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                      );
                    }
                  );
                });
            }
          }
        );
      }

      break;
    default:
      res.status(405).end();
      break;
  }
}
