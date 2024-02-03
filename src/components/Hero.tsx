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

export default function Hero() {
  const title = ["Fullstack Software\nEngineer"];
  const about = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in Enugu.\nI excel at creating powerful and scalable web applications for everyday use",
  ];
  const aboutSm = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in Enugu.\nI excel at creating powerful and scalable web applications for everyday use",
  ];
  const { resolvedTheme } = useTheme();

  return (
    <main
      role="main"
      className="w-full h-screen flex flex-col items-center md:gap-4 lg:items-start lg:flex-row lg:justify-between px-0 lg:px-2 xl:px-12 mt-4 md:mt-10 "
    >
      <section className="xl:pl-5 ">
        <div className="w-[90%] md:w-full ">
          <HeadText
            el="pre"
            text={title}
            className="font-taruno text-base text-center  md:text-4xl dark:"
            once
          />{" "}
          <br />
          <TextReveal
            el="pre"
            width="fit-content"
            text={about}
            className="hidden md:block text-tr-black dark:text-tr-white font-varuna dark:"
          />
          <TextReveal
            el="pre"
            width="fit-content"
            text={aboutSm}
            className="md:hidden text-tr-black text-sm dark:text-tr-white font-varuna dark:"
          />
        </div>
        <div className="relative flex items-center my-7 gap-5 flex-wrap">
          {socials.map((items) => (
            <Link
              key={items.id}
              href={items.url}
              className="relative font-varuna text-base p-2 max-w-fit basis-1 grow flex items-center gap-2 dark: border rounded-md transition-colors duration-75 border-tr-black hover:border-tr-red dark:border-tr-white dark:hover:border-tr-green"
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
          <section className="hidden xl:block px-4">
            <IchieHeroXl />
          </section>
          <section className="hidden md:block xl:hidden">
            <IchieHeroLg />
          </section>
          <section className="block md:hidden w-full">
            <IchieHeroSm />
          </section>
        </>
      )}
      {resolvedTheme === "light" && (
        <>
          <section className="hidden xl:block px-4">
            <IchieHeroLightXl />
          </section>
          <section className="hidden md:block xl:hidden ">
            <IchieHeroLightLg />
          </section>
        </>
      )}
    </main>
  );
}
