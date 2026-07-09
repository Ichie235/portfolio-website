"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-tr-black dark:border-tr-white bg-transparent px-4 py-3 font-varuna text-sm text-black dark:text-white placeholder-tr-black dark:placeholder-tr-white outline-none transition-colors focus:border-red dark:focus:border-green";

export default function GuestbookForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", handle: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/guestbook", {
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
      setForm({ name: "", handle: "", message: "" });
      setCharCount(0);
      router.refresh();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-3 rounded-md border border-green bg-tr-green/10 px-5 py-4"
        >
          <span className="text-xl">🎉</span>
          <div>
            <p className="font-varuna text-sm font-semibold text-green">
              You&apos;re in the book!
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-varuna text-xs text-tr-black dark:text-tr-white underline underline-offset-2 mt-0.5"
            >
              Sign again
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="gb-name"
                className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
              >
                Name <span className="text-red dark:text-green">*</span>
              </label>
              <input
                id="gb-name"
                name="name"
                type="text"
                required
                maxLength={50}
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="gb-handle"
                className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
              >
                Twitter / GitHub{" "}
                <span className="normal-case opacity-60">(optional)</span>
              </label>
              <input
                id="gb-handle"
                name="handle"
                type="text"
                maxLength={50}
                placeholder="@yourhandle"
                value={form.handle}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="gb-message"
                className="font-varuna text-xs uppercase tracking-widest text-tr-black dark:text-tr-white"
              >
                Message <span className="text-red dark:text-green">*</span>
              </label>
              <span
                className={`font-varuna text-xs ${
                  charCount > 260
                    ? "text-red dark:text-red"
                    : "text-tr-black dark:text-tr-white"
                }`}
              >
                {charCount}/280
              </span>
            </div>
            <textarea
              id="gb-message"
              name="message"
              required
              rows={3}
              maxLength={280}
              placeholder="Say something nice…"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-varuna text-sm text-red"
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
                Signing…
              </>
            ) : (
              "Sign the Guestbook"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
