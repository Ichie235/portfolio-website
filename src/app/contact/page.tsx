import ContactForm from "@/components/sections/ContactForm";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact | Chinemerem Ichie",
  description:
    "Get in touch with Chinemerem Ichie — available for full-stack projects, freelance work, and collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="w-full px-6 md:px-16 lg:px-20 xl:px-36 pt-12 pb-24 md:pt-20 overflow-x-hidden">
      <ContactForm />
    </main>
  );
}
