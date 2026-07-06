"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeadText } from "@/animations/HeadText";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-tr-black dark:border-tr-white bg-transparent px-4 py-3 font-varuna text-sm text-black dark:text-white placeholder-tr-black dark:placeholder-tr-white outline-none transition-colors focus:border-red dark:focus:border-green";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="w-full">
      <HeadText
        el="h1"
        text="Get in Touch"
        className="font-taruno text-3xl md:text-5xl mb-2"
        once
      />
      <p className="font-varuna text-tr-black dark:text-tr-white mb-10 max-w-lg">
        Have a project in mind, a question, or just want to say hello? Fill out
        the form and I&apos;ll get back to you as soon as possible.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col items-start gap-4 rounded-md border border-green bg-tr-green/10 p-8"
          >
            <span className="text-2xl">🎉</span>
            <p className="font-taruno text-xl text-green">Message sent!</p>
            <p className="font-varuna text-sm text-tr-black dark:text-tr-white">
              Thanks for reaching out. I&apos;ll reply to{" "}
              <span className="text-black dark:text-white">{form.email || "your email"}</span> shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 font-varuna text-sm underline underline-offset-4 text-red dark:text-green"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 max-w-2xl"
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="name"
                  className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
                >
                  Name <span className="text-red dark:text-green">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Chinemerem Ichie"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="email"
                  className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
                >
                  Email <span className="text-red dark:text-green">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
              >
                Subject{" "}
                <span className="normal-case text-tr-black dark:text-tr-white opacity-60">
                  (optional)
                </span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry, collaboration, etc."
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
              >
                Message <span className="text-red dark:text-green">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-varuna text-sm text-red dark:text-red"
              >
                {errorMsg}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start flex items-center gap-2 rounded-md border border-red dark:border-green px-6 py-3 font-varuna text-sm text-red dark:text-green transition-colors hover:bg-red hover:text-white dark:hover:bg-green dark:hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
