import { Icons } from '@/components/icons';

export const sortingSelects = [
  { label: 'Date: Old to new', value: 'createdAt.asc' },
  {
    label: 'Date: New to old',
    value: 'createdAt.desc',
  },
  {
    label: 'Title: A to Z',
    value: 'title.asc',
  },
  {
    label: 'Title: Z to A',
    value: 'title.desc',
  },
  {
    label: 'Author: A to Z',
    value: 'author.asc',
  },
  {
    label: 'Author: Z to A',
    value: 'author.desc',
  },
];

export const viewSelects = [
  { label: 'List', value: 'list', icon: Icons.layoutList },
  {
    label: 'Board',
    value: 'board',
    icon: Icons.kanban,
  },

  {
    label: 'Gallery',
    value: 'gallery',
    icon: Icons.layoutGrid,
  },
];

export const librarySelects = [
  {
    name: 'All Books',
  },
  {
    name: 'Unshelved',
  },
];

export const bookStatuses = [
  {
    name: 'Want to Read',
    icon: Icons.save,
  },
  {
    name: 'Up Next',
    icon: Icons.upNext,
  },
  {
    name: 'Currently Reading',
    icon: Icons.bookOpen,
  },
  {
    name: 'Read',
    icon: Icons.book,
  },
  {
    name: 'Did Not Finish',
    icon: Icons.dnf,
  },
];
