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
      connection.query(
        `SELECT owner_username, owner_password FROM projects WHERE owner_username="${req.body.username}" AND owner_password="${req.body.password}"`,
        (err, rows, fields) => {
          if (err) throw err;

          if (rows.length === 0) {
            console.log("Access Denied...");
          } else {
            console.log("Access Granted!");
          }
        }
      );
      break;
    default:
      res.status(405).end();
      break;
  }
};
