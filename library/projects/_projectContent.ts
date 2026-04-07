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

const toOverview = (item: Record<string, string>) =>
  [item.paragraph1, item.paragraph2].filter(Boolean);

const toFeatures = (item: Record<string, string>) =>
  Object.entries(item)
    .filter(([key]) => !["id", "paragraph1", "paragraph2"].includes(key))
    .map(([title, description]) => ({
      title,
      description,
    }));

export const projectContentBySlug: Record<string, ProjectContent> = {
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
