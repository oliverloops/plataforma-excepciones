import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      connection.query("SELECT * FROM months", (err, rows, fields) => {
        res.send(rows);
      });
      break;
    default:
      res.status(405).end();
      break;
  }
}
