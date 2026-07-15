import type { Metadata } from "next";

import { NotFoundPage } from "@/components/landing/not-found-page";

export const metadata: Metadata = {
  title: "Error 404",
  description: "Preview the custom Awake Studio 404 error page.",
};

export default function Error404Page() {
  return <NotFoundPage />;
}
