export type BlogWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
  CRUD: string;
  JWT: string;
  MongoDB: string;
  EJS: string;
};

export const blogData: BlogWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "ICHIE-BLOGGONG-API is a dynamic Node.js web application. With its seamless integration of CRUD functionalities, JWT web token authentication, and MongoDB database setup, it offers users a robust   platform to create, share, and explore captivating blog content   ",
    paragraph2: "",
    CRUD: "ICHIE-BLOGGONG-API empowers users with full control over their content through Create, Read, and Search operations. It allows, users can effortlessly manage their blog entries.",
    JWT: "Security is paramount, and with JWT web token authentication, users can trust in a secure environment for their blogging endeavors. Each user's identity is verified, ensuring only authorized access to sensitive functionalities.",
    MongoDB:
      "enables flexible data storage, facilitating seamless management of diverse content types.",
    EJS: "EJS templating empowers dynamic HTML generation, facilitating reusable components and streamlined content creation.",
  },
];


export const linksData = [
  {
    href: "https://nodejs.org/docs/latest/api/",
    text: "NodeJs",
    description: "Javascript runtime",
  },
  {
    href: "https://www.mongodb.com/",
    text: "MongoDb",
    description: "Database",
  },
  {
    href: "https://www.cyclic.sh/",
    text: "Cyclic",
    description: "Hosting platform",
  },
  {
    href: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    text: "Bootstrap",
    description: "Css framework",
  },
];