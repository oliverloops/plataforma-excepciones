import mysql from "mysql";

const conn = mysql.createConnection(process.env.DATABASE_URL);
conn.connect();

export default function handler(req, res) {
  console.log(`Request Method: ${req.method}`);
  console.log(req.body);

  switch (req.method) {
    case "GET":
      conn.query("SELECT * FROM companies", (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
      });
      break;
    case "POST":
      conn.query(`
      INSERT INTO companies (name, field, released)
      VALUES("${req.body.name}", "${req.body.field}", "${req.body.released}")
      `);

      break;
    default:
      res.status(405).end();
      break;
  }
}
