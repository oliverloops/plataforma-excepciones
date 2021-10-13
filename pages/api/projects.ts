import mysql from "mysql2";
import type { NextApiRequest, NextApiResponse } from "next";

//Initial connection
const db_config = {
  host: "eu-cdbr-west-01.cleardb.com",
  user: "b6e4f89bd3ac67",
  password: "5b0f57a3",
  database: "heroku_0a589e8de137ec8",
};

const connection = mysql.createConnection(db_config);
connection.connect(function (err) {
  if (err) {
    //Handle live connection
    setInterval(() => {
      connection.query("SELECT 1");
      console.log("DB server reconnected");
    }, 5000);
  }
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
          let randomId = Math.floor(Math.random() * 1000000 + 1);

          if (rows.length !== 0) {
            //filter project title where requested contract number matches in db
            connection.query(
              `SELECT project_title FROM projects WHERE contract_num=${requestedData.contractNum}`,
              (err, rows, fields) => {
                let query: string = JSON.stringify(rows[0].project_title);

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
              `INSERT INTO projects (owner, contract_num, project_title, project_type, supervisor, exc_number, contratist) VALUES('${requestedData.owner}', ${requestedData.contractNum}, '${requestedData.title}', '${requestedData.projectType}', '${requestedData.supervisor}', ${requestedData.excNumber}, '${requestedData.contratist}')`
            );

            connection.query(
              `INSERT INTO months (project_title, initial_date, final_date, ID) VALUES ('${requestedData.title}', '${requestedData.initialDate}', '${requestedData.finalDate}', ${randomId})`
            );
          }
          res.send(rows);
        }
      );

      break;
    default:
      res.status(405).end();
      break;
  }
}
