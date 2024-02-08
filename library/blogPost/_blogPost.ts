export type BlogPostProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  liveLink?: string;
};

export const blogPost: BlogPostProps[] = [
  {
    id: "2",
    title: "My First Experience with useContext React.",
    description:
      " Article on my first experienceusing useContext. My experience with useContext sums up the ups and downs of switching between dev worlds. At first, it felt like diving into the deep end, but with some grit, good advice, and lots of tinkering, I got the hang of it.",
    date: "Feb 08, 2024",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://medium.com/@chinemeremichie/my-first-experience-with-usecontext-react-0d703dc9bf7f",
  },
  {
    id: "1",
    title: "How I built a simple Blog API using Node.js, Express, and MongoDB.",
    description:
      " Article on how to build a simple blog API using Node.js Express and MongoDB. In this article, we were able to perform some of the CRUD functionalities that Node.js provides. We were able to create a blog, find blogs, authenticate blog users using JSON Web Token and also implement views using EJS.",
    liveLink: "https://ichie-blogging-api.cyclic.app/",
    date: "Jan 14, 2023",
    readTime: "24 min",
    image: "/blog-images/blog-picx.svg",
    link: "https://medium.com/@chinemeremichie/how-i-built-a-simple-blog-api-using-node-js-express-and-mongodb-851a34a867b",
  },
];
