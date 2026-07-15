import type { Metadata } from "next";

import { SignInPage } from "@/components/landing/auth-pages";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Awake Studio account.",
};

export default function SignIn() {
  return <SignInPage />;
}
