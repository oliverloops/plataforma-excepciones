import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Array<Object>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      { name: "Jane Lane", age: "21" },
      { name: "Max Payne", age: "32" },
      { name: "Tomy Lee", age: "24" },
    ],
  });
}
