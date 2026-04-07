import type { ProjectSlug } from "./_project";
import { blogData, linksData } from "./blogProject/_blogData";
import {
  apartmentData,
  apartmentlinksData,
} from "./one7thapartment/_apartmentData";
import {
  avvicBankData,
  avvicBanklinksData,
} from "./avvicBankProject/_avvicBankData";
import {
  ecommerceData,
  ecommercelinksData,
} from "./ecommerceProject/_ecommerceData";
import {
  restaurantData,
  restaurantlinksData,
} from "./restaurantProject/_restaurantProjectData";

export type ProjectTechnologyLink = {
  href: string;
  text: string;
  description: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectContent = {
  overview: string[];
  features: ProjectFeature[];
  technologies: ProjectTechnologyLink[];
};

type ProjectContentSource = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
} & Record<string, string | undefined>;

const toOverview = (item: ProjectContentSource) =>
  [item.paragraph1, item.paragraph2].filter(
    (paragraph): paragraph is string => Boolean(paragraph)
  );

const toFeatures = (item: ProjectContentSource) =>
  Object.entries(item)
    .filter(([key]) => !["id", "paragraph1", "paragraph2"].includes(key))
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([title, description]) => ({
      title,
      description,
    }));

export const projectContentBySlug: Record<ProjectSlug, ProjectContent> = {
  "blog-website": {
    overview: toOverview(blogData[0]),
    features: toFeatures(blogData[0]),
    technologies: linksData,
  },
  one7thapartment: {
    overview: toOverview(apartmentData[0]),
    features: toFeatures(apartmentData[0]),
    technologies: apartmentlinksData,
  },
  "avvic-bank": {
    overview: toOverview(avvicBankData[0]),
    features: toFeatures(avvicBankData[0]),
    technologies: avvicBanklinksData,
  },
  ecommerce: {
    overview: toOverview(ecommerceData[0]),
    features: toFeatures(ecommerceData[0]),
    technologies: ecommercelinksData,
  },
  "restaurant-website": {
    overview: toOverview(restaurantData[0]),
    features: toFeatures(restaurantData[0]),
    technologies: restaurantlinksData,
  },
};
