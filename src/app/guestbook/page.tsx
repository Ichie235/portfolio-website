import { getEntries } from "@/lib/guestbook";
import { buildPageMetadata } from "@/lib/site";
import { HeadText } from "@/animations/HeadText";
import GuestbookForm from "@/components/sections/GuestbookForm";

export const revalidate = 60;

export const metadata = buildPageMetadata({
  title: "Guestbook | Chinemerem Ichie",
  description:
    "Sign the guestbook and leave a message for Chinemerem Ichie.",
  path: "/guestbook",
});

function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

export default async function GuestbookPage() {
  const entries = await getEntries();

  return (
    <main className="w-full px-6 md:px-16 lg:px-20 xl:px-36 pt-12 pb-24 md:pt-20 overflow-x-hidden">
      {/* Header */}
      <HeadText
        el="h1"
        text="Guestbook"
        className="font-taruno text-3xl md:text-5xl mb-3"
        once
      />
      <p className="font-varuna text-tr-black dark:text-tr-white max-w-lg mb-10">
        Leave a message — say hi, share feedback, or just let me know you
        stopped by. Everyone&apos;s welcome.
      </p>

      {/* Form */}
      <div className="max-w-2xl mb-16">
        <GuestbookForm />
      </div>

      {/* Wall */}
      {entries.length === 0 ? (
        <p className="font-varuna text-tr-black dark:text-tr-white text-sm">
          No entries yet — be the first to sign!
        </p>
      ) : (
        <>
          <p className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white mb-6">
            {entries.length} {entries.length === 1 ? "signature" : "signatures"}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="flex flex-col gap-3 rounded-lg border border-tr-black dark:border-tr-white p-5 surface-panel"
              >
                {/* Quote mark */}
                <span
                  className="font-taruno text-4xl leading-none text-red dark:text-green select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Message */}
                <p className="font-varuna text-sm text-black dark:text-white leading-relaxed flex-1 break-words">
                  {entry.message}
                </p>

                {/* Footer */}
                <div className="flex items-end justify-between gap-2 mt-auto pt-3 border-t border-tr-black/30 dark:border-tr-white/30">
                  <div className="min-w-0">
                    <p className="font-varuna text-sm font-semibold text-black dark:text-white truncate">
                      {entry.name}
                    </p>
                    {entry.handle && (
                      <p className="font-varuna text-xs text-tr-black dark:text-tr-white truncate">
                        {entry.handle.startsWith("@")
                          ? entry.handle
                          : `@${entry.handle}`}
                      </p>
                    )}
                  </div>
                  <time
                    dateTime={new Date(entry.timestamp).toISOString()}
                    className="font-varuna text-xs text-tr-black dark:text-tr-white shrink-0"
                  >
                    {timeAgo(entry.timestamp)}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
