"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCommandPalette } from "@/hooks/useCommandPalette";

const GO_SHORTCUTS: { key: string; label: string; href: string }[] = [
  { key: "h", label: "Home", href: "/" },
  { key: "a", label: "About", href: "/about" },
  { key: "p", label: "Projects", href: "/projects" },
  { key: "b", label: "Blog", href: "/blog" },
  { key: "c", label: "Contact", href: "/contact" },
  { key: "g", label: "Guestbook", href: "/guestbook" },
];

function isTyping() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    (el as HTMLElement).isContentEditable
  );
}

export default function KeyboardShortcuts() {
  const router = useRouter();
  const { setOpen } = useCommandPalette();
  const [awaitingSecond, setAwaitingSecond] = useState(false);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const dismiss = useCallback(() => {
    setAwaitingSecond(false);
    setLastKey(null);
  }, []);

  useEffect(() => {
    if (!awaitingSecond) return;
    const timer = setTimeout(dismiss, 1500);
    return () => clearTimeout(timer);
  }, [awaitingSecond, dismiss]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTyping()) return;

      if (awaitingSecond) {
        const match = GO_SHORTCUTS.find((s) => s.key === e.key);
        if (match) {
          e.preventDefault();
          router.push(match.href);
        }
        dismiss();
        return;
      }

      if (e.key === "g") {
        e.preventDefault();
        setAwaitingSecond(true);
        setLastKey("g");
        return;
      }

      if (e.key === "?") {
        e.preventDefault();
        setOpen(true);
        return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [awaitingSecond, dismiss, router, setOpen]);

  return (
    <AnimatePresence>
      {awaitingSecond && (
        <motion.div
          key="kb-hint"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
          aria-live="polite"
          aria-atomic
        >
          <div className="rounded-xl border border-tr-black dark:border-tr-white bg-white dark:bg-black shadow-2xl px-5 py-3.5 min-w-[280px]">
            <p className="font-varuna text-[10px] uppercase tracking-widest text-tr-black dark:text-tr-white mb-2.5">
              <kbd className="rounded border border-tr-black dark:border-tr-white px-1.5 py-0.5 text-red dark:text-green font-bold">
                {lastKey}
              </kbd>
              <span className="ml-2">then…</span>
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {GO_SHORTCUTS.map((s) => (
                <span key={s.key} className="flex items-center gap-2">
                  <kbd className="rounded border border-tr-black dark:border-tr-white px-1.5 py-0.5 font-varuna text-[10px] text-red dark:text-green min-w-[1.25rem] text-center">
                    {s.key}
                  </kbd>
                  <span className="font-varuna text-xs text-black dark:text-white">
                    {s.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
