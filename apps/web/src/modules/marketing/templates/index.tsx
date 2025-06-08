import React from 'react';
import HeroSection from '../sections/hero-section';
import FeaturesSection from '../sections/features-seciton';
import FooterSection from '../sections/footer-section';
import ViewFilterSortSection from '../sections/view-filter-sort-section';

export default async function MarketingTemplate() {
    return (
        <section className='relative z-0 pt-20'>
            <div className=''>
                <HeroSection
                    title='Organize and track your favorite books'
                    ctaText='Sign up now'
                    subText='Your personal reading companion'
                />
            </div>
            <div className='pb-12'>
                <FeaturesSection />
            </div>
            <div className='flex flex-col items-center gap-12 p-10 pb-28 pt-12'>
                <ViewFilterSortSection />
            </div>
            <FooterSection />
        </section>
    );
};
