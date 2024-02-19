import { StaggerText } from "@/animations/StaggerText";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="w-full h-[70%] flex flex-col items-center md:gap-6 md:px-0   mt-4 md:mt-10">
      <StaggerText
        text="Work and Experience"
        once
        className="custom-work-head w-full md:w-[89%]   text-base  md:text-3xl font-taruno font-semibold "
      />

      <aside className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10 px-3 lg:px-2 xl:px-6 mt-12">
        {workData.map((items, index) => (
          <div key={index} className="">
            <div className="flex items-start font-varuna lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-[#2DDDC0] before:bg-tr-red">
              <Link
                href={items.link}
                target="_blank"
                className="grid place-items-center dark:bg-[#27272a] bg-white border dark:border-white border-bla min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  alt="work place icons"
                  width={45}
                  height={45}
                  src={items.image}
                  className="object-cover duration-300"
                  style={{ color: "transparent" }}
                />
              </Link>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{items.company}</h3>
                <p>{items.title}</p>
                <time className="text-sm text-[#5e5f69] dark:text-white mt-2 tracking-widest uppercase">
                  {items.start}
                  {/* */} -{/* */}{" "}
                  <span className="dark:text-[#2DDDC0] text-tr-red">
                    {items.end}
                  </span>
                </time>
                <p className="tracking-tight dark:text-white text-[#5e5f69] my-4">
                  {items.description}
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
    title: "Web Developer",
    link: "https://avvicgroup.com/",
    description:
      "Web Developer. Specialized in creating scalable and responsive web application, API intergration and testing. Work with React, Javascript, Typescript, Next.Js, Node.Js, databases etc",
    start: "May, 2023",
    end: "Present",
    image: "/avvic-icon.png",
  },
  {
    id: 2,
    company: "AltSchool Africa",
    title: "Backend Developer Intern",
    link: "https://altschoolafrica.com/",
    description:
      "Node.js developer. Performed CRUD functionality, learnt about algorithm, databases, data manipulation using array, object and best practices in creating scalable API's etc.",
    start: "Nov, 2021",
    end: "June 2023",
    image: "/altschool-africa.svg",
  },
];
