"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeButton from "@/utils/ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const { resolvedTheme } = useTheme();
    let src

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
    ]

    switch(resolvedTheme) {
        case 'light':
            src = '/chinemerem-logo.png'
            break
        case 'dark':
            src = '/chinemerem-logo-dark.png'
            break
        default:
            src = '/chinemerem-logo.png'
        break
    }
    

    return (
        <nav className="relative w-screen px-16 py-2 flex items-center z-10 justify-between border-b border-b-tr-black dark:border-b-tr-white">
            <Link href={"/"}>
                <Image src={src} alt="Chinemerem Ichie logo" width={60} height={60} priority/>
            </Link>

            <menu className="flex items-center font-varuna text-base gap-5">
                {navItems.map((items) => (
                    <Link
                        key={items.id}
                        href={items.path}
                        className={`hover:text-red dark:hover:text-green text-black dark:text-white
                            ${isActive(items.path) ? 'text-red dark:text-green' : ''}
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
        </nav>
    )
};
