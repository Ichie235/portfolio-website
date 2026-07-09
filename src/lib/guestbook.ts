import { Redis } from "@upstash/redis";

export type GuestbookEntry = {
  id: string;
  name: string;
  handle: string;
  message: string;
  timestamp: number;
};

const ENTRIES_KEY = "guestbook:entries";
const RATE_LIMIT_TTL = 60 * 60 * 24; // 24 hours
const MAX_ENTRIES = 500;

function getRedis(): Redis | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export async function getEntries(): Promise<GuestbookEntry[]> {
  const redis = getRedis();
  if (!redis) return [];
  try {
    const raw = await redis.lrange<GuestbookEntry>(ENTRIES_KEY, 0, MAX_ENTRIES - 1);
    return raw ?? [];
  } catch {
    return [];
  }
}

export async function addEntry(
  entry: Omit<GuestbookEntry, "id" | "timestamp">,
  ip: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const redis = getRedis();
  if (!redis) {
    return { ok: false, error: "Guestbook is not configured yet." };
  }

  const rlKey = `guestbook:rl:${ip}`;
  const limited = await redis.get(rlKey);
  if (limited) {
    return { ok: false, error: "You can only sign once every 24 hours." };
  }

  const newEntry: GuestbookEntry = {
    id: crypto.randomUUID(),
    name: entry.name.trim(),
    handle: entry.handle.trim(),
    message: entry.message.trim(),
    timestamp: Date.now(),
  };

  await redis.lpush(ENTRIES_KEY, JSON.stringify(newEntry));
  await redis.ltrim(ENTRIES_KEY, 0, MAX_ENTRIES - 1);
  await redis.set(rlKey, "1", { ex: RATE_LIMIT_TTL });

  return { ok: true };
}
