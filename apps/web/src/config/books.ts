import { Icons } from '@/components/icons';
import { Reading_Status } from '@/graphql/graphql';

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

type ReadingStatuses = {
  [key in Reading_Status]: {
    name: string;
    icon: React.ComponentType;
  };
};

export const readingStatuses: ReadingStatuses = {
  [Reading_Status.WantToRead]: {
    name: 'Want to Read',
    icon: Icons.save,
  },
  [Reading_Status.UpNext]: {
    name: 'Up Next',
    icon: Icons.upNext,
  },
  [Reading_Status.Reading]: {
    name: 'Reading',
    icon: Icons.bookOpen,
  },
  [Reading_Status.Finished]: {
    name: 'Finished',
    icon: Icons.finished,
  },
  [Reading_Status.DidNotFinish]: {
    name: 'Did not Finish',
    icon: Icons.dnf,
  },
};
