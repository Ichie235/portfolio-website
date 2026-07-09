"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeButton from "@/utils/ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "@/icons/Hamburger";
import Close from "@/icons/Close";
import UserPortrait from "@/icons/UserPortrait";
import Blog from "@/icons/Blog";
import Project from "@/icons/Project";
import Home from "@/icons/Home";
import Email from "@/icons/Email";
import Guestbook from "@/icons/Guestbook";
import { siteAssets } from "@/lib/assets";
import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setOpen: openPalette } = useCommandPalette();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const resetNavbar = () => {
    setIsOpen(false);
  };
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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
    {
      id: "contact",
      path: "/contact",
      title: "Contact",
      icon: <Email />,
    },
    {
      id: "guestbook",
      path: "/guestbook",
      title: "Guestbook",
      icon: <Guestbook />,
    },
  ];

  const src =
    mounted && resolvedTheme === "dark"
      ? siteAssets.logoDark
      : siteAssets.logoLight;

  return (
    <nav
      aria-label="Primary"
      className="w-full px-6 md:px-16 py-2 flex items-center z-10 justify-between border-b border-b-tr-black dark:border-b-tr-white"
    >
      <Link href={"/"}>
        <Image
          src={src}
          alt="Chinemerem Ichie logo"
          width={60}
          height={60}
          priority
          sizes="60px"
        />
      </Link>

      <div className="flex items-center font-varuna text-base gap-5">
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
          >
            {items.title}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={() => openPalette(true)}
          aria-label="Open command palette"
          className="flex items-center gap-2 rounded border border-tr-black dark:border-tr-white px-2.5 py-1 font-varuna text-xs text-tr-black dark:text-tr-white hover:border-red dark:hover:border-green hover:text-red dark:hover:text-green transition-colors"
        >
          <span>Search</span>
          <kbd className="flex items-center gap-0.5 opacity-70">
            <span>⌘</span><span>K</span>
          </kbd>
        </button>
        <ThemeButton
          className={`rounded !text-2xl !p-1 border border-red dark:border-green transition-transform ease-in-out duration-150`}
        />
      </div>
      {/*Navbar Mobile view */}
      <div className="md:hidden flex items-center justify-between gap-4">
        <ThemeButton
          className={`md:hidden rounded !text-2xl !p-1 border border-red dark:border-green transition-transform ease-in-out duration-150`}
        />
        <button
          onClick={() => openPalette(true)}
          aria-label="Open command palette"
          className="md:hidden rounded-lg border border-tr-black dark:border-tr-white w-10 h-10 flex items-center justify-center text-black dark:text-white hover:border-red dark:hover:border-green hover:text-red dark:hover:text-green transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="1.1em" height="1.1em" aria-hidden>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
        <div className="md:hidden">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden rounded-lg border border-tr-black dark:border-tr-white w-10 h-10 px-2"
            onClick={toggleNavbar}
          >
            <Hamburger />
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`md:hidden ${
            isOpen
              ? "fixed right-0 top-0 z-10 h-full w-[88%] dark:bg-black  transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.6,1)] bg-white translate-x-0 rounded-none"
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-end mt-6 px-8">
            <button
              aria-label="Close navigation menu"
              className="rounded-full border border-zinc-200 bg-white p-2 duration-500 dark:border-tr-white dark:bg-lighter-tr-black"
              onClick={toggleNavbar}
            >
              <Close />
            </button>
          </div>
          <nav className="flex flex-col mt-6 ">
            {" "}
            {navItems.map((items) => (
              <Link
                key={items.id}
                href={items.path}
                className={`md:hidden flex flex-col items-start gap-x-2 font-varuna font-semibold text-base dark:shadow-line-dark shadow-line-light p-4 group hover:text-red dark:hover:text-green text-black dark:text-white
                          ${
                            isActive(items.path)
                              ? "text-red dark:hover:text-green dark:text-green"
                              : ""
                          }
                      `}
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
