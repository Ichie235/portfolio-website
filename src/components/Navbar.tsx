"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import ThemeButton from "@/utils/ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const { resolvedTheme } = useTheme();
  let src;

  const navItems = [
    {
      id: "about",
      path: "/about",
      title: "About",
    },
    {
      id: "projects",
      path: "/projects",
      title: "Projects",
    },
    {
      id: "blog",
      path: "/blog",
      title: "Blog",
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
        className={`rounded !text-2xl !p-1 border border-red dark:border-green transition-transform ease-in-out duration-150`}
      />
      <div className="flex items-center justify-between ">
        <div className="lg:hidden">
          <button
            className="md:hidden rounded-lg border border-tr-black w-10 h-10 px-2"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <Image
                src="/hamburger-menu.svg"
                width={30}
                height={30}
                alt="hambuger-menu"
                className="text-black w-7 h-7"
              />
            )}
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <Link
            href="/"
            className="text-white px-2 py-1 block lg:inline-block hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white px-2 py-1 block lg:inline-block hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white px-2 py-1 block lg:inline-block hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
