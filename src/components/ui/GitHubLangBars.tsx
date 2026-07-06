"use client";
import { motion } from "framer-motion";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572a5",
  "C#": "#178600",
  Java: "#b07219",
  Go: "#00add8",
  Shell: "#89e051",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Ruby: "#701516",
  Rust: "#dea584",
  PHP: "#4f5d95",
  MDX: "#fcb32c",
};

const DEFAULT_COLOR = "#6b7280";

type LangBarProps = {
  languages: { name: string; count: number; pct: number }[];
};

export default function GitHubLangBars({ languages }: LangBarProps) {
  return (
    <div className="flex flex-col gap-3">
      {languages.map((lang, i) => (
        <div key={lang.name} className="flex items-center gap-3">
          <span className="w-28 shrink-0 font-varuna text-sm text-black dark:text-white text-right">
            {lang.name}
          </span>
          <div className="flex-1 h-2 rounded-full bg-tr-black/20 dark:bg-tr-white/20 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: LANG_COLORS[lang.name] ?? DEFAULT_COLOR,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${lang.pct}%` }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            />
          </div>
          <span className="w-9 shrink-0 font-varuna text-xs text-tr-black dark:text-tr-white">
            {lang.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}
