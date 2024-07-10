// PersonalForm.tsx
import React, { useEffect, useReducer, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CollapsibleForm, { FormNames } from './collapsible-form';
import { useSession } from 'next-auth/react';
import { useMeLazyQuery, User } from '@/graphql/graphql';
import { ChangeAvatarModal } from './modals/change-avatar';
import { Button } from '@/components/ui/button';
import useChangeAvatarModal from './modals/change-avatar/use-change-avatar';

interface PersonalFormProps {
  user: User;
}
// Define the state shape
interface PersonalInfoState {
  bio: string;
  location: string;
  name: string;
}

// Define the action types
type PersonalInfoAction =
  | { type: 'SET_BIO'; payload: string }
  | { type: 'SET_LOCATION'; payload: string }
  | { type: 'SET_NAME'; payload: string };

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
    default:
      return state;
  }
};

export const PersonalForm: React.FC<PersonalFormProps> = ({ user }) => {
  const { data: session } = useSession();
  const [openForm, setOpenForm] = useState<FormNames | ''>('');
  const changeAvatarModal = useChangeAvatarModal();
  const [personalInfo, dispatch] = useReducer(personalInfoReducer, {
    bio: user.bio || '',
    location: user.location || '',
    name: user.name || '',
  });

  const [loadMe] = useMeLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.me) {
        dispatch({ type: 'SET_BIO', payload: data.me.bio || '' });
        dispatch({ type: 'SET_LOCATION', payload: data.me.location || '' });
        dispatch({ type: 'SET_NAME', payload: data.me.name || '' });
      }
    },
  });

  useEffect(() => {
    const loadData = async () => {
      await loadMe();
    };
    loadData();
  }, [openForm]);
  const handleToggle = (formName: FormNames) => {
    setOpenForm(openForm === formName ? '' : formName);
  };

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
            <div className='mb-6 flex items-center justify-between rounded-md border border-gray-100 bg-white px-4 py-3 shadow-sm'>
              <div className='flex items-center'>
                <Avatar className='h-16 w-16'>
                  <AvatarImage
                    alt='User avatar'
                    src='/placeholder.svg?height=96&width=96'
                  />
                  <AvatarFallback>VL</AvatarFallback>
                </Avatar>
                <h2 className='ml-4 text-lg font-medium'>
                  {session?.user.username || user.username}
                </h2>
              </div>
              <Button variant='secondary' onClick={changeAvatarModal.onOpen}>
                Change Avatar
              </Button>
              {/* <ChangeAvatarModal /> */}
            </div>

            <div className=' rounded-md border border-gray-50 bg-white px-4 py-3 shadow-sm '>
              <CollapsibleForm
                label='Name'
                value={personalInfo.name || ''}
                openForm={openForm}
                isOpen={openForm === 'name'}
                onToggle={() => handleToggle('name')}
                onChange={(newValue) =>
                  dispatch({ type: 'SET_NAME', payload: newValue })
                }
              />
              <CollapsibleForm
                label='Username'
                value={session?.user.username || user.username}
                openForm={openForm}
                isOpen={openForm === 'username'}
                onToggle={() => handleToggle('username')}
              />

              <CollapsibleForm
                label='Location'
                value={personalInfo.location || ''}
                openForm={openForm}
                isOpen={openForm === 'location'}
                onToggle={() => handleToggle('location')}
                onChange={(newValue) =>
                  dispatch({ type: 'SET_LOCATION', payload: newValue })
                }
              />
              <CollapsibleForm
                label='Bio'
                value={personalInfo.bio || ''}
                isLastSection={true}
                openForm={openForm}
                isOpen={openForm === 'bio'}
                onToggle={() => handleToggle('bio')}
                onChange={(newValue) =>
                  dispatch({ type: 'SET_BIO', payload: newValue })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PersonalForm;
