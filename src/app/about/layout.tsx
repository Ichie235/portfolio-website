import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinemerem Ichie | About",
  description: "This is the page where you get to know me, fully 😉",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="">{children}</main>;
}
