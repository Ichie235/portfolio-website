import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main
      className={`relative w-full h-full flex flex-col items-center px-4 md:px-16 lg:px-10 xl:px-16 py-16 md:py-24 overflow-x-hidden`}
    >
      <Hero />
      <Work />
    </main>
  );
}
