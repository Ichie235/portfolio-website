"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import ThemeButton from "@/utils/ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "../../SVG/Hamburger";
import Close from "../../SVG/Close";
import UserPortrait from "../../SVG/UserPortrait";
import Blog from "../../SVG/Blog";
import Project from "../../SVG/Project";
import Home from "../../SVG/Home";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const resetNavbar = () => {
    setIsOpen(false);
  };
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const { resolvedTheme } = useTheme();
  let src;

  const navItems = [
    {
      id: "home",
      path: "/",
      title: "Home",
      icon: <Home />,
    },
    {
      id: "about",
      path: "/about",
      title: "About",
      icon: <UserPortrait />,
    },
    {
      id: "projects",
      path: "/projects",
      title: "Projects",
      icon: <Project />,
    },
    {
      id: "blog",
      path: "/blog",
      title: "Blog",
      icon: <Blog />,
    },
  ];

  switch (resolvedTheme) {
    case "light":
      src = "/chinemerem-logo.png";
      break;
    case "dark":
      src = "/chinemerem-logo-dark.png";
      break;
    default:
      src = "/chinemerem-logo.png";
      break;
  }

  return (
    <nav className="relative w-screen px-6 md:px-16 py-2 flex items-center z-10 justify-between border-b border-b-tr-black dark:border-b-tr-white">
      <Link href={"/"}>
        <Image
          src={src}
          alt="Chinemerem Ichie logo"
          width={60}
          height={60}
          priority
        />
      </Link>

      <menu className="flex items-center font-varuna text-base gap-5">
        {navItems.map((items) => (
          <Link
            key={items.id}
            href={items.path}
            className={`hidden md:block hover:text-red dark:hover:text-green text-black dark:text-white
                            ${
                              isActive(items.path)
                                ? "text-red dark:text-green"
                                : ""
                            }
                        `}
            passHref
          >
            {items.title}
          </Link>
        ))}
      </menu>

      <ThemeButton
        className={`hidden md:block rounded !text-2xl !p-1 border border-red dark:border-green transition-transform ease-in-out duration-150`}
      />
      {/*Navbar Mobile view */}
      <div className="md:hidden flex items-center justify-between gap-4">
        <ThemeButton
          className={`md:hidden rounded !text-2xl !p-1 border border-red dark:border-green transition-transform ease-in-out duration-150`}
        />
        <div className="lg:hidden">
          <button
            className="md:hidden rounded-lg border border-tr-black dark:border-tr-white w-10 h-10 px-2"
            onClick={toggleNavbar}
          >
            <Hamburger />
          </button>
        </div>

        <div
          className={`md:hidden ${
            isOpen
              ? "block fixed right-0 top-0 z-10 h-full w-[88%] transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-black bg-white translate-x-0 rounded-none"
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-end mt-6 px-8">
            <button
              aria-label="Toggle Menu"
              className="dark:bg-lighter-tr-black bg-white border dark:border-tr-white border-zinc-200 rounded-full p-2 duration-500 null "
              onClick={toggleNavbar}
            >
              <Close />
            </button>
          </div>
          <nav className="flex flex-col mt-6">
            {" "}
            {navItems.map((items) => (
              <Link
                key={items.id}
                href={items.path}
                className={` md:hidden flex flex-col items-start gap-x-2 font-varuna font-semibold text-base dark:shadow-line-dark shadow-line-light p-4 group hover:text-red dark:hover:text-green text-black dark:text-white
                            ${
                              isActive(items.path)
                                ? "text-red dark:hover:text-green dark:text-green"
                                : ""
                            }
                        `}
                passHref
                onClick={resetNavbar}
              >
                <span className="flex gap-2 items-center">
                  {items.icon} {items.title}
                </span>
                <hr className="w-full dark:bg-tr-white" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
