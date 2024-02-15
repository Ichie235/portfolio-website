"use client";
import {
  blogData,
  linksData,
} from "../../../library/projects/blogProject/_blogData";
import {
  apartmentData,
  apartmentlinksData,
} from "../../../library/projects/one7thapartment/_apartmentData";
import {
  avvicBankData,
  avvicBanklinksData,
} from "../../../library/projects/avvicBankProject/_avvicBankData";
import {
  ecommerceData,
  ecommercelinksData,
} from "../../../library/projects/ecommerceProject/_ecommerceData";
import Link from "next/link";

type ProjectStackProps = {
  projectName: string;
};

const ProjectStack: React.FC<ProjectStackProps> = ({ projectName }) => {
  if (projectName === "blog-wesite") {
    const blogItem = blogData.find((item) => item.id === "1");
    if (blogItem) {
      const entries = Object.entries(blogItem);
      const startingIndex = Math.max(0, entries.length - 4);
      return (
        <>
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold">
            Key Features:
          </h1>
          {entries.slice(startingIndex).map(([key, value]) => (
            <>
              <ul
                className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-base md:px-4 md:text-lg "
                key={key}
              >
                <li>
                  {" "}
                  <strong className="font-bold">{key}</strong>: {value}
                </li>
              </ul>
            </>
          ))}
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold mt-5">
            Technologies:
          </h1>
          <ul className="list-disc mt-5 ml-5 text-[#3f3f46] gap-9 flex flex-col dark:text-white text-base md:px-4 md:text-lg ">
            {linksData.map((link, index) => (
              <li key={index}>
                {" "}
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-semibold text-red dark:text-green"
                >
                  {link.text}
                </Link>
                : {link.description}
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else if (projectName === "one7thapartment") {
    const apartmentItem = apartmentData.find((item) => item.id === "1");
    if (apartmentItem) {
      const entries = Object.entries(apartmentItem);
      const startingIndex = Math.max(0, entries.length - 5);
      return (
        <>
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold">
            Key Features:
          </h1>
          {entries.slice(startingIndex).map(([key, value]) => (
            <>
              <ul
                className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-base md:px-4 md:text-lg "
                key={key}
              >
                <li>
                  {" "}
                  <strong className="font-bold">{key}</strong>: {value}
                </li>
              </ul>
            </>
          ))}
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold mt-5">
            Technologies:
          </h1>
          <ul className="list-disc mt-5 ml-5 text-[#3f3f46] gap-9 flex flex-col dark:text-white text-base md:px-4 md:text-lg ">
            {apartmentlinksData.map((link, index) => (
              <li key={index}>
                {" "}
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-semibold text-red dark:text-green"
                >
                  {link.text}
                </Link>
                : {link.description}
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else if (projectName === "avvic-bank") {
    const avvicBankItem = avvicBankData.find((item) => item.id === "1");
    if (avvicBankItem) {
      const entries = Object.entries(avvicBankItem);
      const startingIndex = Math.max(0, entries.length - 6);
      return (
        <>
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold">
            Key Features:
          </h1>
          {entries.slice(startingIndex).map(([key, value]) => (
            <>
              <ul
                className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-base md:px-4 md:text-lg "
                key={key}
              >
                <li>
                  {" "}
                  <strong className="font-bold">{key}</strong>: {value}
                </li>
              </ul>
            </>
          ))}
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold mt-5">
            Technologies:
          </h1>
          <ul className="list-disc mt-5 ml-5 text-[#3f3f46] gap-9 flex flex-col dark:text-white text-base md:px-4 md:text-lg ">
            {avvicBanklinksData.map((link, index) => (
              <li key={index}>
                {" "}
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-semibold text-red dark:text-green"
                >
                  {link.text}
                </Link>
                : {link.description}
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else if (projectName === "ecommerce") {
    const ecommerceItem = ecommerceData.find((item) => item.id === "1");
    if (ecommerceItem) {
      const entries = Object.entries(ecommerceItem);
      const startingIndex = Math.max(0, entries.length - 4);
      return (
        <>
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold">
            Key Features:
          </h1>
          {entries.slice(startingIndex).map(([key, value]) => (
            <>
              <ul
                className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-base md:px-4 md:text-lg "
                key={key}
              >
                <li>
                  {" "}
                  <strong className="font-bold">{key}</strong>: {value}
                </li>
              </ul>
            </>
          ))}
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold mt-5">
            Technologies:
          </h1>
          <ul className="list-disc mt-5 ml-5 text-[#3f3f46] gap-9 flex flex-col dark:text-white text-base md:px-4 md:text-lg ">
            {ecommercelinksData.map((link, index) => (
              <li key={index}>
                {" "}
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-semibold text-red dark:text-green"
                >
                  {link.text}
                </Link>
                : {link.description}
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else {
    return <li className="">hello world</li>;
  }
};

export default ProjectStack;
