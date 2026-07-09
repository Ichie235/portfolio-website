"use client";
import { motion } from "framer-motion";
import { projectTimelines } from "@/content/projects/content";
import type { ProjectSlug } from "@/content/projects";

export default function ProjectTimeline({ slug }: { slug: ProjectSlug }) {
  const timeline = projectTimelines[slug];
  if (!timeline?.length) return null;

  return (
    <div className="mt-10">
      <h2 className="font-varuna text-lg font-bold md:text-2xl text-section mb-8">
        Development Timeline
      </h2>
      <ol className="relative">
        {timeline.map((item, i) => {
          const isLast = i === timeline.length - 1;
          return (
            <motion.li
              key={item.phase}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="relative flex gap-5 pb-10"
            >
              {/* Line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <span className="h-3 w-3 rounded-full bg-red dark:bg-green ring-4 ring-white dark:ring-black mt-1 shrink-0 z-10" />
                {!isLast && (
                  <span className="w-px flex-1 bg-tr-black/30 dark:bg-tr-white/30 mt-1" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-2 ${isLast ? "" : ""}`}>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-taruno text-base font-semibold text-black dark:text-white">
                    {item.phase}
                  </h3>
                  {item.duration && (
                    <span className="font-varuna text-[10px] uppercase tracking-widest text-tr-black dark:text-tr-white border border-tr-black dark:border-tr-white rounded-full px-2 py-0.5">
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="font-varuna text-sm md:text-base text-[#3f3f46] dark:text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
