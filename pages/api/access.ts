import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

type Access = {
  access: boolean;
};

export default async (req: NextApiRequest, res: NextApiResponse<Access>) => {
  console.log(`Request Method: ${req.method}`);
  console.log(req.body);

  switch (req.method) {
    case "GET":
      res.send({ access: true });
      console.log("Access Granted!");
      break;
    case "POST":
      connection.query("SELECT * FROM users", (err, rows, fields) => {
        if (err) throw err;

        rows.forEach((element) => {
          if (
            element.username === `${req.body.username}` &&
            element.password === `${req.body.password}`
          ) {
            console.log("This user match in database!");
          }
        });
      });

      res.status(200);
      break;
    default:
      res.status(405).end();
      break;
  }
};
