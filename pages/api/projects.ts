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

  switch (req.method) {
    case "GET":
      connection.query("SELECT * FROM projects", (err, rows, fields) => {
        res.send(rows);
      });

      connection.query("SELECT * FROM basecards", (err, rows, fields) => {
        res.send(rows);
      });

      break;
    case "POST":
      const requestedData = req.body.consumer.formData;
      console.log(requestedData);

      connection.query(
        `SELECT owner FROM projects WHERE owner='${requestedData.owner}'`,
        (err, rows, fields) => {
          if (rows.length !== 0) {
            connection.query(
              `SELECT project_title FROM projects WHERE contract_num=${requestedData.contractNum}`,
              (err, rows, fields) => {
                let query: string = JSON.stringify(rows[0].project_title);

                if (query === "null") {
                  //Specify querying column with WHERE statement
                  connection.query(
                    `UPDATE projects SET contract_num = ${requestedData.contractNum}, project_title = '${requestedData.title}', project_type = '${requestedData.projectType}', supervisor = '${requestedData.supervisor}', exc_number = ${requestedData.excNumber}, contratist = '${requestedData.contratist}' WHERE owner='${requestedData.owner}'`
                  );

                  connection.query(
                    `INSERT INTO months (project_title, initial_date, final_date) VALUES ('${requestedData.title}', '${requestedData.initialDate}', '${requestedData.finalDate}')`
                  );
                }

                connection.query(
                  `INSERT INTO months (project_title, initial_date, final_date) VALUES ('${rows[0].project_title}', '${requestedData.initialDate}', '${requestedData.finalDate}')`
                );
              }
            );
          } else {
            console.log("You're not the owner of this project");
          }
        }
      );

      break;
    default:
      res.status(405).end();
      break;
  }
}
