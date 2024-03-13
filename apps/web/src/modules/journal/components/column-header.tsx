import { Column } from '@tanstack/react-table';

import { cn } from '@/lib/utils';

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div
      className={cn(
        'flex items-center space-x-2 py-3 text-sm tracking-wider',
        className
      )}
    >
      {/* toggle sorting */}
      <div>{title}</div>
    </div>
  );
}
