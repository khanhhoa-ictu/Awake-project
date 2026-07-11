import type { Metadata } from "next";

import { faqs } from "@/components/landing/data";
import { HomeSections } from "@/components/landing/home-sections";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Creative Agency Landing Page",
  description:
    "A premium agency-style landing page inspired by the Awake Figma template, rebuilt in Next.js with reusable components and SEO-friendly structure.",
  keywords: [
    "agency landing page",
    "next.js landing page",
    "creative agency website",
    "seo landing page",
    "figma to nextjs",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Awake Studio",
  email: "hello@awakestudio.dev",
  description:
    "Awake Studio creates strategic brand systems, landing pages and digital product experiences for ambitious startups.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_18%,#fcfcfb_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_18%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_24%),linear-gradient(180deg,#09090b_0%,#0d1117_32%,#09090b_100%)]">
        <SiteHeader />
        <main>
          <HomeSections />
        </main>
      </div>
    </>
  );
}
