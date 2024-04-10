'use client';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';
import { Shelf, UserBook } from '@/graphql/graphql';
import BookCard from './book-card';

interface BookStatusSectionProps {
  booksData: UserBook[];
}

export const BookStatusSection: React.FC<BookStatusSectionProps> = ({
  booksData,
}) => {
  const limitedBooksData = booksData.slice(0, 6);

  return (
    
  );
};
