import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Chinemerem Ichie";
  const description =
    searchParams.get("description") ??
    "Full-Stack Software Engineer building scalable web applications.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#010203",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            backgroundColor: "rgba(45, 221, 192, 1)",
          }}
        />

        {/* Site label */}
        <p
          style={{
            color: "rgba(45, 221, 192, 1)",
            fontSize: "20px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          chinemeremichie.dev
        </p>

        {/* Title */}
        <h1
          style={{
            color: "#fffef7",
            fontSize: title.length > 40 ? "52px" : "68px",
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "900px",
            margin: "0 0 28px 0",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          style={{
            color: "rgba(255, 254, 247, 0.6)",
            fontSize: "28px",
            maxWidth: "800px",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {description}
        </p>

        {/* Bottom tag */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "rgba(45, 221, 192, 1)",
            }}
          />
          <span
            style={{
              color: "rgba(255, 254, 247, 0.5)",
              fontSize: "18px",
            }}
          >
            Full-Stack Software Engineer
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
