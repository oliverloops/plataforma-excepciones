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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve) => {
    const data = req.body.values;
    console.log(data);

    switch (req.method) {
      case "POST":
        connection.query(
          `INSERT INTO generales VALUES ('${data.responsable}', '${data.residente}', '${data.supervisor}', '${data.supAmbiental}', '${data.catalogo}', '${data.centroide}', '${data.trabajadores}', '${data.area}', '${data.numeroTrab}', '${data.entrega}')`,
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
