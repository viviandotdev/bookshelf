import ShelvesTemplate from '@/modules/shelves/templates';
import React from 'react'

interface ListsPageProps {

}

export const ListsPage: React.FC<ListsPageProps> = ({ }) => {
    return (
        <div>
            <ShelvesTemplate title="Shelves" id="Shelves" />
        </div>
    );
}
export default ListsPage
