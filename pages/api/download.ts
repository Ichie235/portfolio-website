import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const filePath = join(
        process.cwd(),
        "public",
        "documents",
        "richard-resume.pdf"
      );

      // Check if file exists
      if (!fs.existsSync(filePath)) {
        res.status(404).end("Resume file not found");
        return;
      }

      // Read file asynchronously
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.status(500).end("Internal Server Error");
          return;
        }

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=richard-resume.pdf"
        );
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(500).end("Internal Server Error");
    }
  } else {
    res.status(405).end();
  }
}
