"use client"
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import useChangeAvatarModal from '../modals/change-avatar/use-change-avatar';
import { Icons } from '@/components/icons';
import { UserQuery } from '@/graphql/graphql';
import { useSession } from 'next-auth/react';
import NameForm from './name-form';
import UsernameForm from './username-form';
import LocationForm from './location-form';
import BioForm from './bio-form';

type SettingsFieldName = 'name' | 'username' | 'location' | 'bio';

interface PersonalFormProps {
    userData?: UserQuery;
    loading: boolean;
}

const DEFAULT_AVATAR = 'https://webgradients.com/public/webgradients_png/029%20Everlasting%20Sky.png';

export const PersonalForm: React.FC<PersonalFormProps> = ({ userData, loading }) => {
    const [openForm, setOpenForm] = useState<SettingsFieldName | ''>('');
    const changeAvatarModal = useChangeAvatarModal();
    const { data: session } = useSession();

    const handleToggleForm = (formName: SettingsFieldName) => {
        setOpenForm(openForm === formName ? '' : formName);
    };

    const currentUser = userData?.user;

    return (
        <main className='px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                <div>
                    <h1 className='text-2xl font-bold'>Personal Information</h1>
                    <p className='mb-6 mt-1 text-sm text-gray-600'>
                        Manage your personal information, including username, location, and
                        bio.
                    </p>
                </div>

                <div className='mx-auto'>
                    <div className='mb-8 rounded-lg bg-beige-50'>
                        <div className='mb-6 flex items-center justify-between rounded-md border border-gray-100 bg-white px-4 py-3 shadow-xs'>
                            <div className='flex items-center'>
                                <Avatar className='h-16 w-16'>
                                    <AvatarImage
                                        alt='User avatar'
                                        src={session?.user?.avatarImage || DEFAULT_AVATAR}
                                    />
                                    <AvatarFallback>
                                        <span className='sr-only'>{session?.user?.username}</span>
                                        <Icons.user className={'h-6 w-6'} />
                                    </AvatarFallback>
                                </Avatar>
                                <h2 className='ml-4 text-lg font-medium'>
                                    {session?.user?.username}
                                </h2>
                            </div>
                            <Button variant='secondary' className="cursor-pointer" onClick={changeAvatarModal.onOpen}>
                                Change Avatar
                            </Button>
                        </div>

                        {
                            loading ? <div>Loading...</div> : <div className='rounded-md border border-gray-50 bg-white px-4 py-3 shadow-xs'>
                                <NameForm
                                    value={currentUser?.name || ''}
                                    isOpen={openForm === 'name'}
                                    onToggleForm={() => handleToggleForm('name')}
                                />
                                <hr className='mx-2 border-gray-100' />
                                <UsernameForm
                                    value={currentUser?.username || ''}
                                    isOpen={openForm === 'username'}
                                    onToggleForm={() => handleToggleForm('username')}
                                />
                                <hr className='mx-2 border-gray-100' />
                                <LocationForm
                                    value={currentUser?.location || ''}
                                    isOpen={openForm === 'location'}
                                    onToggleForm={() => handleToggleForm('location')}
                                />
                                <hr className='mx-2 border-gray-100' />
                                <BioForm
                                    value={currentUser?.bio || ''}
                                    isOpen={openForm === 'bio'}
                                    onToggleForm={() => handleToggleForm('bio')}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PersonalForm;
