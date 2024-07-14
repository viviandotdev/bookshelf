// FeaturesSection.tsx
'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description?: string;
  image: string;
}

interface FeaturesSectionProps {}

const features: Feature[] = [
  {
    id: '01',
    title: 'Rate and favorite your book',
    description:
      'Share your opinions and mark your favorite reads with our rating system.',
    image: '/landing/book.png',
  },
  {
    id: '02',
    title: 'Update your reading progress',
    description:
      'Keep track of your reading journey by updating your progress for each book.',
    image: '/landing/reading-progress.png',
  },
  {
    id: '03',
    title: 'Create custom shelves',
    description:
      'Organize your books into personalized shelves for easy access and management.',
    image: '/landing/shelves.png',
  },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

  return (
    <div className='container px-8 py-12 lg:px-16'>
      <h2
        className={cn(
          dm_sefif_display.className,
          'mb-10 text-center text-5xl/[1.25] font-normal leading-tight lg:text-left lg:text-6xl/[1.25]'
        )}
      >
        Features
      </h2>
      <div className='flex flex-col items-start justify-between gap-12 lg:flex-row'>
        <div className='flex w-full flex-col items-start justify-start gap-6'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex w-full cursor-pointer items-start rounded-xl p-6 transition-colors duration-200 ${
                selectedFeature.id === feature.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSelectedFeature(feature)}
            >
              <span className='mr-4 text-3xl font-bold text-stone-300'>
                {feature.id}
              </span>
              <div>
                <h3 className='text-xl font-bold'>{feature.title}</h3>
                {selectedFeature.id === feature.id && feature.description && (
                  <p className='mt-1 text-base leading-relaxed text-black/60'>
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='mt-10 flex max-w-3xl items-center justify-center lg:mt-0 lg:max-w-4xl'>
          <img
            className='h-auto transition-opacity duration-300'
            src={selectedFeature.image}
            alt={`${selectedFeature.title} illustration`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
