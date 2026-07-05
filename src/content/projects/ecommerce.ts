export type EcommerceWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
  Listing: string;
  Cart: string;
  Caching: string;
  Authentication: string;
};

export const ecommerceData: EcommerceWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "Our ecommerce website, built on Next.js with Tailwind CSS for styling, leverages Prisma and MongoDB to manage product data efficiently. It provides users with a seamless shopping experience, allowing them to browse a variety of items available for sale.",
    paragraph2:
      "With a focus on user convenience and real-time updates, our platform offers features such as a dynamic cart system, Google OAuth authentication, and an admin portal for product management.      ",
    Listing:
      "showcases a diverse range of products available for purchase, organized in a user-friendly manner for easy browsing.",
    Cart: "Users can add items to their cart and adjust quantities, with real-time price adjustments calculated and displayed dynamically. Anonymous shopping is supported, with the ability to merge anonymous cart data with user profiles seamlessly upon login using Google OAuth authentication.",
    Caching:
      "Next.js caching mechanisms are employed to optimize website performance, ensuring swift page loading and responsiveness.",
    Authentication:
      "Users have the option to shop anonymously or log in to their profiles securely via Google OAuth authentication, enhancing personalization and account management.",
  },
];

export const ecommercelinksData = [
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
    text: "Tailwind Css",
    href: "https://www.tailwindcss.com/",
    description: "Styling framework",
  },
  {
    text: "Prisma",
    href: "https://prisma.io/",
    description: "database toolkit",
  },
];
