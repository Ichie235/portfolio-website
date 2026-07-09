import type { ProjectSlug } from "./index";

export type TimelineItem = {
  phase: string;
  description: string;
  duration?: string;
};
import { blogData, linksData } from "./blog-website";
import { apartmentData, apartmentlinksData } from "./one7th-apartment";
import { avvicBankData, avvicBanklinksData } from "./avvic-bank";
import { ecommerceData, ecommercelinksData } from "./ecommerce";
import { restaurantData, restaurantlinksData } from "./restaurant";

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

export const projectTimelines: Record<ProjectSlug, TimelineItem[]> = {
  "blog-website": [
    {
      phase: "Planning",
      description: "Mapped out the REST API endpoints, data models, and authentication strategy. Chose Node.js + Express for the server and MongoDB for flexible document storage.",
      duration: "Week 1",
    },
    {
      phase: "Backend Setup",
      description: "Initialized the Express server, connected MongoDB via Mongoose, and designed the blog post and user schemas with proper indexing.",
      duration: "Week 2",
    },
    {
      phase: "Authentication",
      description: "Implemented JWT-based authentication — registration, login, and protected routes. Token validation middleware applied across all write operations.",
      duration: "Week 3",
    },
    {
      phase: "CRUD & Views",
      description: "Built full Create, Read, and Search functionality for blog posts. Integrated EJS templating for server-rendered views with reusable layout components.",
      duration: "Week 4",
    },
    {
      phase: "Deployment",
      description: "Deployed the application to Cyclic.sh with environment variable configuration. Performed end-to-end testing of all API routes in the production environment.",
      duration: "Week 5",
    },
  ],
  one7thapartment: [
    {
      phase: "Requirements",
      description: "Gathered client requirements for the apartment booking system — check-in/check-out dates, service types (event, vacation, personal), and payment flow.",
      duration: "Week 1",
    },
    {
      phase: "UI Design",
      description: "Built the component library with Next.js and Tailwind CSS — booking calendar, service cards, cart drawer, and responsive layouts for all screen sizes.",
      duration: "Week 2–3",
    },
    {
      phase: "Core Features",
      description: "Implemented the booking system, dynamic service recommendations, and reservation logic with a 24-hour expiry window for unpaid bookings.",
      duration: "Week 4–5",
    },
    {
      phase: "Payment Integration",
      description: "Integrated Flutterwave API for secure checkout — card, bank transfer, and mobile wallet support. Handled payment verification callbacks.",
      duration: "Week 6",
    },
    {
      phase: "Testing & Launch",
      description: "Tested the full booking-to-payment flow across devices and browsers. Deployed to Render with environment-specific configurations.",
      duration: "Week 7",
    },
  ],
  "avvic-bank": [
    {
      phase: "Analysis",
      description: "Analysed the banking product requirements — account types (savings, fixed deposit, joint, current), loan requests, debit card activation, and dashboard needs.",
      duration: "Week 1",
    },
    {
      phase: "UI Development",
      description: "Built the component library with React and SCSS — responsive layouts, account cards, transaction tables, and form components matching the bank's brand.",
      duration: "Week 2–4",
    },
    {
      phase: "Account Management",
      description: "Implemented the account creation flow for all account types, credential generation, and the personalized dashboard with account summary views.",
      duration: "Week 5–6",
    },
    {
      phase: "Backend API",
      description: "Built the Node.js API layer with PostgreSQL — account operations, loan request processing, debit card management, and secure session handling.",
      duration: "Week 7–8",
    },
    {
      phase: "QA & Launch",
      description: "Performed cross-browser testing, accessibility review, and security audit. Deployed the full-stack application and handed over to the Avvic Groups team.",
      duration: "Week 9",
    },
  ],
  ecommerce: [
    {
      phase: "Architecture",
      description: "Chose Next.js App Router for SSR/ISR, Prisma with MongoDB for the data layer, and Auth0 for authentication. Designed the product, user, and cart schemas.",
      duration: "Week 1",
    },
    {
      phase: "Product Catalog",
      description: "Built the product listing pages with Next.js caching for performance. Implemented the admin portal for product CRUD operations via Prisma.",
      duration: "Week 2–3",
    },
    {
      phase: "Cart System",
      description: "Built a dual-mode cart — anonymous shopping (session-based) and authenticated carts (database-persisted). Implemented seamless cart merge on login.",
      duration: "Week 4–5",
    },
    {
      phase: "Authentication",
      description: "Integrated Auth0 for Google OAuth. Protected admin routes, linked user profiles to cart data, and handled session management across the app.",
      duration: "Week 6",
    },
    {
      phase: "Optimization & Deploy",
      description: "Tuned Next.js caching strategies for product pages, reduced bundle size, and deployed to Render. Validated the full purchase flow end-to-end.",
      duration: "Week 7",
    },
  ],
  "restaurant-website": [
    {
      phase: "Planning",
      description: "Designed the restaurant ordering system — menu categories, item variants, cart, checkout, and order management. Chose Next.js + Prisma + MongoDB for the stack.",
      duration: "Week 1",
    },
    {
      phase: "Menu & Orders",
      description: "Built the Prisma schemas for menu items, categories, and orders. Implemented CRUD APIs for menu management and order placement.",
      duration: "Week 2–3",
    },
    {
      phase: "Authentication",
      description: "Implemented JWT-based authentication for customers and restaurant staff. Role-based access control for the admin dashboard.",
      duration: "Week 4",
    },
    {
      phase: "Customer Experience",
      description: "Built the customer-facing menu browser, cart management, and checkout flow with real-time order status updates.",
      duration: "Week 5–6",
    },
    {
      phase: "Deployment",
      description: "Deployed the application to Render with production environment variables. Ran load tests on the ordering API and validated the full order lifecycle.",
      duration: "Week 7",
    },
  ],
};

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
