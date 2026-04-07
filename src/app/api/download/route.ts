import fs from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "documents",
      "richard-resume.pdf"
    );

    if (!fs.existsSync(filePath)) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const fileBuffer = await fs.promises.readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=richard-resume.pdf",
      },
    });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
