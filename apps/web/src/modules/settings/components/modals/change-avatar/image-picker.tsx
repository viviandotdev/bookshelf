'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const defaultImages = [
  {
    id: 1,
    title: 'Warm Flame',
    source:
      'https://webgradients.com/public/webgradients_png/001%20Warm%20Flame.png',
  },
  {
    id: 2,
    title: 'Frozen Dreams',
    source:
      'https://webgradients.com/public/webgradients_png/009%20Frozen%20Dreams.png',
  },
  {
    id: 3,
    title: 'Amy Crisp',
    source:
      'https://webgradients.com/public/webgradients_png/014%20Amy%20Crisp.png',
  },
  {
    id: 9,
    title: 'Everlasting Sky',
    source:
      'https://webgradients.com/public/webgradients_png/029%20Everlasting%20Sky.png',
  },
  {
    id: 4,
    title: 'Deep Blue',
    source:
      'https://webgradients.com/public/webgradients_png/016%20Deep%20Blue.png',
  },
  {
    id: 5,
    title: 'Wild Apple',
    source:
      'https://webgradients.com/public/webgradients_png/025%20Wild%20Apple.png',
  },
  {
    id: 6,
    title: 'Zeus Miracle',
    source:
      'https://webgradients.com/public/webgradients_png/036%20Zeus%20Miracle.png',
  },
  {
    id: 7,
    title: 'Soft Grass',
    source:
      'https://webgradients.com/public/webgradients_png/053%20Soft%20Grass.png',
  },
  {
    id: 8,
    title: 'February Ink',
    source:
      'https://webgradients.com/public/webgradients_png/051%20February%20Ink.png',
  },
];

interface ImagePickerProps {
  id: string;
  onChange: (value: string) => void;
}

export const ImagePicker = ({ id, onChange }: ImagePickerProps) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const handleImageSelect = (imageId: number) => {
    setSelectedImageId(imageId);
    const selectedImage = defaultImages.find((img) => img.id === imageId);
    if (selectedImage) {
      onChange(selectedImage.source);
    }
  };

  const selectedImage = defaultImages.find((img) => img.id === selectedImageId);

  return (
    <div className='flex gap-9'>
      <div className='grid max-w-[320px] grid-cols-3 gap-4'>
        {defaultImages.map((image) => (
          <div
            key={image.id}
            className={cn(
              'relative h-20 w-20 transform cursor-pointer overflow-hidden rounded-lg border-gray-100 bg-white shadow-sm'
            )}
            onClick={() => handleImageSelect(image.id)}
          >
            <input
              type='radio'
              id={`${id}-${image.id}`}
              name={id}
              className='hidden'
              checked={selectedImageId === image.id}
              value={`${image.id}`}
              onChange={() => {}}
            />
            <div
              className={cn(
                'flex h-20 w-20 transform items-center justify-center rounded-lg border-[1px] border-gray-100 bg-white shadow-sm',
                selectedImageId === image.id
                  ? 'border-[4px] border-beige-100 bg-white'
                  : 'border-gray-100 bg-white '
              )}
            >
              <div
                className='relative overflow-hidden rounded-full '
                style={{
                  width: '50px',
                  height: '50px',
                }}
              >
                <Image
                  src={image.source}
                  alt={image.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            {/*
            {selectedImageId === image.id && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                <Check className='h-4 w-4 text-white' />
              </div>
            )} */}
          </div>
        ))}
      </div>
      <div className='relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md'>
        {selectedImage && (
          <div className='flex h-36 w-36 cursor-pointer items-center justify-center rounded-md'>
            <div
              className='relative overflow-hidden rounded-full'
              style={{
                width: '100px',
                height: '100px',
              }}
            >
              <Image
                src={selectedImage.source}
                alt={selectedImage.title}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
