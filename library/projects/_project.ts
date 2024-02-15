export type ProjectProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  link: string;
};

export const project: ProjectProps[] = [
  {
    id: "1",
    slug: "blog-wesite",
    name: "Blog Wesite",
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
    image: "/project-images/avvic-bank-pix.png",
    link: "https://avvicbank.com/",
  },
  {
    id: "4",
    slug: "ecommerce",
    name: "Ecommerce Wesite",
    description:
      "This project was built with Next.Js, Tailwindcss, Prisma, Mongodb and AuthO authentication.",
    icon: "/project-images/ecommerce-logo.png",
    image: "/project-images/ecommerce-dispaly.png",
    link: "https://ecommerce-website-7mh4.onrender.com/",
  },
  {
    id: "5",
    slug: "restaurant-website",
    name: "Restaurant Website",
    description:
      "This project was built with Next.Js, Tailwindcss, Prisma, Mongodb and JWT authentication.",
    icon: "/avvic-icon.png",
    image: "/project-images/avvic-bank-pix.png",
    link: "https://avvicbank.com/",
  },
];
