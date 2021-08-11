import { PSDB } from "planetscale-node";
const conn = new PSDB("main");

async function main() {
  const [rows, fields] = await conn.query("select * from users", [0]);
  console.log(rows, fields);
}

main();
