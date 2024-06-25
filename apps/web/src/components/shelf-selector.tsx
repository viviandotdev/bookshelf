'use client';

import * as React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import { useController } from 'react-hook-form';
import { Badge } from './ui/badge';

export interface Option {
  value: string;
  label: string;
  disable?: boolean;
  /** fixed option that can't be removed. */
  fixed?: boolean;
  /** Group the options by providing key. */
  [key: string]: string | boolean | undefined;
}

interface FancyBoxProps {
  defaultOptions?: Option[];
  footer: React.ReactNode;
  control: any;
}

export function ShelfSelector({
  footer,
  control,
  defaultOptions,
}: FancyBoxProps) {
  const { field: list } = useController({
    control,
    name: 'shelves',
  });
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [frameworks, setFrameworks] = React.useState<Option[]>(
    defaultOptions || []
  );
  const [inputValue, setInputValue] = React.useState<string>('');
  const [selectedValues, setSelectedValues] = React.useState<Option[]>(
    list.value || []
  );

  const toggleFramework = (framework: Option) => {
    const newOptions = !selectedValues.includes(framework)
      ? [...selectedValues, framework]
      : selectedValues.filter((l) => l.value !== framework.value);
    setSelectedValues(newOptions);
    list.onChange(newOptions);
    inputRef?.current?.focus();
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '' && selectedValues.length > 0) {
            const lastSelectOption = selectedValues[selectedValues.length - 1];
            // If last item is fixed, we should not remove it.
            if (!lastSelectOption.fixed) {
              toggleFramework(selectedValues[selectedValues.length - 1]);
            }
          }
        }
        // This is not a default behavior of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [toggleFramework, selectedValues]
  );

  const createFramework = (name: string) => {
    const newFramework = {
      value: name.toLowerCase(),
      label: name,
      color: '#ffffff',
    };
    setInputValue('');
    setFrameworks([...frameworks, newFramework]);
    const newOptions = [...selectedValues, newFramework];
    setSelectedValues(newOptions);
    list.onChange(newOptions);
  };

  function removePickedOption(options: Option[], picked: Option[]) {
    const unpickedOptions = options.filter(
      (val) => !picked.find((p) => p.value === val.value)
    );
    return unpickedOptions;
  }

  const selectables = React.useMemo<Option[]>(
    () => removePickedOption(frameworks, selectedValues),
    [frameworks, selectedValues]
  );

  return (
    <div className=''>
      <Command
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        loop
      >
        <div className='group rounded-md border px-3 py-2 text-sm'>
          <div className='flex flex-wrap gap-2'>
            {selectedValues.map((option) => {
              return (
                <Badge
                  key={option.value}
                  data-fixed={option.fixed}
                  className='border-gray-100'
                >
                  {option.label}
                  <button
                    className={cn('ml-1 rounded-full outline-none')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        toggleFramework(option);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => toggleFramework(option)}
                  >
                    <X className='text-muted-foreground hover:text-foreground h-3 w-3' />
                  </button>
                </Badge>
              );
            })}
            <CommandPrimitive.Input
              ref={inputRef}
              className='placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none'
              placeholder='Search shelves...'
              value={inputValue}
              onValueChange={setInputValue}
            />
          </div>
        </div>

        <div className='mt-4 border '>
          <CommandList>
            <CommandGroup className='h-[145px] overflow-auto rounded-none'>
              {selectables.map((framework) => {
                const isActive = selectedValues.some(
                  (selected) => selected.value === framework.value
                );
                return (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => toggleFramework(framework)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <div className='flex-1'>{framework.label}</div>
                  </CommandItem>
                );
              })}
              <CommandItemCreate
                onSelect={() => createFramework(inputValue)}
                {...{ inputValue, frameworks }}
              />
            </CommandGroup>
          </CommandList>
        </div>
      </Command>
      <div className='flex w-full items-center justify-between rounded-b-md border-b border-l border-r '>
        <div className='px-6 py-4 text-sm'>
          <span className='truncate'>
            {selectedValues.length === 1 &&
              `${selectedValues.length} shelf selected`}
            {selectedValues.length > 1
              ? `${selectedValues.length} shelves selected`
              : 'No shelves selected'}
          </span>
        </div>
        {footer}
      </div>
    </div>
  );
}

const CommandItemCreate = ({
  inputValue,
  frameworks,
  onSelect,
}: {
  inputValue: string;
  frameworks: Option[];
  onSelect: () => void;
}) => {
  const hasNoFramework = !frameworks
    .map(({ value }) => value)
    .includes(`${inputValue.toLowerCase()}`);

  const render = inputValue !== '' && hasNoFramework;

  if (!render) return null;

  return (
    <>
      <CommandItem
        key={`${inputValue}`}
        value={`${inputValue}`}
        className='text-muted-foreground text-sm'
        onSelect={() => {
          onSelect();
        }}
      >
        <div className={cn('mr-2 h-4 w-4')} />
        Create new shelf &quot;{inputValue}&quot;
      </CommandItem>
    </>
  );
};
