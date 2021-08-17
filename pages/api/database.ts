import mysql from "mysql";

const conn = mysql.createConnection(process.env.DATABASE_URL);
conn.connect();

export default function handler(req, res) {
  conn.query("SELECT * FROM companies", (err, rows, fields) => {
    if (err) throw err;

    res.send(rows);
  });
}
