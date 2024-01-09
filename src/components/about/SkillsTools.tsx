"use client"
import { technologies } from "./_tech";
import { Icon } from "@iconify/react";
import { tools } from "./_tools";


export default function SkillsTools() {
  return (
    <section className="w-full text-lg">
        <section className="flex flex-col gap-5">
            <h4 className="text-md font-taruno flex items-center gap-3">
                Technologies
                <Icon icon="noto:technologist" />
            </h4>
            {technologies.map((items, index) => (
                <span key={index} className="flex items-center gap-2">
                    <img src={items.icon} width={20} height={20} alt={items.name} />
                    <a href={items.link} target="_blank" className="hover:text-red dark:hover:text-green">
                        {items.name}
                    </a>
                    <small className="text-tr-black dark:text-tr-white">
                        {items.title}
                    </small>
                </span>
            ))}
        </section>

        <br />
        <br />
        
        <section className="flex flex-col gap-5">
            <h4 className="text-md font-taruno flex items-center gap-3">
                Tools
                <Icon icon="fa-solid:tools" />
            </h4>
            {tools.map((items, index) => (
                <span key={index} className="flex items-center gap-2">
                    <img src={items.icon} width={20} height={20} alt={items.name} />
                    <a href={items.link} target="_blank" className="hover:text-red dark:hover:text-green">
                        {items.name}
                    </a>
                    <small className="text-tr-black dark:text-tr-white">
                        {items.title}
                    </small>
                </span>
            ))}
        </section>
    </section>
  )
}
