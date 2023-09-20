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
      title: "Journal",
      href: "/journal",
    },
    {
      title: "Statistics",
      href: "/state",
    },
    {
      title: "Goals",
      href: "/goals",
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
      title: "Date Added",
      icon: "chevronDown",
    },
    {
      title: "Title",
      icon: "chevronDown",
    },
    {
      title: "Author",
      icon: "chevronDown",
    },
  ],
};
