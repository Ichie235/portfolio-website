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
    image: "/project-images/17thapartment.webp",
    link: "http://one7th-apartment.onrender.com/",
  },
];
