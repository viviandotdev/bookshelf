'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';

type Framework = Record<'value' | 'label', string>;

const FRAMEWORKS = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'wordpress',
    label: 'WordPress',
  },
  {
    value: 'express.js',
    label: 'Express.js',
  },
  {
    value: 'nest.js',
    label: 'Nest.js',
  },
] satisfies Framework[];

export function FancyMultiSelect() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([FRAMEWORKS[1]]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.includes(framework)
  );

  console.log(selectables, selected, inputValue);

  return (
    <Command onKeyDown={handleKeyDown} className='overflow-visible'>
      <div className='group rounded-md border border-gray-300 px-3 py-2 text-sm'>
        <div className='flex flex-wrap gap-1'>
          {selected.map((framework) => {
            return (
              <Badge
                key={framework.value}
                variant='secondary'
                className='bg-beige-100'
              >
                {framework.label}
                <button
                  className='ml-1 rounded-full outline-none '
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className='text-muted-foreground hover:text-foreground h-3 w-3' />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder='Select frameworks...'
            className='placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none'
          />
        </div>
      </div>
      <div className='relative mt-2'>
        <CommandList>
          {selectables.length > 0 ? (
            <div className='z-10 w-full rounded-md border bg-white text-beige-700 shadow-md outline-none animate-in'>
              <CommandGroup className='h-full overflow-auto'>
                {selectables.map((framework) => {
                  return (
                    <CommandItem
                      key={framework.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={(value) => {
                        setInputValue('');
                        setSelected((prev) => [...prev, framework]);
                      }}
                      className={'cursor-pointer'}
                    >
                      {framework.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : (
            <CommandGroup className='h-full overflow-auto'>
              <CommandItem
                key={inputValue}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className={'cursor-pointer'}
              >
                Create {inputValue}
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </div>
    </Command>
  );
}
