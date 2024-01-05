import { StaggerText } from "@/animations/StaggerText"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Chinemerem Ichie | About",
    // metadataBase: new URL(""),
    description: "This is the page where you get to know me, fully 😉"
}

export default function About() {
  return (
    <main className="w-full h-[200vh] px-16 py-4">
      {/* About me */}
      <StaggerText text="Hello there" />
    </main>
  )
}
