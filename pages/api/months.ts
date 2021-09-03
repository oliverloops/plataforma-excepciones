import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  switch (req.method) {
    case "POST":
      connection.query(
        `SELECT * FROM months WHERE project_title='${req.body}'`,
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
