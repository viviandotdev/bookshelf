import React from 'react';
import MainHeader from '../components/main-header';

interface SiteHeaderProps {
  user?: any;
  children?: React.ReactNode;
}

const SiteHeader = ({ user, children }: SiteHeaderProps) => {
  return (
    <header className='container z-10 max-w-[none] bg-background p-0'>
      <div className='mx-0 bg-white'>
        <MainHeader user={user}>{children}</MainHeader>
      </div>
      <hr className='border-t border-gray-200 shadow-xs' />
    </header>
  );
};

export default SiteHeader;
