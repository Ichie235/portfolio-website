const STATUSES = {
  open: {
    label: "Open to opportunities",
    dotClass: "bg-red dark:bg-green",
    pillClass: "border-tr-red dark:border-tr-green text-red dark:text-green",
  },
  freelance: {
    label: "Open to freelance",
    dotClass: "bg-[#f59e0b]",
    pillClass: "border-[rgba(245,158,11,0.4)] text-[#f59e0b]",
  },
} as const;

type StatusKey = keyof typeof STATUSES;

export default function AvailabilityBadge() {
  const status = process.env.NEXT_PUBLIC_AVAILABILITY as
    | StatusKey
    | "closed"
    | undefined;

  if (!status || status === "closed" || !(status in STATUSES)) return null;

  const { label, dotClass, pillClass } = STATUSES[status as StatusKey];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-varuna ${pillClass}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotClass} opacity-75`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${dotClass}`}
        />
      </span>
      {label}
    </span>
  );
}
