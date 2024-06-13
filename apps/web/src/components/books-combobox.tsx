'use client';
import { useDebounce } from '@/hooks/use-debounce';
import { useRouter } from 'next/navigation';
import React from 'react';

interface BooksComboBoxProps {}

export const BooksComboBox: React.FC<BooksComboBoxProps> = ({}) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null);
      return;
    }

    // async function fetchData() {
    //   setLoading(true);
    //   const { data, error } = await searchBooks({ query: debouncedQuery });

    //   if (error) {
    //     setLoading(false);
    //     return;
    //   }
    //   setData(data);
    //   setLoading(false);
    // }

    // void fetchData();
  }, [debouncedQuery]);
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  return <div></div>;
};
export default BooksComboBox;
