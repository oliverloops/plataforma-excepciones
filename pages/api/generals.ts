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
    console.log(req.body);

    switch (req.method) {
      case "POST":
        connection.query(
          `SELECT progreso FROM generales WHERE proyecto='${req.body.project}' AND mes='${req.body.project}'`,
          (err, rows, fields) => {
            if (res.send(rows[0]) === undefined) {
              connection.query(
                `INSERT INTO generales (proyecto, mes, responsable_amb, residente_obra, supervisor_obra, supervicion_ambiental, catalogo_general, coordenadas_centroide, trabajadores_seguro, area, num_trabajadores, fecha_entrega)
                 VALUES ('${req.body.project}', '${req.body.month}', '${data.responsable}', '${data.residente}', '${data.supervisor}', '${data.supAmbiental}', '${data.catalogo}', '${data.centroide}', '${data.trabajadores}', '${data.area}', '${data.numeroTrab}', '${data.entrega}')`
              );
            } else {
              let progress = rows[0].progreso + 10;

              connection.query(
                `UPDATE generales 
                 SET progreso=${progress}, responsable_amb=${data.responsable}, residente_obra=${data.residente}, supervisor_obra=${data.supervisor}, supervicion_ambiental=${data.supAmbiental}, catalogo_general=${data.catalogo}, coordenadas_centroide=${data.centroide}, trabajadores_seguro=${data.trabajadores}, area=${data.area}, num_trabajadores=${data.numeroTrab}, fecha_entrega=${data.entrega}
                 WHERE proyecto=${req.body.project} AND mes=${req.body.month}`
              );
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
}
