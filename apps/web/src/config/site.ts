import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bookcue",
  description:
    "Accelerate your learning and gain valuable insights with AI-generated book summaries",
  url: "https://bookcue.app",
  links: {
    github: "https://github.com/VivianLin61/bookcue",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Books",
      href: "/mybooks",
    },
    {
      title: "Browse",
      href: "/browse",
    },
  ],
  userNav: [
    {
      title: "Activity",
      href: "/activity",
    },
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "Journal",
      href: "/journal",
    },
    {
      title: "Statistics",
      href: "/stats",
    },
    {
      title: "Goals",
      href: "/goals",
    },
  ],
};
