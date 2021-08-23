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
  console.log(req.body.consumer.formData);
  let requestedData = req.body.consumer.formData;

  switch (req.method) {
    case "GET":
      connection.query("SELECT * FROM projects", (err, rows, fields) => {
        res.send(rows);
      });
      break;
    case "POST":
      connection.query(
        `SELECT project_title FROM projects WHERE contract_num=${requestedData.contractNum}`,
        (err, rows, fields) => {
          if (rows.length === 0) {
            connection.query(
              `INSERT INTO projects (contract_num, project_title, project_type, supervisor, exc_number, contratist) VALUES (${requestedData.contractNum}, "${requestedData.title}", "${requestedData.projectType}", "${requestedData.supervisor}", ${requestedData.excNumber}, "${requestedData.contratist}")`
            );
          }
        }
      );
      break;
    default:
      res.status(405).end();
      break;
  }
}
