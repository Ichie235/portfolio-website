"use client";
import { HeadText } from "@/animations/HeadText";
import { TextReveal } from "@/animations/TextReveal";
import { socials } from "../../library/_data";
import Link from "next/link";
import { Icon } from "@iconify/react";
import IchieHeroXl from "../../SVG/IchieHeroXl";
import IchieHeroLg from "../../SVG/IchieHeroLg";
import { useTheme } from "next-themes";
import IchieHeroLightXl from "../../SVG/IchieHeroLightXl";
import IchieHeroLightLg from "../../SVG/IchieHeroLightLg";
import IchieHeroSm from "../../SVG/IchieHeroSm";
import IchieHeroLightSm from "../../SVG/IchieHeroLightSm";

export default function Hero() {
  const title = ["Fullstack Software\nEngineer"];
  const about = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in Enugu.\nI excel at creating powerful and scalable web applications for everyday use",
  ];
  const aboutLgSm = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in \nEnugu. I excel at creating powerful and scalable \nweb applications for everyday use",
  ];
  const aboutMdSm = [
    "Hi, I am Chinemerem Ichie, a fullstack developer \nbased in Enugu. I excel at creating powerful and \nscalable web \napplications for everyday use",
  ];
  const aboutXlSm = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in \nEnugu. I excel at creating powerful and scalable web \napplications for everyday use",
  ];
  const aboutSm = [
    "Hi, I am Chinemerem Ichie, a fullstack \ndeveloper based in Enugu. I excel at \ncreating powerful and scalable web \napplications for everyday use",
  ];
  const { resolvedTheme } = useTheme();

  return (
    <main
      role="main"
      className="w-full h-[70%] flex flex-col items-center md:gap-6 lg:items-start lg:flex-row lg:justify-between px-0 lg:px-2 xl:px-12 mt-4 md:mt-10 "
    >
      <section className="px-2 xl:pl-5 ">
        <div className="">
          <HeadText
            el="pre"
            text={title}
            className="w-[90%] md:w-full  font-taruno text-base  md:text-4xl dark:"
            once
          />{" "}
          <br />
          <TextReveal
            el="pre"
            width="fit-content"
            text={about}
            className="hidden md:block w-full text-tr-black dark:text-tr-white font-varuna dark:"
          />
          <TextReveal
            el="pre"
            text={aboutXlSm}
            className="hidden  custom-xl  text-tr-black text-base dark:text-tr-white font-varuna dark:"
          />
          <TextReveal
            el="pre"
            text={aboutLgSm}
            className="hidden  custom-mdLg  text-tr-black text-base dark:text-tr-white font-varuna dark:"
          />
          <TextReveal
            el="pre"
            text={aboutMdSm}
            className="hidden md:hidden custom-md text-tr-black text-base dark:text-tr-white font-varuna dark:"
          />
          <TextReveal
            el="pre"
            text={aboutSm}
            className=" custom-sm md:hidden text-tr-black text-base dark:text-tr-white font-varuna dark:"
          />
        </div>
        <div className="relative flex items-center my-7 gap-2 md:gap-5 flex-wrap">
          {socials.map((items) => (
            <Link
              key={items.id}
              href={items.url}
              className="relative font-varuna text-sm md:text-base p-2 max-w-fit basis-1 grow flex items-center gap-2 dark: border rounded-md transition-colors duration-75 border-tr-black hover:border-tr-red dark:border-tr-white dark:hover:border-tr-green"
              target="_blank"
            >
              <Icon icon={items.icon} />
              <span>{items.title}</span>
            </Link>
          ))}
        </div>
      </section>
      {resolvedTheme === "dark" && (
        <>
          <section className="hidden xl:block transform hover:-rotate-12 hover:-mt-10 px-4 -mt-8">
            <IchieHeroXl />
          </section>
          <section className="hidden md:block xl:hidden animation-bounce mt-10 ">
            <IchieHeroLg />
          </section>
          <section className="block md:hidden mt-12 transform -rotate-45 w-full">
            <IchieHeroSm />
          </section>
        </>
      )}
      {resolvedTheme === "light" && (
        <>
          <section className="hidden xl:block transform hover:-rotate-12 hover:-mt-10 px-4 -mt-8">
            <IchieHeroLightXl />
          </section>
          <section className="hidden md:block xl:hidden -rotate-45 -mt-10">
            <IchieHeroLightLg />
          </section>
          <section className="block px-3 mt-12 transform  md:hidden w-full animation-bounce">
            <IchieHeroLightSm />
          </section>
        </>
      )}
    </main>
  );
}
