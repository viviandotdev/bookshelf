"use client";

import * as React from "react";
import { NavItem } from "@/types";
import { User } from "next-auth";

interface PaginationProps {
  items?: NavItem[];
  user: User
}

export function Pagination({ items, user }: PaginationProps) {

  return (
    <div className="flex">
        <div>
            Prev
        </div>
        <div>

        </div>
        <div>
            Next
        </div>
    </div>
  );
}
