import React from 'react';
import NavLink from '../components/nav-link';
import { Tabs } from '@/components/ui/tabs';
interface ProfileNavProps {
  currentUser: any;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ currentUser }) => {
  const tabs = [
    { title: 'Profile', href: `/${currentUser.username}` },
    {
      title: 'My Library',
      href: `/library`,
      type: 'user',
    },
    {
      title: 'Journal',
      href: `/${currentUser.username}/journal`,
      type: 'user',
    },
    {
      title: 'Reviews',
      href: `/${currentUser.username}/reviews`,
      type: 'user',
    },
    {
      title: 'Activity',
      href: `/${currentUser.username}/activity`,
      type: 'user',
    },
    {
      title: 'Lists',
      href: `/${currentUser.username}/lists`,
      type: 'user',
    },
    { title: 'Want To Read', href: '/want-to-read' },
    { title: 'Stats', href: '/stats' },
  ];
  return (
    <Tabs>
      <div className='mt-4 flex min-w-[1024px] justify-center space-x-1 rounded-xl border border-gray-200 bg-white px-12 py-3 shadow-sm'>
        {tabs.map((tab, index) => (
          <NavLink href={tab.href}>{tab.title}</NavLink>
        ))}
      </div>
    </Tabs>
  );
};
export default ProfileNav;
