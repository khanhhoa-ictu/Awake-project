import { BandIcon, BarIcon, ImageIcon, LayoutIcon, MagicIcon } from "@/public/icon";

export const navItems = [
  "Services",
  "Work",
  "Team",
  "Pricing",
  "FAQ",
];

export const listLogo = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",

]
 
export const metrics = [
  { value: "40", label: "Total Projects Completed" },
  { value: "15", label: "Years of Experience" },
  { value: "12", label: "Design Awards" },
];

export const services = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, naming and messaging systems that make young brands feel unmistakable.",
    accent: "from-violet-100 to-fuchsia-100",
    icon: <BandIcon/>
  },
  {
    title: "Digital Marketing",
    description:
      "Campaign architecture and launch content tuned for awareness, conversion and retention.",
    accent: "from-sky-100 to-cyan-100",
    icon: <ImageIcon/>

  },
  {
    title: "UI/UX Design",
    description:
      "Confident product interfaces that balance storytelling, usability and business clarity.",
    accent: "from-amber-100 to-orange-100",
    icon: <MagicIcon/>
  },
  {
    title: "Analytics & Reporting",
    description:
      "Weekly signal tracking that turns design performance into practical product decisions.",
    accent: "from-emerald-100 to-lime-100",
    icon: <BarIcon/>
  },
  {
    title: "Web Development",
    description:
      "Fast marketing sites and launch-ready frontends built to scale with your next milestone.",
    accent: "from-rose-100 to-pink-100",
    icon: <LayoutIcon/>
  },
];

export const projects = [
  {
    name: "FlowBank",
    category: "Fintech launch",
    summary: "A warmer, higher-converting brand and onboarding flow for a growing finance app.",
    tint: "from-lime-100 via-white to-emerald-50",
  },
  {
    name: "Academy.co",
    category: "Learning platform",
    summary: "A modular course marketplace designed to feel premium without slowing the funnel.",
    tint: "from-violet-100 via-white to-indigo-50",
  },
  {
    name: "Genome",
    category: "Health research",
    summary: "A science-forward digital identity that helped a deep-tech startup explain complex work.",
    tint: "from-zinc-200 via-white to-slate-100",
  },
  {
    name: "Hotto",
    category: "Consumer brand",
    summary: "A playful commerce refresh built to increase trust, recall and repeat purchase intent.",
    tint: "from-sky-100 via-white to-blue-50",
  },
];

export const team = [
  { name: "Logan Dang", role: "WordPress Developer", accent: "from-violet-500 to-indigo-500" },
  { name: "Ana Belić", role: "Social Media Specialist", accent: "from-amber-400 to-orange-400" },
  { name: "Brian Hanley", role: "Product Designer", accent: "from-cyan-500 to-sky-400" },
  { name: "Darko Stanković", role: "UI Designer", accent: "from-emerald-400 to-teal-400" },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$2500",
    tone: "bg-amber-200",
    description: "For teams that need sharp design support, one focused request at a time.",
    features: [
      "Design updates every 2 days",
      "Mid-level designer",
      "SEO optimization",
      "Monthly analytics review",
      "2 strategy calls per month",
      "License-free assets",
    ],
  },
  {
    name: "Pro",
    price: "$3800",
    tone: "bg-indigo-600 text-white",
    description: "The best fit for MVPs, Web Apps or complex problems.",
    features: [
      "Design updates daily",
      "Senior product designer",
      "AI advisory framework",
      "Full-service creative team",
      "4 strategy calls per month",
      "License-free assets",
    ],
  },
];

export const faqs = [
  {
    question: "What services does Awake Agency offer?",
    answer:
      "We combine brand strategy, product design, landing pages, launch campaigns and frontend implementation for startups that need one creative partner instead of several vendors.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused landing page usually takes 2 to 4 weeks. Broader brand or product engagements are scoped in phases so we can ship value early while keeping momentum high.",
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "Most teams work with us asynchronously in Slack and Notion, plus weekly review calls. That keeps decisions visible, fast and easy to revisit.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We often stay on for iteration sprints, analytics reviews and campaign refreshes once the first version is live.",
  },
];

export const awards = [
  {
    title: "Framer Awards",
    year: "2024",
    description: "Recognized for polished interaction design and launch experiences that feel alive.",
  },
  {
    title: "Dribbble Awards",
    year: "2023",
    description: "Celebrated for distinctive visual systems and strong storytelling across touchpoints.",
  },
  {
    title: "Awwwards Mention",
    year: "2022",
    description: "Highlighted for creative direction, clarity of motion and conversion-minded craft.",
  },
];
