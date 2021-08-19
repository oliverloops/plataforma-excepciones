import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

type Access = {
  access: boolean;
};

export default async (req: NextApiRequest, res: NextApiResponse<Access>) => {
  console.log(req.body);

  switch (req.method) {
    case "GET":
      res.send({ access: true });
      console.log("Access Granted!");
      break;
    // case "POST":
    //   connection.query(`
    //             INSERT INTO users (username, password)
    //             VALUES("${req.body.username}", "${req.body.password}")
    //         `);
    //   break;
    default:
      res.status(405).end();
      break;
  }
};
