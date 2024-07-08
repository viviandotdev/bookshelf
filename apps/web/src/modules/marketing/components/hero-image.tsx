/* eslint-disable @next/next/no-img-element */
'use client';
import classNames from 'classnames';

export const HeroImage = () => {
  return (
    <div className='mt-[12.8rem]'>
      <div className={classNames('relative rounded-lg')}>
        <img
          className={classNames('')}
          src='/images/hero.webp'
          alt='Hero image'
        />
      </div>
    </div>
  );
};
