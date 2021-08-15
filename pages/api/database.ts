import { PSDB } from "planetscale-node";
const conn = new PSDB("main");

export default async function hanlder(req, res) {
  const {
    body: { email, name, password },
    method,
  } = req;

  const [getRows, _] = await conn.query("select * from users");
  res.statusCode(200);
  res.json(getRows);
}

//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
