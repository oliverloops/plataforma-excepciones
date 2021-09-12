import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
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
          `UPDATE categories SET evidence='${toStore}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
        );
      } else {
        let toStore = req.body.complianceData.toString();
        connection.query(
          `UPDATE categories SET compliance='${toStore}' WHERE project_title='${req.body.project}' AND category='${req.body.rubro}' AND month='${req.body.month}'`
        );
      }

      break;
    default:
      res.status(405).end();
      break;
  }
}
