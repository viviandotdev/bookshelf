import { Icons } from "@/components/icons";

export const sortingSelects = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  {
    label: "Title: A to Z",
    value: "title.asc",
  },
  {
    label: "Title: Z to A",
    value: "title.desc",
  },
  {
    label: "Author: A to Z",
    value: "author.asc",
  },
  {
    label: "Author: Z to A",
    value: "author.desc",
  },
];

export const librarySelects = [
  {
    name: "All Books",
  },
  {
    name: "Unshelved",
  },
];

export const bookStatuses = [
  {
    name: "Want to Read",
    icon: Icons.save,
  },
  {
    name: "Currently Reading",
    icon: Icons.bookOpen,
  },
  {
    name: "Read",
    icon: Icons.book,
  },
  {
    name: "Abandoned",
    icon: Icons.abondoned,
  },
];
