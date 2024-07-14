// MarketingTemplate.tsx
import React from 'react';
import HeroSection from '../sections/hero-section';
import FeaturesSection from '../sections/features-seciton';
import FooterSection from '../sections/footer-section';
import ViewFilterSortSection from '../sections/view-filter-sort-section';

export const MarketingTemplate: React.FC = () => {
  return (
    <section className='relative z-0 pt-20'>
      <div className='container flex flex-col items-center gap-4 pb-28 text-center'>
        <HeroSection
          title='Organize and track your favorite books'
          ctaText='Sign up now'
        />
      </div>
      <div className='pb-12'>
        <FeaturesSection />
      </div>
      <div className='flex flex-col items-center gap-12 p-4 pb-28 pt-12'>
        <ViewFilterSortSection />
      </div>
      <FooterSection />
    </section>
  );
};

export default MarketingTemplate;
