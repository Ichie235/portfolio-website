export type BlogWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2: string;
  CRUD: string;
  JWT: string;
};

export const blogData: BlogWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "ICHIE-BLOGGONG-API is a dynamic Node.js web application. With its seamless integration of CRUD functionalities, JWT web token authentication, and MongoDB database setup, it offers users a robust   platform to create, share, and explore captivating blog content   ",
    paragraph2: "",
    CRUD: "ICHIE-BLOGGONG-API empowers users with full control over their content through Create, Read, and Search operations. It allows, users can effortlessly manage their blog entries.",
    JWT: "Security is paramount, and with JWT web token authentication, users can trust in a secure environment for their blogging endeavors. Each user's identity is verified, ensuring only authorized access to sensitive functionalities.",
  },
];
