"use client";
import { useEffect, useState } from "react";
import { technologies } from "./_tech";
import { Icon } from "@iconify/react";
import { tools } from "./_tools";
import Image from "next/image";
import Link from "next/link";

export default function SkillsTools({ isInView }: { isInView: boolean }) {
  const [currentTechIndex, setCurrenTechtIndex] = useState(0);
  const [currentToolIndex, setCurrenTooltIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        setCurrenTechtIndex(
          (prevIndex) => (prevIndex + 1) % technologies.length
        );
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        setCurrenTooltIndex((prevIndex) => (prevIndex + 1) % tools.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);

  return (
    <section className="w-full text-lg">
      <h4 className="text-left text-xl md:text-3xl md:text-center font-taruno flex md:justify-center  md:items-center gap-3 mb-10 md:mb-16 ">
        Technologies
        <Icon icon="noto:technologist" />
      </h4>
      <section className="w-full lg:w-[70%] md:mx-auto my-0  grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-8  md:justify-center lg:grid-cols-5">
        {technologies.map((items, index) => (
          <span key={index} className="flex items-center gap-2">
            <Link href={items.link} target="_blank" className="">
              <Image
                src={items.icon}
                width={20}
                height={20}
                alt={items.name}
                className="grayscale hover:filter-none transition-[scale, filter] duration-500 ease-in-out transform hover:scale-110 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px]"
                style={{
                  scale: index === currentTechIndex ? 1.1 : 1,
                  filter: index === currentTechIndex ? "none" : "",
                }}
              />
            </Link>
            <Link
              href={items.link}
              target="_blank"
              className="text-red underline dark:text-green md:hidden"
            >
              {items.name}
            </Link>
            <small className="text-tr-black text-nowrapwrap text-sm dark:text-tr-white md:hidden">
              {items.title}
            </small>
          </span>
        ))}
      </section>

      <br />
      <br />
      <h4 className="text-left text-xl md:text-3xl md:text-center font-taruno flex md:justify-center  md:items-center gap-3 mb-10 md:mb-16 md:mt-16">
        Tools
        <Icon icon="fa-solid:tools" />
      </h4>
      <section className="w-[90%] lg:w-[70%] md:mx-auto my-0  grid grid-cols-1  gap-x-3 gap-y-8 md:grid-cols-4 justify-center lg:grid-cols-5 mb-1 md:mb-8">
        {tools.map((items, index) => (
          <span key={index} className="flex items-center gap-2">
            <Link href={items.link} target="_blank" className="">
              <Image
                src={items.icon}
                width={20}
                height={20}
                alt={items.name}
                className="grayscale hover:filter-none transition-[scale, filter] duration-500 ease-in-out transform hover:scale-110 md:w-16 md:h-16 lg:w-[75px] lg:h-[75px]"
                style={{
                  scale: index === currentToolIndex ? 1.1 : 1,
                  filter: index === currentToolIndex ? "none" : "",
                }}
              />
            </Link>
            <Link
              href={items.link}
              target="_blank"
              className="text-red underline dark:text-green  md:hidden"
            >
              {items.name}
            </Link>
            <small className="text-tr-black text-sm dark:text-tr-white md:hidden">
              {items.title}
            </small>
          </span>
        ))}
      </section>
    </section>
  );
}
