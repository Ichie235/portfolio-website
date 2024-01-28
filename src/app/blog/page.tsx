import { Metadata } from "next";
import Explore from "../../../SVG/Explore";

// import DownloadButton from "@/utils/DownloadButton";
// import resume from "@/assets/documents/richard-resume.pdf";

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
          <h2 className="text-xl font-varuna font-semibold tracking-tight">Explore</h2>
        </div>
      </section>
      <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
        <article>
            
        </article>
      </div>
    </main>
  );
}
