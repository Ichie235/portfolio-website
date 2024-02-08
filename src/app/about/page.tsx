"use client"
import AboutMe from "../../components/about/Content";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/images/me.png";
import SkillsTools from "../../components/about/SkillsTools";
import Link from "next/link";
import Download from "../../../SVG/Download";
import Email from "../../../SVG/Email";
// import DownloadButton from "@/utils/DownloadButton";
// import resume from "@/assets/documents/richard-resume.pdf";
import { useState } from "react";
import axios from "axios";

// export const metadata: Metadata = {
//   title: "Chinemerem Ichie | About",
//   // metadataBase: new URL(""),
//   description: "This is the page where you get to know me, fully 😉",
// };

export default function About() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await axios.get("/api/download/route.ts", {
        responseType: "blob", // Important: responseType 'blob' is needed to handle binary data (like PDF files)
      });

      // Create a temporary URL to the PDF blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element and click it to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "richard-resume.pdf");
      document.body.appendChild(link);
      link.click();
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloading(false);
    } catch (error) {
      console.error("Error occurred while downloading PDF:", error);
      setDownloading(false);
    }
  };
  return (
    <main className="w-full px-6 md:px-12 overflow-x-hidden lg:px-20 xl:px-36 pt-3 pb-4 md:py-4 ">
      <section className="w-full flex flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-around  mt-[3rem] md:mt-[6rem]">
        <div className="md:w-[70%] mt-16 md:mt-0">
          <AboutMe />
        </div>
        <aside className="flex flex-col justify-between gap-7 md:mb-10">
          <Image
            src={me}
            width={400}
            height={400}
            alt="Chinemerem Ichie Richard"
            className="rounded-xl  border border-black max-h-96 min-h-96 object-cover "
          />
          <>
            <div className="flex flex-col text-center gap-y-4">
              <div className="flex items-center gap-x-3 px-1">
                <Link
                  href="https://docs.google.com/document/d/1NAvwsjQFyEy0yUauFJ9fcduJAcrIwYeyDN7hhnykLks/edit?usp=drivesdk"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-lighter-tr-black bg-[#e7decc] border-transparent dark:hover:border-lighter-tr-black hover:border-tr-green rounded-md py-2 text-lg font-incognito font-semibold"
                >
                  View Résumé{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="text-base"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
                  </svg>
                </Link>
                <button
                  className="flex items-center justify-center text-center dark:text-[#32d48b] text-secondary-color hover:underline basis-[10%] dark:bg-lighter-tr-black bg-[#e7decc] border border-transparent dark:hover:border-tr-black hover:border-tr-green rounded-md py-3 text-lg"
                  title="Download Resume"
                  onClick={handleDownload} disabled={downloading}
                >
                   {downloading ? 'Downloading...' : 'Download PDF'}
                  <Download />
                </button>
              </div>
              <Link
                href="mailto:chinemeremichie@gmail.com"
                className="flex items-center gap-x-2 hover:text-primary-color"
              >
                <Email />
                chinemeremichie@gmail.com
              </Link>
            </div>
          </>
        </aside>
      </section>
      {/* <br />
      <br /> */}
      <div className="w-full mt-16 md:mt-20  md:px-20 lg:px-16">
        <SkillsTools isInView={true} />
      </div>
    </main>
  );
}
