'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { User } from '@/graphql/graphql';
import AccountForm from '@/modules/settings/components/account-form';
import PersonalForm from '@/modules/settings/components/personal-form';
import ImportForm from '../components/import-form';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import AccountCards from '../components/account-cards';
import { ModalProvider } from '../providers/modal-provider';
const secondaryNavigation = [
  {
    name: 'Personal Information',
    href: '#',
    icon: Icons.search,
    current: true,
  },
  { name: 'Account', href: '#', icon: Icons.search, current: false },
  { name: 'Import', href: '#', icon: Icons.search, current: false },
];

interface SettingsTemplateProps {
  page: string;
  user: User;
}

export const SettingsTemplate: React.FC<SettingsTemplateProps> = ({
  page,
  user,
}) => {
  let pageForm;
  switch (page) {
    case 'account':
      pageForm = <AccountForm user={user} />;
      break;
    case 'personal':
      pageForm = <PersonalForm />;
      break;
    case 'import':
      pageForm = <ImportForm />;
      break;
    default:
      pageForm = <AccountForm user={user} />;
  }

  const isActiveLink = (linkPage: string) => {
    if (linkPage === 'personal information') {
      linkPage = 'personal';
    }
    console.log(linkPage);
    return page === linkPage;
  };

  const accountSecurityConfigs = [
    {
      title: 'Email',
      button: 'Change email',
      info: `${user.email}`,
      icon: Icons.email,
    },
    {
      title: 'Password',
      button: 'Change password',
      info: 'Last updated July 26, 2018',
      icon: Icons.lock,
    },
  ];

  return (
    <>
      <div className='mx-auto h-full max-w-7xl lg:flex lg:gap-x-16 lg:px-8'>
        <ModalProvider />
        <aside className='flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20'>
          <div className='mb-4 hidden flex-none px-4 sm:px-6 lg:block lg:px-0'>
            <Avatar size={'profile'}>
              <AvatarImage
                alt='Vivian Lin'
                src='/placeholder.svg?height=64&width=64'
              />
              <AvatarFallback>VL</AvatarFallback>
            </Avatar>
            <h2 className='mt-4 text-lg font-semibold'>{user.username}</h2>
            <p className='text-sm text-gray-500'>{user.email}</p>
          </div>

          <nav className='flex-none px-4 sm:px-6 lg:px-0'>
            <ul
              role='list'
              className='flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col'
            >
              {siteConfig.settingsNav.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href!}
                    className={`block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                      isActiveLink(title!.toLowerCase()) && 'bg-gray-100'
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {pageForm}
      </div>
    </>
  );
};
