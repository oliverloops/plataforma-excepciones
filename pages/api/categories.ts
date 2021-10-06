import mysql from "mysql2";
import FormData from "form-data";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "kila_db",
});
connection.connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      //Query that matches an specific month with the user's requested project name and month
      connection.query(
        `SELECT month FROM categories WHERE month=${req.body.month} AND project_title='${req.body.project_title}'`,
        (err, rows, fields) => {
          //This queries inserts all category cards with the new project's basic info
          if (rows.length === 0) {
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
              const data = new FormData();
              data.append("file", fs.createReadStream(req.body.files));
              data.append("upload_preset", "Evidencias");
              data.append("options", {
                folder: "Prueba",
                use_filename: true,
              });

              fetch("https://api.cloudinary.com/v1_1/dggf3zgah/image/upload", {
                method: "POST",
                body: data,
              })
                //Cloudinary response
                .then((res) => res.json())
                .then((fileResponse) => {
                  let fileUrls = [fileResponse.secure_url];
                  connection.query(
                    `UPDATE categories SET compliance='${toStore}', evidence='${fileUrls}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                  );
                });
            } else {
              console.log("Evidence isn't null");

              //Cloudinary API - Wrapping into format handler and request
              const data = new FormData();
              data.append("file", fs.createReadStream(req.body.files));
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

                  connection.query(
                    `UPDATE categories SET compliance='${toStore}', evidence='${tempUrls}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
                  );
                });

              console.log(val[0]);
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
