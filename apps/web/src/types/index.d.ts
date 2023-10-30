import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/src/components/icons";

export type NavItem = {
  id?: string;
  title?: string;
  href?: string;
  disabled?: boolean;
  icon?: keyof typeof Icons;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type MyBooksConfig = {
  profileNav: NavItem[];
  sortingSelects: NavItem[];
  shelfSelections: NavItem[];
  librarySelections: NavItem[];
  toolSelections: NavItem[];
};
