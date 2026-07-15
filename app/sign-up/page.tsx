import type { Metadata } from "next";

import { SignUpPage } from "@/components/landing/auth-pages";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Awake Studio account.",
};

export default function SignUp() {
  return <SignUpPage />;
}
