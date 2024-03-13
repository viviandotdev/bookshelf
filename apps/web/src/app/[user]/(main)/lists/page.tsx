import ShelvesTemplate from '@/modules/shelves/templates';
import React from 'react';

interface ListsPageProps {}

export const ListsPage: React.FC<ListsPageProps> = ({}) => {
  return (
    <div>
      <ShelvesTemplate
        title='Shelves'
        description="Lists are organized collections of books created by anyone. Create a list
and maybe we'll feature it!"
      />
    </div>
  );
};
export default ListsPage;
