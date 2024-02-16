export type RestaurantWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
  Dashboard: string;
  Cart: string;
  Menu: string;
  Authentication: string;
};

export const restaurantData: RestaurantWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "Welcome to Lillie's, where culinary excellence meets modern convenience. Our restaurant website, meticulously crafted with Next.js, Tailwind CSS, and Next JWT authentication, offers an immersive dining experience from the comfort of your own home. With seamless navigation and robust features, we strive to bring the flavors of our kitchen directly to your fingertips.",
    paragraph2: "",
    Dashboard:
      "Upon logging in, users gain access to their personalized dashboard, where they can explore a plethora of culinary delights. The dashboard serves as a central hub for navigating through our diverse menu offerings and managing their dining preferences.",
    Cart: "lanning your perfect meal is effortless with our interactive cart functionality. Users can conveniently browse through our menu, add their favorite items to the cart, and adjust quantities with ease.",
    Menu:
      "Extensive Menu Selection. Delight your taste buds with our extensive menu selection, meticulously curated to cater to diverse palates. From savory appetizers to indulgent desserts, there's something to satisfy every craving.",
    Authentication:
      "With Next JWT authentication, registering and logging in are swift and secure processes, ensuring that every interaction with our platform is protected.",
  },
];

export const restaurantlinksData = [
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
