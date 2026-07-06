"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeadText } from "@/animations/HeadText";
import { FlowerPot } from "@/animations/Flower";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center gap-8">
      <div className="flex items-end gap-6">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="font-taruno text-[9rem] sm:text-[13rem] leading-none font-bold text-red dark:text-green select-none"
        >
          404
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="mb-6 hidden sm:block"
        >
          <FlowerPot />
        </motion.div>
      </div>

      <HeadText
        el="h1"
        text="Page Not Found"
        className="font-taruno text-2xl sm:text-4xl"
        once
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-varuna text-muted max-w-sm text-base leading-relaxed"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <Link
          href="/"
          className="font-varuna border border-red dark:border-green text-red dark:text-green px-8 py-3 rounded-md text-sm hover:bg-red dark:hover:bg-green hover:text-white dark:hover:text-black transition-colors duration-150"
        >
          ← Back to home
        </Link>
      </motion.div>
    </main>
  );
}
