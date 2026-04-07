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
import { useEffect, useState } from "react";

export default function Hero() {
  const title = "Full-Stack Software Engineer";
  const aboutText =
    "Hi, I am Chinemerem Ichie, a full-stack developer based in Enugu. I excel at creating powerful and scalable web applications for everyday use.";
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="w-full h-[70%] flex flex-col items-center md:gap-6 lg:items-start lg:flex-row lg:justify-between px-0  xl:px-12 mt-4 md:mt-10 "
    >
      <section className="px-2 xl:pl-5 ">
        <div className="">
          <HeadText
            el="h1"
            text={title}
            className="w-[90%] max-w-xl text-balance font-taruno text-base md:w-full md:text-4xl"
            once
          />
          <br />
          <TextReveal
            el="p"
            text={aboutText}
            className="w-full max-w-2xl text-base leading-relaxed text-tr-black dark:text-tr-white font-varuna"
          />
        </div>
        <div className="relative flex items-center my-7 gap-2 md:gap-5 flex-wrap">
          {socials.map((items) => (
            <Link
              key={items.id}
              href={items.url}
              className="relative flex grow basis-1 items-center gap-2 rounded-md border border-tr-black p-2 font-varuna text-sm transition-colors duration-75 hover:border-tr-red dark:border-tr-white dark:hover:border-tr-green md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={items.icon} />
              <span>{items.title}</span>
            </Link>
          ))}
        </div>
      </section>
      {mounted && resolvedTheme === "dark" && (
        <>
          <section className="hidden xl:block transform hover:-rotate-12 hover:-mt-10 px-4 -mt-8">
            <IchieHeroXl />
          </section>
          <section className="hidden md:block xl:hidden animation-bounce mt-10 ml-[-17px]">
            <IchieHeroLg />
          </section>
          <section className="block md:hidden mt-3 mb-8 transform -rotate-45 w-full px-8">
            <IchieHeroSm />
          </section>
        </>
      )}
      {mounted && resolvedTheme === "light" && (
        <>
          <section className="hidden xl:block transform hover:-rotate-12 hover:-mt-10 px-4 -mt-8">
            <IchieHeroLightXl />
          </section>
          <section className="hidden md:block xl:hidden  -rotate-45 -mt-20 ml-[-25px]">
            <IchieHeroLightLg />
          </section>
          <section className="block px-8 mt-24 transform  md:hidden w-full animation-bounce">
            <IchieHeroLightSm />
          </section>
        </>
      )}
    </section>
  );
}
