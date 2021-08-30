import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL, {
  multipleStatements: true,
});
connection.connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  console.log(data);

  switch (req.method) {
    case "GET":
      connection.query(
        "SELECT progress FROM categories",
        (err, rows, fields) => {
          res.send(rows);
        }
      );
      break;
    case "POST":
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.generales}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.atm}');`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.ruido}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.rsu}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.rme}');`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.rp}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.flora}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.fauna}')`
      );
      connection.query(
        `INSERT INTO categories (month, category) VALUES (${data.month}, '${data.arbolado}')`
      );

      break;
    default:
      res.status(405).end();
      break;
  }
}
