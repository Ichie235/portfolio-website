export type ApartmentWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
  CRUD: string;
  JWT: string;
  MongoDB: string;
  EJS: string;
};

export const apartmentData: ApartmentWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "17thApartment is a sophisticated web application built to streamline the booking process for luxury apartment rentals. Utilizing the power of Next.js, MongoDB integration, and Flutterwave API, 17thApartment offers users a seamless and secure platform to book their desired accommodations and services.",
    paragraph2: "",
    CRUD: "ICHIE-BLOGGONG-API empowers users with full control over their content through Create, Read, and Search operations. It allows, users can effortlessly manage their blog entries.",
    JWT: "Security is paramount, and with JWT web token authentication, users can trust in a secure environment for their blogging endeavors. Each user's identity is verified, ensuring only authorized access to sensitive functionalities.",
    MongoDB:
      "enables flexible data storage, facilitating seamless management of diverse content types.",
    EJS: "EJS templating empowers dynamic HTML generation, facilitating reusable components and streamlined content creation.",
  },
];

export const apartmentlinksData = [
  {
    href: "https://nextjs.org/learn/dashboard-app",
    text: "Next.Js",
    description: "FullStack Framework",
  },
  {
    href: "https://www.mongodb.com/",
    text: "MongoDb",
    description: "Database",
  },
  {
    href: "https://render.com/",
    text: "render",
    description: "Hosting platform",
  },
  {
    text: "TypeScript",
    href: "https://www.typescriptlang.org/",
    description: "Programing language",
  },
  {
    text: "Flutterwave",
    href: "https://flutterwave.com/us/",
    description: "Payment platform",
  },
];
