import { StaggerText } from "@/animations/StaggerText";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="w-full  flex flex-col items-center lg:items-start  px-0 lg:px-2 xl:px-12 mt-4 md:mt-10">
      <StaggerText
        text="Work and Experience"
        once
        className="custom-work-head w-full  text-base  md:text-3xl font-taruno font-semibold  xl:pl-5"
      />

      <aside className="w-full font-varuna flex flex-wrap items-center justify-center mt-2 mb-6">
        {workData.map((items, index) => (
          // <span key={items.id} className="relative max-w-10 basis-1 grow flex items-start gap-4 py-6">
          //   <Link href={items.link}>
          //     <Image src={items.image} width={60} height={60} alt="Avvic Group"/>
          //   </Link>
          //   <aside>
          //     <h4 className="font-semibold text-lg">{items.company}</h4>
          //     <p>{items.title}</p>

          //     <span className="text-tr-black dark:text-tr-white text-sm">From <em>{items.start}</em> to <em>{items.end}</em></span>
          //   </aside>
          // </span>
          <div
            key={index}
            className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10"
          >
            <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200">
              <Link
                href={items.link}
                target="_blank"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src={items.image}
                  className="object-cover duration-300"
                  style={{ color: "transparent" }}
                />
              </Link>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Educative</h3>
                <p>Project Author</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  Dec 5, 2023{/* */} -{/* */}{" "}
                  <span className="dark:text-primary-color text-tertiary-color">
                    Present
                  </span>
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  Technical content author tasked with creating interactive
                  real-world tutorials, focused on topics like Next.js,
                  TypeScript, React.{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
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
    start: "Nov, 2021",
    end: "June 2023",
    image: "/alt-school.png",
  },
];
