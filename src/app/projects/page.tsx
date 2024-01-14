import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/images/me.png";
import { project } from "../../../library/_project";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chinemerem Ichie | Projects",
  // metadataBase: new URL(""),
  description:
    "This is the page where you get to see the projects i have done 😉",
};

export default function About() {
  return (
    <main className="flex flex-col gap-14 max-w-7xl mx-auto md:px-12 px-4">
      <div className="flex flex-col gap-7 mt-[7rem] max-w-2xl">
        <h1 className="font-taruno text-2xl sm:text-4xl lg:leading-[3.5rem]">
          Projects
        </h1>
        <p className="font-varuna text-based leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {project.map((item, index) => (
          <Link key={index} href={`/projects/${item.id}`}>
            <div className="card card-side shadow-md bg-tr-white dark:bg-lighter-tr-black p-2 transition duration-300 ease-in-out transform hover:scale-105">
              <figure>
                <Image src={me} alt="Project Icons" width={80} height={80} />
              </figure>
              <div className="card-body font-varuna">
                <h2 className="card-title mt-[-1rem]">{item.name}</h2>
                <p className="text-sm dark:text-neutral-300 ">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}