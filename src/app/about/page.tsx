import AboutMe from "../../components/about/Content";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/images/me.png";
import SkillsTools from "../../components/about/SkillsTools";
// import resume from "@/assets/documents/richard-resume.pdf";

export const metadata:Metadata = {
    title: "Chinemerem Ichie | About",
    // metadataBase: new URL(""),
    description: "This is the page where you get to know me, fully 😉"
}

export default function About() {
  return (
    <main className="w-full px-16 py-4">
      <section className="w-full flex max-md:flex-col-reverse items-start justify-around">
        <AboutMe />
        <aside className="flex flex-col justify-between gap-10">
          <Image src={me} width={400} height={400} alt="Chinemerem Ichie Richard"/>
          <a
            href="../assets/documents/richard-resume.pdf"
            download
            rel="noreferrer noopener"
            className="w-[60%] text-center self-center rounded-sm border border-red dark:border-green p-2 hover:bg-tr-black dark:hover:bg-tr-white"
          >
            Download my Resumé
          </a>
        </aside>
      </section>
      <br />
      <br />
      <SkillsTools />
    </main>
  )
}
