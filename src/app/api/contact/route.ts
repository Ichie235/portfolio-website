import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const RECIPIENT = "chinemeremichie@gmail.com";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }
  const resend = new Resend(apiKey);
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [RECIPIENT],
    replyTo: email,
    subject: subject?.trim() ? subject.trim() : `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="margin-bottom:4px">New message from your portfolio</h2>
        <p style="color:#666;margin-top:0">Sent via contact form</p>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${subject?.trim() ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <hr/>
        <p style="white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] resend error:", error);
    return NextResponse.json({ error: "Failed to send email. Try again later." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
