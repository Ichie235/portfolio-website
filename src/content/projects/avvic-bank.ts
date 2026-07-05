export type AvvicBankProps = {
  id: string;
  paragraph1: string;
  Home?: string;
  About?: string;
  Responsive: string;
  Account: string;
  Dashboard: string;
  Products: string;
};

export const avvicBankData: AvvicBankProps[] = [
  {
    id: "1",
    paragraph1:
      "Avvic Bank is a powerful and secure bank web application designed to streamline financial transactions and provide a seamless banking experience. With a user-friendly interface and robust features, this application allows customers to manage their accounts, perform transactions, and access various banking services online.",
    Home: "The home page serves as a gateway to Avvic Bank's services, providing introductory information about the bank and its offerings.",
    About:
      "The About page comprehensively details Avvic Bank's mission, values, and the range of services it offers to its customers.",
    Responsive:
      "Avvic Bank's web application features a mobile-responsive user interface, ensuring seamless access and optimal viewing experience across various devices, including smartphones and tablets.",
    Account:
      "Users can conveniently create various types of accounts, such as fixed deposit, savings, joint, and current accounts, through the online portal.",
    Dashboard:
      "Upon successful account creation, users are issued login credentials, granting them access to their personalized dashboard. Here, users can efficiently manage their accounts, including requesting loans, activating debit cards, and conducting other banking transactions.",
    Products:
      "The Product page highlights the diverse range of banking products and services provided by Avvic Bank, including but not limited to fixed deposit investments, loans, savings accounts, USSD banking, chat banking, and debit cards.etc",
  },
];

export const avvicBanklinksData = [
  {
    href: "https://www.react.dev/",
    text: "React",
    description: "Javascript library",
  },
  {
    href: "https://nodejs.org/docs/latest/api/",
    text: "NodeJs",
    description: "Javascript runtime",
  },
  {
    href: "https://www.postgres.com/",
    text: "Postgres",
    description: "Database",
  },
  {
    href: "https://www.render.com/",
    text: "Render",
    description: "Hosting platform",
  },
  {
    href: "https://SCSS.com/",
    text: "SCSS",
    description: "CSS",
  },
];
