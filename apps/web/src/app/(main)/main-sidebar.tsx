"use client";
import Link from 'next/link';
import { Home, Settings, LibraryBig, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
export function MainSidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    // Updated isActive function to check if path starts with the given href
    const isActive = (href: string) => {
        // For exact matches (like dashboard)
        if (href === '/dashboard') {
            return pathname === href;
        }

        // For library, check if path starts with /library
        if (href.startsWith('/library')) {
            return pathname.startsWith('/library');
        }

        // For settings, check if path starts with /settings
        if (href.startsWith('/settings')) {
            return pathname.startsWith('/settings');
        }

        // Default exact match
        return pathname === href;
    };

    const menuItems = [
        { icon: Home, label: 'Dashboard', href: '/dashboard', isActive: isActive('/dashboard') },
        {
            icon: LibraryBig,
            label: 'Library',
            href: '/library?shelf=All+Books&page=1&status=Any+Status',
            isActive: isActive('/library'),
        },
        { icon: User, label: "Profile", href: `/${session?.user.username}`, isActive: isActive(`/${session?.user.username}`) },
        { icon: Settings, label: 'Settings', href: '/settings/account', isActive: isActive('/settings') },
    ];


    return (
        <aside className='fixed inset-y-0 left-0 z-0 flex w-14 flex-col justify-between border-r bg-background sm:flex'>
            <nav className='mb-auto mt-auto flex flex-col items-center gap-4 px-2'>
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={`flex h-9 w-9 ${item.isActive && 'bg-beige-100'} items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors md:h-8 md:w-8`}
                    >
                        <item.icon className='h-5 w-5' />
                        <span className='sr-only'>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
