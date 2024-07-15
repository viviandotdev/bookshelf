import Link from 'next/link';
import { Home, Settings, LibraryBig } from 'lucide-react';

export function MainSidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    {
      icon: LibraryBig,
      label: 'Library',
      href: '/library?shelf=All+Books&page=1&status=Any+Status',
      bgAccent: true,
    },
    { icon: Settings, label: 'Analytics', href: '/settings/account' },
  ];

  return (
    <aside className='fixed inset-y-0 left-0 z-0 flex w-14 flex-col justify-between border-r bg-background sm:flex'>
      <nav className='mb-auto mt-auto flex flex-col items-center gap-4 px-2'>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bgAccent ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} hover:text-foreground transition-colors md:h-8 md:w-8`}
          >
            <item.icon className='h-5 w-5' />
            <span className='sr-only'>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
