export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  overview: string;
  image: string;
  stack: Record<string, string>;
  features: Record<string, string>;
  link: string;
};

export const project: ProjectProps[] = [
  {
    id: "1",
    name: "Next JS",
    description:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overview:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    stack: { css: "css", js: "js", nodeJs: "node.js" },
    features: { responsive: "responsive design", secure: "security" },
    link: "https://nextjs.org/learn/dashboard-app",
  },
  {
    id: "2",
    name: "Next JS",
    description:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overview:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    stack: { css: "css", js: "js", nodeJs: "node.js" },
    features: { responsive: "responsive design", secure: "security" },
    link: "https://nextjs.org/learn/dashboard-app",
  },
  {
    id: "3",
    name: "Next JS",
    description:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overview:
      "Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    stack: { css: "css", js: "js", nodeJs: "node.js" },
    features: { responsive: "responsive design", secure: "security" },
    link: "https://nextjs.org/learn/dashboard-app",
  },
];
