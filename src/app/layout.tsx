import type { Metadata } from "next";
import { Anek_Latin, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import BackToTopButton from "@/components/BackToTopButton";
import { buildPageMetadata } from "@/lib/site";

const anek = Anek_Latin({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = buildPageMetadata({
  title: "Chinemerem Ichie | Portfolio",
  description:
    "Portfolio website of Chinemerem Ichie, a full-stack software engineer building scalable web applications.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/logo/chinemerem-logo-dark.png"
          type="image/x-icon"
        />
      </head>
      <body
        className={`
        relative w-full min-h-screen max-h-full overflow-x-hidden bg-white bg-noise text-black  dark:bg-black dark:text-white transition-colors duration-100 scroll-smooth
        ${anek.className} ${anek.variable} ${orbitron.variable} ${spaceGrotesk.variable}
        scrollbar-thin scrollbar-thumb-rounded-sm scrollbar-thumb-black dark:scrollbar-thumb-white 
      `}
      >
        <Provider>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <BackToTopButton />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
