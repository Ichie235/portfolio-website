import { NextRequest, NextResponse } from "next/server";
import { addEntry } from "@/lib/guestbook";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, handle = "", message } = body as Record<string, string>;

  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name and message are required." }, { status: 422 });
  }
  if (name.trim().length > 50) {
    return NextResponse.json({ error: "Name must be under 50 characters." }, { status: 422 });
  }
  if (message.trim().length > 280) {
    return NextResponse.json({ error: "Message must be under 280 characters." }, { status: 422 });
  }
  if (handle.trim().length > 50) {
    return NextResponse.json({ error: "Handle must be under 50 characters." }, { status: 422 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const result = await addEntry({ name, handle, message }, ip);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 429 });
  }

  revalidatePath("/guestbook");
  return NextResponse.json({ success: true });
}
