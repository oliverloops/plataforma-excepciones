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
    }, 2000);
  }
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve) => {
    switch (req.method) {
      case "GET":
        connection.query(
          "SELECT quantity FROM basecards",
          (err, rows, fields) => {
            res.send(rows);
          }
        );
        break;
      default:
        res.status(405).end();
        break;
    }
    return resolve;
  });
}
