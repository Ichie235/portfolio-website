import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {

  return (
    <main className={`relative w-full h-full items-center px-16 py-24`}>
      <Hero />
      <Work />
    </main>
  )
}
