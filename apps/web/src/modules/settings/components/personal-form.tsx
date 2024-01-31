import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PersonalFormProps { }

export const PersonalForm: React.FC<PersonalFormProps> = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-beige-50 rounded-lg mb-8">
                <div className="flex items-center mb-6">
                    <Avatar className="w-16 h-16">
                        <AvatarImage alt="User avatar" src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback>VL</AvatarFallback>
                    </Avatar>
                    <h2 className="ml-4 text-lg font-medium">vivianlin</h2>
                    <Button className="ml-auto" variant="secondary">
                        Change Avatar
                    </Button>
                </div>
                <div>
                    <ProfileSection label="Preferred Name" value="Vivian Lin" />
                    <ProfileSection label="Username" value="vivianlin123" />
                    <ProfileSection label="Date of Birth" value="January 1, 1990" />
                    <ProfileSection label="Location" value="" />
                    <ProfileSection
                        label="Bio"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isLastSection={true} // Set isLastSection to true for the last section
                    />
                </div>

            </div>
        </div >
    );
};


interface ProfileSectionProps {
    label: string;
    value: string | JSX.Element;
    onAddClick?: () => void; // Optional callback for the Add button click
    isLastSection?: boolean; // Optional flag to determine if it's the last section
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ label, value, onAddClick, isLastSection }) => {
    const textColor = value ? 'text-black' : 'text-slate-400';

    return (
        <div className="cursor-pointer hover:bg-gray-100 rounded-md">
            <div className={`flex justify-between px-4 py-3 border-b-gray-500 ${textColor}`}>
                <div className="text-sm text-gray-400">{label}</div>
                <div className={`text-sm ${textColor}`} onClick={onAddClick}>
                    {!value ? '+ Add' : value}
                </div>
            </div>
            {isLastSection ? null : <hr className="mx-2" />}
        </div>
    );
};


export default PersonalForm;
