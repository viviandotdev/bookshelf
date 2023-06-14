
import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }
  
  export type MainNavItem = NavItem

export type SiteConfig = {
    name: string
    description: string
    url: string
  }


  export type MarketingConfig = {
    mainNav: MainNavItem[]
  }