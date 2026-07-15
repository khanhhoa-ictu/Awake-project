import type { Metadata } from "next";

import { TermsPage } from "@/components/landing/terms-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using Awake Studio services, products and hosted tools.",
};

export default function TermsAndConditions() {
  return <TermsPage />;
}
