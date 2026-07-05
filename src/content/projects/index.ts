export type ProjectSlug =
  | "blog-website"
  | "one7thapartment"
  | "avvic-bank"
  | "ecommerce"
  | "restaurant-website";

export type ProjectProps = {
  id: string;
  name: string;
  slug: ProjectSlug;
  description: string;
  icon: string;
  image: string;
  link: string;
};

export const project: ProjectProps[] = [
  {
    id: "1",
    slug: "blog-website",
    name: "Blog Website",
    description: "This project was built with Node.js, Express and Mongodb.",
    icon: "/blog-images/blog-picx.svg",
    image: "/blog-images/blog-picx.svg",
    link: "https://ichie-blogging-api.cyclic.app/",
  },
  {
    id: "2",
    slug: "one7thapartment",
    name: "17Th Apartment",
    description:
      "Utilizing the power of Next.js, TypeScript, Tailwind, and Flutterwave API.",
    icon: "/project-images/apartment-logo.svg",
    image: "/project-images/17thapartment.png",
    link: "https://one7th-apartment.onrender.com/", 
  },
  {
    id: "3",
    slug: "avvic-bank",
    name: "Avvic Bank",
    description:
      "Utilizing the power of React, SCSS, Routing, Node.js.",
    icon: "/avvic-icon.png",
    image: "/project-images/avvic-bank-picx.png",
    link: "https://avvicbank.com/",
  },
  {
    id: "4",
    slug: "ecommerce",
    name: "Ecommerce Website",
    description:
      "This project was built with Next.js, Tailwind CSS, Prisma, MongoDB, and Auth0 authentication.",
    icon: "/project-images/ecommerce-logo.png",
    image: "/project-images/ecommerce-dispaly.png",
    link: "https://ecommerce-website-7mh4.onrender.com/",
  },
  {
    id: "5",
    slug: "restaurant-website",
    name: "Restaurant Website",
    description:
      "This project was built with Next.js, Tailwind CSS, Prisma, MongoDB, and JWT authentication.",
    icon:"/project-images/restaurant-logo.png",
    image: "/project-images/restaurant-image.png",
    link: "https://restaurant-website-3pnw.onrender.com/",
  },
];
