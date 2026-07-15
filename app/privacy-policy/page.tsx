import type { Metadata } from "next";

import { PrivacyPolicyPage } from "@/components/landing/privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Awake Studio collects, uses and protects personal information across its products and services.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
