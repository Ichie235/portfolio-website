import { afterEach, describe, expect, it, vi } from "vitest";

const existsSync = vi.fn();
const readFile = vi.fn();

vi.mock("fs", () => ({
  default: {
    existsSync,
    promises: {
      readFile,
    },
  },
}));

describe("download route", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  it("returns the resume pdf when the file exists", async () => {
    existsSync.mockReturnValue(true);
    readFile.mockResolvedValue(Buffer.from("resume"));

    const { GET } = await import("../src/app/api/download/route");
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/pdf");
    expect(response.headers.get("Content-Disposition")).toContain(
      "richard-resume.pdf"
    );
  });

  it("returns 404 when the file is missing", async () => {
    existsSync.mockReturnValue(false);

    const { GET } = await import("../src/app/api/download/route");
    const response = await GET();

    expect(response.status).toBe(404);
  });
});
