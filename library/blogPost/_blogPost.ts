export type BlogPostProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  liveLink: string;
};

export const blogPost: BlogPostProps[] = [
  {
    id: "1",
    title: "How I built a simple Blog API using Node.js, Express, and MongoDB.",
    description:
      " Article on how to build a simple blog API using Node.js Express and MongoDB. In this article, we were able to perform some of the CRUD functionalities that Node.js provides. We were able to create a blog, find blogs, authenticate blog users using JSON Web Token and also implement views using EJS.",
    liveLink: "https://ichie-blogging-api.cyclic.app/",
    date:"Jan 14, 2023",
    readTime:"24 min",
    image:
      "/blog-images/blog-picx.svg",
    link: "https://medium.com/@chinemeremichie/how-i-built-a-simple-blog-api-using-node-js-express-and-mongodb-851a34a867b",
  },
];
