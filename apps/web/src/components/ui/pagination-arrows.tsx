import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationArrowsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

const PaginationArrows: React.FC<PaginationArrowsProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    className,
}) => {
    // Generate array of page numbers to show
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className={cn('flex items-center gap-2', className)}>
            {/* First page */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="h-8 w-8"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Previous page */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page numbers */}
            {getPageNumbers().map((pageNum) => (
                <Button
                    key={pageNum}
                    variant={pageNum === currentPage ? 'default' : 'ghost'}
                    onClick={() => onPageChange(pageNum)}
                    className={cn(
                        'h-8 w-8',
                        pageNum === currentPage && 'bg-black text-white hover:bg-black/90'
                    )}
                >
                    {pageNum}
                </Button>
            ))}

            {/* Next page */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-8 w-8"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Last page */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="h-8 w-8"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default PaginationArrows;
