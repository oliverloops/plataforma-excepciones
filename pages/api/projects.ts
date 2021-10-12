import mysql from "mysql2";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "kila_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      //Query to retrieve all projects
      connection.query("SELECT * FROM projects", function (err, rows, fields) {
        res.send(rows);
      });

      break;
    case "POST":
      const requestedData = req.body.consumer.formData;

      //filter a project by their owner
      connection.query(
        `SELECT owner FROM projects WHERE owner='${requestedData.owner}'`,
        (err, rows, fields) => {
          console.log(rows);
          if (rows.length !== 0) {
            //filter project title where requested contract number matches in db
            connection.query(
              `SELECT project_title FROM projects WHERE contract_num=${requestedData.contractNum}`,
              (err, rows, fields) => {
                let query: string = JSON.stringify(rows[0].project_title);
                let randomId = Math.floor(Math.random() * 1000000 + 1);

                if (query === "null") {
                  //Update a whole project if it isn't yet created and where owner matches
                  connection.query(
                    `UPDATE projects SET contract_num = ${requestedData.contractNum}, project_title = '${requestedData.title}', project_type = '${requestedData.projectType}', supervisor = '${requestedData.supervisor}', exc_number = ${requestedData.excNumber}, contratist = '${requestedData.contratist}' WHERE owner='${requestedData.owner}'`
                  );
                  //Insterts first posted date if it isn't yet created
                  connection.query(
                    `INSERT INTO months (project_title, initial_date, final_date, ID) VALUES ('${requestedData.title}', '${requestedData.initialDate}', '${requestedData.finalDate}', ${randomId})`
                  );
                }
                //Insterts a new posted date and creates a new month card data
                connection.query(
                  `INSERT INTO months (project_title, initial_date, final_date, ID) VALUES ('${rows[0].project_title}', '${requestedData.initialDate}', '${requestedData.finalDate}', ${randomId})`
                );
              }
            );
          } else {
            console.log("This project is new");

            connection.query(
              `INSERT INTO projects VALUES('${requestedData.owner}', ${requestedData.contractNum}, '${requestedData.title}', '${requestedData.projectType}', '${requestedData.supervisor}', ${requestedData.excNumber}, '${requestedData.contratist}')`
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
