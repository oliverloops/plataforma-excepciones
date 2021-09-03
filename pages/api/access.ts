import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

type Access = {
  access: boolean;
  body: Object;
};

export default async (req: NextApiRequest, res: NextApiResponse<Access>) => {
  console.log(req.body);

  switch (req.method) {
    case "POST":
      //Query that matches username and password with db records
      connection.query(
        `SELECT username, password FROM users WHERE username="${req.body.username}" AND password="${req.body.password}"`,
        (err, rows, fields) => {
          if (err) throw err;

          if (rows.length === 0) {
            console.log("Access Denied...");
          } else {
            //Query to validate if the owners is the right propetary of an specific card
            connection.query(
              `SELECT owner FROM projects WHERE project_title='${req.body.projectTitle}'`,
              (err, rows, fields) => {
                let result = JSON.stringify(rows[0]);

                if (req.body.username === JSON.parse(result).owner) {
                  console.log("Access Granted!");
                  //Query to look for header values for the expecific project's owner and retrives to months page
                  connection.query(
                    `SELECT contract_num, project_title, exc_number FROM projects WHERE owner="${req.body.username}"`,
                    (err, rows, fields) => {
                      if (rows.length === 0) {
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
          }
        }
      );
      break;
    default:
      res.status(405).end();
      break;
  }
};
