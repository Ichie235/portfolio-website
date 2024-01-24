"use client";
import { technologies } from "./_tech";
import { Icon } from "@iconify/react";
import { tools } from "./_tools";
import Image from "next/image";
import Link from "next/link";

export default function SkillsTools() {
  return (
    <section className="w-full text-lg">
      <h4 className="text-md font-taruno flex justify-center items-center gap-3 mb-16 text-3xl">
        Technologies
        <Icon icon="noto:technologist" />
      </h4>
      <section className="w-[90%] lg:w-[70%] mx-auto my-0  grid  gap-x-3 gap-y-8 grid-cols-4 justify-center lg:grid-cols-5">
        {technologies.map((items, index) => (
          <span key={index} className="flex items-center gap-2">
            <Image
              src={items.icon}
              width={85}
              height={85}
              alt={items.name}
              loading="lazy"
              decoding="async"
              data-nimg={1}
              className="grayscale hover:filter-none transition-[scale, filter] duration-500 ease-in-out transform hover:scale-110"
              style={{ color: "transparent", scale: 1 }}
            />
            <Link
              href={items.link}
              target="_blank"
              className="hover:text-red dark:hover:text-green md:hidden"
            >
              {items.name}
            </Link>
            <small className="text-tr-black dark:text-tr-white md:hidden">
              {items.title}
            </small>
          </span>
        ))}
      </section>

      <br />
      <br />
      <h4 className="text-md font-taruno flex justify-center items-center gap-3 text-3xl text-center mt-16 mb-12">
        Tools
        <Icon icon="fa-solid:tools" />
      </h4>
      <section className="w-[90%] lg:w-[70%] mx-auto my-0  grid  gap-x-3 gap-y-8 grid-cols-4 justify-center lg:grid-cols-5">
        {tools.map((items, index) => (
          <span key={index} className="flex items-center gap-2">
            <Image
              src={items.icon}
              width={75}
              height={75}
              alt={items.name}
              className="grayscale hover:filter-none transition-[scale, filter] duration-500 ease-in-out transform hover:scale-110"
              style={{ color: "transparent", scale: 1 }}
            />
            <Link
              href={items.link}
              target="_blank"
              className="hover:text-red dark:hover:text-green md:hidden"
            >
              {items.name}
            </Link>
            <small className="text-tr-black dark:text-tr-white md:hidden">
              {items.title}
            </small>
          </span>
        ))}
      </section>
    </section>
  );
}
