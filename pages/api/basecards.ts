import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  switch (req.method) {
    case "GET":
      connection.query(
        "SELECT quantity FROM basecards",
        (err, rows, fields) => {
          res.send(rows);
        }
      );
      break;
    default:
      res.status(405).end();
      break;
  }
}
