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
  librarySelections: [
    {
      title: "All",
      icon: "library",
    },
    {
      title: "Read",
      icon: "read",
    },
    {
      title: "Want to Read",
      icon: "bookPlus",
    },
    {
      title: "Currently Reading",
      icon: "bookOpen",
    },
  ],
  //   librarySelections: ["All", "Read", "Want to Read", "Currently Reading"],
  toolSelections: [
    {
      title: "Import",
      icon: "import",
    },
    {
      title: "Export",
      icon: "export",
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
