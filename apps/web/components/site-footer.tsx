import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "bg-accent")}>
      <div className="container flex flex-1  flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div>
            
          <p className="text-center text-sm leading-loose md:text-left">
            © 2022 Bookcue. All rights Reserverd
            . Book data from{" "}
            <a
              href="https://developers.google.com/books"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Google Books API
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
