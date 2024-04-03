// PersonalForm.tsx
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UploadFileDialog from './upload-file-dialog';
import CollapsibleForm, { FormNames } from './collapsible-form';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

interface PersonalFormProps {}

export const PersonalForm: React.FC<PersonalFormProps> = () => {
  const { data: session } = useSession();
  const [openForm, setOpenForm] = useState<FormNames | ''>('');

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
                {session?.user.username}
              </h2>
              <UploadFileDialog
                actionLabel={'Save'}
                className='ml-auto'
                buttonLabel={'Change Avatar'}
              />
            </div>
            <div className='rounded-md border border-gray-50 bg-white px-4 py-3 shadow-sm '>
              <CollapsibleForm
                label='Preferred Name'
                value='Vivian Lin'
                openForm={openForm}
                isOpen={openForm === 'firstName'}
                onToggle={() => handleToggle('firstName')}
              />
              <CollapsibleForm
                label='Username'
                value={session?.user.username}
                openForm={openForm}
                isOpen={openForm === 'username'}
                onToggle={() => handleToggle('username')}
              />
              {/* <CollapsibleForm
                label='Date of Birth'
                value='January 1, 1990'
                openForm={openForm}
                isOpen={openForm === 'dateOfBirth'}
                onToggle={() => handleToggle('dateOfBirth')}
              /> */}
              <CollapsibleForm
                label='Location'
                value=''
                openForm={openForm}
                isOpen={openForm === 'location'}
                onToggle={() => handleToggle('location')}
              />
              <CollapsibleForm
                label='Bio'
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                isLastSection={true}
                openForm={openForm}
                isOpen={openForm === 'bio'}
                onToggle={() => handleToggle('bio')}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PersonalForm;
