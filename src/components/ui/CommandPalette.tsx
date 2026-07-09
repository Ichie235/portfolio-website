"use client";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  KeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { project } from "@/content/projects/index";

type Group = "Navigate" | "Projects" | "Actions" | "Social";

type PaletteItem = {
  id: string;
  label: string;
  sublabel?: string;
  group: Group;
  icon: string;
  href?: string;
  external?: boolean;
  action?: () => void;
};

const STATIC_ITEMS: PaletteItem[] = [
  { id: "home", label: "Home", group: "Navigate", icon: "bi:house", href: "/" },
  { id: "about", label: "About", group: "Navigate", icon: "bi:person", href: "/about" },
  { id: "projects-page", label: "Projects", group: "Navigate", icon: "bi:grid-1x2", href: "/projects" },
  { id: "blog", label: "Blog", group: "Navigate", icon: "bi:file-text", href: "/blog" },
  { id: "contact", label: "Contact", group: "Navigate", icon: "line-md:email", href: "/contact" },
  { id: "guestbook", label: "Guestbook", group: "Navigate", icon: "bi:chat-square-text", href: "/guestbook" },
  ...project.map((p) => ({
    id: `project-${p.slug}`,
    label: p.name,
    sublabel: p.description,
    group: "Projects" as Group,
    icon: "bi:code-slash",
    href: `/projects/${p.slug}`,
  })),
  {
    id: "github",
    label: "GitHub",
    sublabel: "github.com/Ichie235",
    group: "Social",
    icon: "bi:github",
    href: "https://github.com/Ichie235",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sublabel: "linkedin.com/in/chinemerem-ichie",
    group: "Social",
    icon: "devicon:linkedin",
    href: "https://www.linkedin.com/in/chinemerem-ichie-4604ba23a/",
    external: true,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    sublabel: "@chinemerem_rich",
    group: "Social",
    icon: "ri:twitter-x-fill",
    href: "https://twitter.com/chinemerem_rich/",
    external: true,
  },
];

const GROUP_ORDER: Group[] = ["Navigate", "Projects", "Actions", "Social"];

function highlight(text: string, query: string) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-transparent text-red dark:text-green font-semibold">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const items = useMemo<PaletteItem[]>(() => {
    const dynamic: PaletteItem[] = [
      {
        id: "toggle-theme",
        label: resolvedTheme === "dark" ? "Switch to Light mode" : "Switch to Dark mode",
        group: "Actions",
        icon: resolvedTheme === "dark" ? "bi:sun" : "bi:moon-stars",
      },
      {
        id: "copy-email",
        label: copied ? "Email copied!" : "Copy email address",
        group: "Actions",
        icon: copied ? "bi:check-lg" : "bi:clipboard",
      },
      {
        id: "download-resume",
        label: "Download Resume",
        group: "Actions",
        icon: "bi:download",
      },
    ];
    return [...STATIC_ITEMS, ...dynamic];
  }, [resolvedTheme, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.sublabel?.toLowerCase().includes(q) ||
            item.group.toLowerCase().includes(q)
        )
      : items;
  }, [items, query]);

  const grouped = useMemo(() => {
    const map = new Map<Group, PaletteItem[]>();
    for (const item of filtered) {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    }
    return GROUP_ORDER.filter((g) => map.has(g)).map((g) => ({
      group: g,
      items: map.get(g)!,
    }));
  }, [filtered]);

  const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  const activate = useCallback(
    (item: PaletteItem) => {
      if (item.id === "toggle-theme") {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        setOpen(false);
        return;
      }
      if (item.id === "copy-email") {
        navigator.clipboard.writeText("chinemeremichie@gmail.com").then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        return;
      }
      if (item.id === "download-resume") {
        const a = document.createElement("a");
        a.href = "/api/download";
        a.download = "";
        a.click();
        setOpen(false);
        return;
      }
      if (item.href) {
        if (item.external) {
          window.open(item.href, "_blank", "noopener noreferrer");
        } else {
          router.push(item.href);
        }
        setOpen(false);
      }
    },
    [resolvedTheme, setTheme, setOpen, router]
  );

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-active="true"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (flat[activeIdx]) activate(flat[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  let globalIdx = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-1/2 top-[12vh] z-50 w-[90vw] max-w-xl -translate-x-1/2 rounded-xl border border-tr-black dark:border-tr-white bg-white dark:bg-black shadow-2xl overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-tr-black dark:border-tr-white px-4 py-3">
              <Icon icon="bi:search" className="shrink-0 text-tr-black dark:text-tr-white" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages, projects, actions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent font-varuna text-sm text-black dark:text-white placeholder-tr-black dark:placeholder-tr-white outline-none"
              />
              <kbd
                onClick={() => setOpen(false)}
                className="hidden sm:flex cursor-pointer items-center gap-1 rounded border border-tr-black dark:border-tr-white px-1.5 py-0.5 font-varuna text-[10px] text-tr-black dark:text-tr-white"
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <ul
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-rounded-sm scrollbar-thumb-black dark:scrollbar-thumb-white"
            >
              {flat.length === 0 ? (
                <li className="px-4 py-8 text-center font-varuna text-sm text-tr-black dark:text-tr-white">
                  No results for &quot;{query}&quot;
                </li>
              ) : (
                grouped.map(({ group, items: gItems }) => (
                  <li key={group}>
                    <p className="px-4 pt-3 pb-1 font-varuna text-[10px] uppercase tracking-widest text-tr-black dark:text-tr-white">
                      {group}
                    </p>
                    <ul>
                      {gItems.map((item) => {
                        const idx = globalIdx++;
                        const isActive = idx === activeIdx;
                        return (
                          <li key={item.id} data-active={isActive}>
                            <button
                              type="button"
                              onClick={() => activate(item)}
                              onMouseEnter={() => setActiveIdx(idx)}
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                isActive
                                  ? "bg-tr-black/10 dark:bg-tr-white/10"
                                  : "hover:bg-tr-black/5 dark:hover:bg-tr-white/5"
                              }`}
                            >
                              <Icon
                                icon={item.icon}
                                className={`shrink-0 text-base ${
                                  isActive
                                    ? "text-red dark:text-green"
                                    : "text-tr-black dark:text-tr-white"
                                }`}
                              />
                              <span className="flex flex-col min-w-0">
                                <span className="font-varuna text-sm text-black dark:text-white truncate">
                                  {highlight(item.label, query)}
                                </span>
                                {item.sublabel && (
                                  <span className="font-varuna text-xs text-tr-black dark:text-tr-white truncate">
                                    {highlight(item.sublabel, query)}
                                  </span>
                                )}
                              </span>
                              {item.external && (
                                <Icon
                                  icon="bi:arrow-up-right"
                                  className="ml-auto shrink-0 text-xs text-tr-black dark:text-tr-white"
                                />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))
              )}
            </ul>

            {/* Footer hint */}
            <div className="flex items-center gap-4 border-t border-tr-black dark:border-tr-white px-4 py-2">
              <span className="flex items-center gap-1 font-varuna text-[10px] text-tr-black dark:text-tr-white">
                <kbd className="rounded border border-tr-black dark:border-tr-white px-1">↑↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1 font-varuna text-[10px] text-tr-black dark:text-tr-white">
                <kbd className="rounded border border-tr-black dark:border-tr-white px-1">↵</kbd>
                select
              </span>
              <span className="flex items-center gap-1 font-varuna text-[10px] text-tr-black dark:text-tr-white">
                <kbd className="rounded border border-tr-black dark:border-tr-white px-1">esc</kbd>
                close
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
