import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

type Access = {
  access: boolean;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Access>
) {
  console.log(`Request Method: ${req.method}`);
  console.log(req.body.consumer);

  switch (req.method) {
    case "GET":
      connection.query("SELECT * FROM projects", (err, rows, fields) => {
        res.send(rows);
      });
      break;
    case "POST":
      connection.query(
        `SELECT project_title FROM projects WHERE contract_num=${req.body.consumer.formData.contractNum}`,
        (err, rows, fields) => {
          console.log(rows);
        }
      );
      break;
    default:
      res.status(405).end();
      break;
  }
}
