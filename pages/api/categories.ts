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
      connection.query(
        `SELECT month FROM categories WHERE month=${req.body.month} AND project_title='${req.body.project_title}'`,
        (err, rows, fields) => {
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

          connection.query(
            `SELECT category, progress FROM categories WHERE month=${req.body.month} AND project_title='${req.body.project_title}'`,
            (err, rows, fields) => {
              res.send(rows);
            }
          );
        }
      );

      break;
    default:
      res.status(405).end();
      break;
  }
}
