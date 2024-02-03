"use client";
import { HeadText } from "@/animations/HeadText";
import { TextReveal } from "@/animations/TextReveal";
import { socials } from "../../library/_data";
import Link from "next/link";
import { Icon } from "@iconify/react";
import IchieHeroXl from "../../SVG/IchieHeroXl";
import IchieHeroLg from "../../SVG/IchieHeroLg";
import IchieHeroMd from "../../SVG/IchieHeroMd";

export default function Hero() {
  const title = ["Fullstack Software\nEngineer"];
  const about = [
    "Hi, I am Chinemerem Ichie, a fullstack developer based in Enugu.\nI excel at creating powerful and scalable web applications for everyday use",
  ];

  return (
    <main
      role="main"
      className="w-full h-screen flex flex-col items-center md:gap-4 lg:items-start lg:flex-row lg:justify-between lg:px-2 xl:px-12 mt-10 "
    >
      <section className="xl:pl-5">
        <div>
          <HeadText
            el="pre"
            text={title}
            className="font-taruno text-4xl dark:"
            once
          />{" "}
          <br />
          <TextReveal
            el="pre"
            width="fit-content"
            text={about}
            className="text-tr-black dark:text-tr-white font-varuna dark:"
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
      <section className="hidden xl:block px-7">
        <IchieHeroXl />
      </section>
      <section className="hidden md:block xl:hidden px-7">
        <IchieHeroLg />
      </section>
     
    </main>
  );
}
