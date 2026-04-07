import type { Metadata } from "next";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const siteConfig = {
  name: "Chinemerem Ichie",
  title: "Chinemerem Ichie | Portfolio",
  description:
    "Portfolio website of Chinemerem Ichie, a full-stack software engineer building scalable web applications.",
  url: siteUrl,
  ogImage: "/logo/chinemerem-logo-dark.png",
  twitterHandle: "@chinemerem_rich",
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
}: MetadataInput): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
  };
}
