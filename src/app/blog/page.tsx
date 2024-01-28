import { Metadata } from "next";
import Explore from "../../../SVG/Explore";
import Image from "next/image";
import { project } from "../../../library/projects/_project";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chinemerem Ichie | About",
  // metadataBase: new URL(""),
  description: "This is the page where i post about things i have built 😉",
};

export default function Blog() {
  return (
    <main className="w-full px-6 md:px-12 overflow-x-hidden lg:px-20 xl:px-36 pt-3 pb-4 md:py-4 ">
      <section className=" mt-[2rem] md:mt-[4rem]">
        <h1 className="max-w-3xl font-taruno font-semibold tracking-tight text-3xl  md:text-5xl mb-6 md:leading-[3.7rem]">
          My Blog
        </h1>
        <p className="mb-10 max-w-2xl text-base md:text-lg text-[#5e5f69] dark:text-white leading-relaxed">
          Welcome to my blog where I share personal stories about things I have
          learned, projects I have worked on and so on.
        </p>
        <div className="flex items-center gap-x-2 mb-8">
          <Explore />
          <h2 className="text-xl font-varuna font-semibold tracking-tight">
            Explore
          </h2>
        </div>
      </section>
      <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
        {project.map((item, index) => (
          <Link key={index} href={`/blog/${item.name}`}>
            <div className="card lg:card-side shadow-xl border border-tr-white bg-[#f8f8f8] dark:bg-lighter-tr-black md:h-72  lg:h-64">
              <figure>
                <Image
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                  width={100}
                  height={100}
                  className=" mt-6 w-[85%] h-[224px] md:mt-0 md:w-[400px] md:h-[400px] lg:w-[554.4px] lg:h-[254.4px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p className="text-[#5e5f69] dark:text-white">
                  Click the button to listen on Spotiwhy app. Click the button
                  to listen on Spotiwhy app. Click the button to listen on
                  Spotiwhy app.Click the button to listen on Spotiwhy app. Click
                  the button to listen on Spotiwhy app. Click the button to
                  listen on Spotiwhy app.
                </p>
                <p className="text-[#5e5f69] dark:text-white">
                  Click the button to listen on Spotiwhy app. Click the button
                  to listen on Spotiwhy app. Click the button to listen on
                  Spotiwhy app.Click the button to listen on Spotiwhy app. Click
                  the button to listen on Spotiwhy app. Click the button to
                  listen on Spotiwhy app.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
