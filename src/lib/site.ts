import type { Metadata } from "next";
import { siteAssets } from "./assets";

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
  ogImage: siteAssets.socialPreview,
  twitterHandle: "@chinemerem_rich",
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
}: MetadataInput): Metadata {
  const ogImage =
    image ??
    `${siteConfig.ogImage}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
  };
}
