import {
  BandIcon,
  BarIcon,
  ImageIcon,
  LayoutIcon,
  MagicIcon,
} from "@/public/icon";

export const navItems = ["Services", "Work", "Team", "Pricing", "FAQ"];

export const listLogo = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
];

export const ProjectsSection = [
  "/images/project_section_1.jpg",
  "/images/project_section_2.jpg",
  "/images/project_section_3.jpg",
  "/images/project_section_4.jpg",
];

export const metrics = [
  { value: "40", label: "Total Projects Completed" },
  { value: "15", label: "Years of Experience" },
  { value: "12", label: "Design Awards" },
];

export const services = [
  {
    title: "Brand",
    subTitle: "Strategy",
    description:
      "Positioning, naming and messaging systems that make young brands feel unmistakable.",
    accent: "from-violet-100 to-fuchsia-100",
    icon: <BandIcon />,
    color: "#BA81EE",
  },
  {
    title: "Digital",
    subTitle: "Marketing",

    description:
      "Campaign architecture and launch content tuned for awareness, conversion and retention.",
    accent: "from-sky-100 to-cyan-100",
    icon: <ImageIcon />,
    color: "#70B5FF",
  },
  {
    title: "UI/UX",
    subTitle: "Design",

    description:
      "Confident product interfaces that balance storytelling, usability and business clarity.",
    accent: "from-amber-100 to-orange-100",
    icon: <MagicIcon />,
    color: "#FFAF68",
  },
  {
    title: "Analytics &",
    subTitle: "Reporting",

    description:
      "Weekly signal tracking that turns design performance into practical product decisions.",
    accent: "from-emerald-100 to-lime-100",
    icon: <BarIcon />,
    color: "#79D45E",
  },
  {
    title: "Web",
    subTitle: "Development",
    description:
      "Fast marketing sites and launch-ready frontends built to scale with your next milestone.",
    accent: "from-rose-100 to-pink-100",
    icon: <LayoutIcon />,
    color: "#F4889A",
  },
];

export const projects = [
  {
    name: "FlowBank",
    category: ["UX Research", "Interface Design"],
    tint: "from-lime-100 via-white to-emerald-50",
  },
  {
    name: "Academy.co",
    category: ["Product Design", "Interaction Design"],
    tint: "from-violet-100 via-white to-indigo-50",
  },
  {
    name: "Genome",
    category: ["Brand identity design", "UX Research"],
    tint: "from-zinc-200 via-white to-slate-100",
  },
  {
    name: "Hotto",
    category: ["Visual Storytelling", "Web & Mobile Design"],
    tint: "from-sky-100 via-white to-blue-50",
  },
];

export const team = [
  {
    name: "Logan Dang",
    role: "WordPress Developer",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    name: "Ana Belić",
    role: "Social Media Specialist",
    accent: "from-amber-400 to-orange-400",
  },
  {
    name: "Brian Hanley",
    role: "Product Designer",
    accent: "from-cyan-500 to-sky-400",
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    accent: "from-emerald-400 to-teal-400",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$2500",
    tone: "bg-amber-200",
    description: "For companies who need design support. One request at a time",
    features: [
      "Design Updates Every 2 Days",
      "Mid-level Designer",
      "SEO optimization",
      "Monthly analytics",
      "2x Calls Per Month",
      "License free assets",
    ],
  },
  {
    name: "Pro",
    price: "$3800",
    tone: "bg-indigo-600 text-white",
    description: "2x the speed. Great for an MVP, Web App or complex problem",
    features: [
      "Design Updates Daily",
      "Senior-level Designer",
      "AI Advisory Framework",
      "Full-service Creative Team",
      "4x Calls Per Month",
      "License free assets",
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
  {
    question: "How often will I receive updates on my project?",
    answer:
      "You can expect regular progress updates throughout the week, with clear checkpoints for feedback, next steps and anything we need from your side to keep the project moving.",
  },
  {
    question: "How do I get started with Awake Agency?",
    answer:
      "Start by sharing your goals, timeline and current materials. From there, we will recommend the right scope, outline the process and help you choose the plan that fits best.",
  },
];

export const awards = [
  {
    title: "Framer Awards",
    year: "2024",
    description:
      "Celebrated for cutting-edge interaction design and seamless user experiences.",
  },
  {
    title: "Dribbble Awards",
    year: "2023",
    description:
      "Recognized for creative excellence and innovative design solutions.",
  },
  {
    title: "Awwwards Mention",
    year: "2022",
    description:
      "Honored with the Best Website Design for creativity, usability, and innovation.",
  },
];
