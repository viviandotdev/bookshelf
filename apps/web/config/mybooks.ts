import { MyBooksConfig } from "@/types";

export const myBooksConfig: MyBooksConfig = {
  profileNav: [
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
      href: "/",
      icon: "chevronDown",
    },
    {
      title: "Genre",
      href: "/mybooks",
      icon: "chevronDown",
    },
    {
      title: "Decade",
      href: "/browse",
      icon: "chevronDown",
    },
    {
      title: "Sort by RELEASE DATE",
      href: "/browse",
      icon: "chevronDown",
    },
  ],
};
