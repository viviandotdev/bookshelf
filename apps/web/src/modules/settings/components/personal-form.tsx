// PersonalForm.tsx
import React, { useEffect, useReducer, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CollapsibleForm from './collapsible-form';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import useChangeAvatarModal from './modals/change-avatar/use-change-avatar';
import { Icons } from '@/components/icons';
import { User, useUserQuery } from '@/graphql/graphql';
import {
    settingsNameSchema,
    settingsUsernameSchema,
    settingsLocationSchema,
    settingsBioSchema,
    SettingsSchema
} from '@/schemas/auth';
import { z } from 'zod';

type SettingsFieldName = keyof z.infer<typeof SettingsSchema>;

interface PersonalFormProps {
    user: User;
}
// Define the state shape
interface PersonalInfoState {
    bio: string;
    location: string;
    name: string;
    username: string;
}

// Define the action types
type PersonalInfoAction =
    | { type: 'SET_BIO'; payload: string }
    | { type: 'SET_LOCATION'; payload: string }
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_USERNAME'; payload: string };

// Define the reducer function
const personalInfoReducer = (
    state: PersonalInfoState,
    action: PersonalInfoAction
) => {
    switch (action.type) {
        case 'SET_BIO':
            return { ...state, bio: action.payload };
        case 'SET_LOCATION':
            return { ...state, location: action.payload };
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        default:
            return state;
    }
};

export const PersonalForm: React.FC<PersonalFormProps> = ({ user }) => {
    const { data: session } = useSession();
    const [openForm, setOpenForm] = useState<SettingsFieldName | ''>('');
    const changeAvatarModal = useChangeAvatarModal();

    const { data: userData, loading } = useUserQuery({
        variables: {
            where: {
                id: user.id
            }
        },
        skip: !user.id
    });

    const [personalInfo, dispatch] = useReducer(personalInfoReducer, {
        bio: userData?.user?.bio || user.bio || '',
        location: userData?.user?.location || user.location || '',
        name: userData?.user?.name || user.name || '',
        username: userData?.user?.username || user.username || '',
    });

    useEffect(() => {
        if (userData?.user) {
            dispatch({ type: 'SET_BIO', payload: userData.user.bio || '' });
            dispatch({ type: 'SET_LOCATION', payload: userData.user.location || '' });
            dispatch({ type: 'SET_NAME', payload: userData.user.name || '' });
            dispatch({ type: 'SET_USERNAME', payload: userData.user.username || '' });
        }
    }, [userData]);

    const handleToggleForm = (formName: SettingsFieldName) => {
        setOpenForm(openForm === formName ? '' : formName);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const currentUser = userData?.user || user;

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
                                        src={session?.user.avatarImage || currentUser.avatarImage || ''}
                                    />
                                    <AvatarFallback>
                                        <span className='sr-only'>{personalInfo.username}</span>
                                        <Icons.user className={'h-6 w-6'} />
                                    </AvatarFallback>
                                </Avatar>
                                <h2 className='ml-4 text-lg font-medium'>
                                    {personalInfo.username || ''}
                                </h2>
                            </div>
                            <Button variant='secondary' onClick={changeAvatarModal.onOpen}>
                                Change Avatar
                            </Button>
                        </div>

                        <div className='rounded-md border border-gray-50 bg-white px-4 py-3 shadow-xs'>
                            <CollapsibleForm
                                label='Name'
                                value={personalInfo.name || ''}
                                openForm={openForm}
                                isOpen={openForm === 'name'}
                                onToggleForm={() => handleToggleForm('name')}
                                onChange={(newValue) =>
                                    dispatch({ type: 'SET_NAME', payload: newValue })
                                }
                                schema={settingsNameSchema}
                                fieldName="name"
                            />
                            <hr className='mx-2 border-gray-100' />
                            <CollapsibleForm
                                label='Username'
                                value={personalInfo.username || ''}
                                openForm={openForm}
                                isOpen={openForm === 'username'}
                                onToggleForm={() => handleToggleForm('username')}
                                onChange={(newValue) =>
                                    dispatch({ type: 'SET_USERNAME', payload: newValue })
                                }
                                schema={settingsUsernameSchema}
                                fieldName="username"
                            />
                            <hr className='mx-2 border-gray-100' />
                            <CollapsibleForm
                                label='Location'
                                value={personalInfo.location || ''}
                                openForm={openForm}
                                isOpen={openForm === 'location'}
                                onToggleForm={() => handleToggleForm('location')}
                                onChange={(newValue) =>
                                    dispatch({ type: 'SET_LOCATION', payload: newValue })
                                }
                                schema={settingsLocationSchema}
                                fieldName="location"
                            />
                            <hr className='mx-2 border-gray-100' />
                            <CollapsibleForm
                                label='Bio'
                                value={personalInfo.bio || ''}
                                isLastSection={true}
                                openForm={openForm}
                                isOpen={openForm === 'bio'}
                                onToggleForm={() => handleToggleForm('bio')}
                                onChange={(newValue) =>
                                    dispatch({ type: 'SET_BIO', payload: newValue })
                                }
                                schema={settingsBioSchema}
                                fieldName="bio"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PersonalForm;
