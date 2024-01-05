import { StaggerText } from "@/animations/StaggerText";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="w-full h-[40vh]">
      <StaggerText text="Work and Experience" className="text-3xl font-taruno font-semibold"/>

      <aside className="w-full font-varuna flex flex-wrap items-center justify-center mt-2 mb-6">
        {workData.map((items) => (
          <span key={items.id} className="relative max-w-10 basis-1 grow flex items-start gap-4 py-6">
            <Link href={items.link}>
              <Image src={items.image} width={60} height={60} alt="Avvic Group"/>
            </Link>
            <aside>
              <h4 className="font-semibold text-lg">{items.company}</h4>
              <p>{items.title}</p>

              <span className="text-tr-black dark:text-tr-white italic text-sm">From {items.start} to {items.end}</span>
            </aside>
          </span>
        ))}
      </aside>
    </section>
  )
}


const workData = [
  {
    id: 1,
    company: "Avvic Groups",
    title: "Backend Developer Intern",
    link: "https://avvicgroup.com/",
    start: "May, 2023",
    end: "Present",
    image: "/avvic-icon.png",
  },
  {
    id: 2,
    company: "Alt School",
    title: "Backend Developer Intern",
    link: "https://altschoolafrica.com/",
    start: "May, 2023",
    end: "Present",
    image: "/alt-school.png",
  },
]