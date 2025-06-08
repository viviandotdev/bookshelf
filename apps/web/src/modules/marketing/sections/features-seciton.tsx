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

interface FeaturesSectionProps { }

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
        <div className='px-8 lg:px-0 py-12 lg:max-w-[90rem] mx-auto'>
            <h2
                className={cn(
                    'p-8 font-display text-center text-black lg:text-left font-display text-4xl font-medium tracking-tight sm:text-5xl'
                )}
            >
                Features
            </h2>

            <div className='flex p-8 flex-col items-start justify-between gap-12 lg:flex-row'>
                {/* Desktop view - Feature selection */}
                <div className='hidden w-full flex-col items-start justify-start gap-6 lg:flex lg:w-1/2'>
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`flex w-full cursor-pointer items-start rounded-xl p-6 transition-colors duration-200 ${selectedFeature.id === feature.id ? 'bg-gray-100' : ''
                                }`}
                            onClick={() => setSelectedFeature(feature)}
                        >
                            <span className='mr-4 text-3xl font-bold text-stone-300'>
                                {feature.id}
                            </span>
                            <div>
                                <h3 className='text-xl font-bold text-black'>{feature.title}</h3>
                                {selectedFeature.id === feature.id && feature.description && (
                                    <p className='mt-1 text-base leading-relaxed text-black'>
                                        {feature.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile view - All features */}
                <div className='flex w-full flex-col gap-12 lg:hidden'>
                    {features.map((feature) => (
                        <div key={feature.id} className='flex flex-col gap-4'>
                            <div className='flex items-start'>
                                <span className='mr-4 text-3xl font-bold text-stone-300'>
                                    {feature.id}
                                </span>
                                <div>
                                    <h3 className='text-xl font-bold text-black'>{feature.title}</h3>
                                    {feature.description && (
                                        <p className='mt-1 text-base leading-relaxed text-black'>
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <img
                                    className='h-auto w-full max-w-3xl'
                                    src={feature.image}
                                    alt={`${feature.title} illustration`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop view - Selected feature image */}
                <div className='hidden w-full items-center justify-center lg:flex lg:w-1/2'>
                    <div className='flex max-w-3xl items-center justify-center lg:max-w-4xl'>
                        <img
                            className='h-auto w-full transition-opacity duration-300'
                            src={selectedFeature.image}
                            alt={`${selectedFeature.title} illustration`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
