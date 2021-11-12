import mysql from "mysql2";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection({
  host: "eu-cdbr-west-01.cleardb.com",
  user: "b6e4f89bd3ac67",
  password: "5b0f57a3",
  database: "heroku_0a589e8de137ec8",
});

connection.connect(function (err) {
  if (err) {
    //Handle live connection
    setInterval(() => {
      connection.query("SELECT 1");
      console.log("DB server reconnected");
    }, 5000);
  }
});

type Access = {
  access: boolean;
  body: Object;
};

export default async (req: NextApiRequest, res: NextApiResponse<Access>) => {
  return new Promise((resolve) => {
    console.log(req.body);

    switch (req.method) {
      case "POST":
        //Query that matches username and password with db records
        connection.query(
          `SELECT username, password FROM users WHERE username="${req.body.username}" AND password="${req.body.password}"`,
          (err, rows, fields) => {
            let collects = JSON.parse(JSON.stringify(rows));

            if (collects.length === 0) {
              console.log("Access Denied...");
            } else {
              if (req.body.projectTitle !== "Nuevo Proyecto") {
                //Query to validate if the owners is the right propetary of an specific card
                connection.query(
                  `SELECT owner FROM projects WHERE project_title='${req.body.projectTitle}'`,
                  (err, rows, fields) => {
                    let result = JSON.stringify(rows[0]);

                    if (req.body.username === JSON.parse(result).owner) {
                      console.log("Access Granted!");
                      //Query to look for header values for the expecific project's owner and retrives to months page
                      connection.query(
                        `SELECT contract_num, project_title, exc_number, contratist FROM projects WHERE owner="${req.body.username}"`,
                        (err, rows, fields) => {
                          let collects = JSON.parse(JSON.stringify(rows));

                          if (collects.length === 0) {
                            console.log("This project is empty yet");
                            res.send({ access: false, body: {} });
                          } else {
                            res.send({
                              access: true,
                              body: JSON.stringify(rows[0]),
                            });
                          }
                        }
                      );
                    } else {
                      console.log(
                        "You have an account but this is not your project"
                      );
                    }
                  }
                );
              } else {
                console.log(req.body);
              }
            }
          }
        );
        break;
      default:
        res.status(405).end();
        break;
    }
    return resolve;
  });
};
