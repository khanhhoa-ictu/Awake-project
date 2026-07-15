import type { Metadata } from "next";

import { ContactPage } from "@/components/landing/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Awake Studio to discuss branding, digital product design, websites and long-term creative support.",
};

export default function Contact() {
  return <ContactPage />;
}
