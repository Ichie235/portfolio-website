import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <p className="font-taruno text-red dark:text-green text-sm tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="font-taruno text-3xl sm:text-5xl font-bold mb-6">
        Page not found
      </h1>
      <p className="font-varuna text-muted max-w-md text-base leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-varuna border border-red dark:border-green text-red dark:text-green px-6 py-3 rounded-md text-sm hover:bg-red dark:hover:bg-green hover:text-white dark:hover:text-black transition-colors duration-150"
      >
        Back to home
      </Link>
    </main>
  );
}
