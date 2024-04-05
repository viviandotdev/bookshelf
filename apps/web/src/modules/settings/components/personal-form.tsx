// PersonalForm.tsx
import React, { useReducer, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UploadFileDialog from './upload-file-dialog';
import CollapsibleForm, { FormNames } from './collapsible-form';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { User } from '@/graphql/graphql';

interface PersonalFormProps {
  user: User;
}

// Define the state shape
interface PersonalInfoState {
  bio: string;
  location: string;
  name: string;
  dob: string;
}

// Define the action types
type PersonalInfoAction =
  | { type: 'SET_BIO'; payload: string }
  | { type: 'SET_LOCATION'; payload: string }
  | { type: 'SET_DATE_OF_BIRTH'; payload: string }
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
    case 'SET_DATE_OF_BIRTH':
      return { ...state, dob: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const PersonalForm: React.FC<PersonalFormProps> = ({ user }) => {
  const { data: session } = useSession();
  const [openForm, setOpenForm] = useState<FormNames | ''>('');
  // Initialize useReducer with the reducer function and initial state
  const [personalInfo, dispatch] = useReducer(personalInfoReducer, {
    bio: user.bio || '',
    location: user.location || '',
    dob: user.dob || '',
    name: user.name || '',
  });

  const handleToggle = (formName: FormNames) => {
    setOpenForm(openForm === formName ? '' : formName);
  };

  return (
    <main className='px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <div>
          <h1 className='text-2xl font-bold'>Personal Information</h1>
          <p className='mb-6 mt-1 text-sm text-gray-600'>
            Manage your personal information, including phone numbers and email
            addresses where you can be reached.
          </p>
        </div>

        <div className='mx-auto'>
          <div className='mb-8 rounded-lg bg-beige-50'>
            <div className='mb-6 flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-sm '>
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
              <UploadFileDialog
                actionLabel={'Save'}
                className='ml-auto'
                buttonLabel={'Change Avatar'}
              />
            </div>
            <div className=' rounded-md border border-gray-50 bg-white px-4 py-3 shadow-sm '>
              <CollapsibleForm
                label='Name'
                value={personalInfo.name}
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
                label='Date of Birth'
                date={new Date()}
                openForm={openForm}
                isOpen={openForm === 'dob'}
                onToggle={() => handleToggle('dob')}
                onChange={(newValue) =>
                  dispatch({ type: 'SET_DATE_OF_BIRTH', payload: newValue })
                }
              />
              <CollapsibleForm
                label='Location'
                value={personalInfo.location}
                openForm={openForm}
                isOpen={openForm === 'location'}
                onToggle={() => handleToggle('location')}
                onChange={(newValue) =>
                  dispatch({ type: 'SET_LOCATION', payload: newValue })
                }
              />
              <CollapsibleForm
                label='Bio'
                value={personalInfo.bio}
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
