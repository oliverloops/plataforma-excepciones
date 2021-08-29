import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
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
      //connection.query("INSERT INTO categories");
      break;
    default:
      res.status(405).end();
      break;
  }
}
