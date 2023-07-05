import { MyBooksConfig } from "@/types";

export const myBooksConfig: MyBooksConfig = {
  profileNav: [
    {
      title: "Activity",
      href: "/",
    },
    {
      title: "Books",
      href: "/mybooks",
    },
    {
      title: "Currently Reading",
      href: "/browse",
    },
  ],
  contentNav: [
    {
      title: "Read",
      href: "/",
    },
    {
      title: "Want To Read",
      href: "/mybooks",
    },
    {
      title: "Currently Reading",
      href: "/browse",
    },
  ],
  sortingSelects: [
    {
      title: "Rating",
      icon: "chevronDown",
    },
    {
      title: "Sort by RELEASE DATE",
      icon: "chevronDown",
    },
    {
      icon: "layoutGrid",
    },
    {
      icon: "layoutList",
    },
  ],
};
