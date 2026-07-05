export type ApartmentWebsiteProps = {
  id: string;
  paragraph1: string;
  paragraph2?: string;
  Booking: string;
  Service: string;
  Reservation: string;
  Checkout: string;
  Cart: string;
};

export const apartmentData: ApartmentWebsiteProps[] = [
  {
    id: "1",
    paragraph1:
      "17thApartment is a sophisticated web application built to streamline the booking process for luxury apartment rentals. Utilizing the power of Next.js, MongoDB integration, and Flutterwave API, 17thApartment offers users a seamless and secure platform to book their desired accommodations and services.",
    paragraph2: "",
    Booking:
      "Intuitive Booking Interface with allows users to effortlessly select their desired check-in and check-out dates, along with the duration of their stay.",
    Service:
      "Dynamic Service Recommendations based on the type of booking selected (e.g., event, vacation, personal), 17thApartment provides tailored service recommendations. For example, event bookings may include additional security services as a default recommendation.",
    Reservation:
      "Reservation Flexibility allowing users to  make reservations without immediate payment. However, these reservations are valid for 24 hours, after which the booking code expires if no payment is made.",
    Checkout:
      "Secure Checkout Process, Integrated with Flutterwave API, 17thApartment ensures secure payment processing for users. They can make payments using various methods supported by Flutterwave, such as cards, bank transfers, and mobile wallets",
    Cart: "Efficient Cart Management. Selected services are seamlessly added to the user's cart, where they can review and modify their choices before proceeding to checkout.",
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
    text: "Tailwind Css",
    href: "https://www.tailwindcss.com/",
    description: "Styling framework",
  },
  {
    text: "Flutterwave",
    href: "https://flutterwave.com/us/",
    description: "Payment platform",
  },
];
