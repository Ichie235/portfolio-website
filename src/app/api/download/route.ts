import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.resolve("/documents/richard-resume.pdf");

  try {
    const pdf = fs.readFileSync(filePath);
    const fileName = "richard-resume.pdf.pdf";

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", pdf.length);
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.status(200).end(pdf);
  } catch (error) {
    console.error("Error occurred while serving PDF:", error);
    if (res) {
      res.status(500).end("Internal Server Error");
    } else {
      console.error("Response object is undefined.");
    }
  }
}
