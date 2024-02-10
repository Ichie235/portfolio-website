export type ProjectProps = {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
};

export const project: ProjectProps[] = [
  {
    id: "1",
    title: "Blog Wesite built using Node.js, Express and Mongodb",
    slug: "blog-wesite",
    name: "Blog Wesite",
    description:
      "This project was built with Node.js, Express and Mongodb.",
    icon: "/blog-images/blog-picx.svg",
    image: "/blog-images/blog-picx.svg",
    link: "https://ichie-blogging-api.cyclic.app/",
  },
  {
    id: "2",
    title: "Blog Wesite built using Node.js, Express and MONGODB",
    slug: "blog-wesite",
    name: "Blog Wesite",
    description:
      "This project contains CRUD functionalities, authentication and EJS templating view that Node.js provides.",
    icon: "/blog-images/blog-picx.svg",
    image: "/blog-images/blog-picx.svg",
    link: "https://ichie-blogging-api.cyclic.app/",
  },
];
