import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import AccountForm from '../components/account-form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { PersonalForm } from '../components/personal-form'

interface SettingsTemplateProps {

}

export const SettingsTemplate: React.FC<SettingsTemplateProps> = ({ }) => {
    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="flex gap-12">
                <aside className="w-64">
                    <Avatar>
                        <AvatarImage alt="Vivian Lin" src="/placeholder.svg?height=64&width=64" />
                        <AvatarFallback>VL</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-lg font-semibold">Vivian Lin</h2>
                    <p className="text-sm text-gray-500">linvivian61@gmail.com</p>
                    <nav className="mt-6">
                        <ul className="space-y-1">
                            <li>
                                <Link className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100" href="/settings" replace>
                                    Personal Information
                                </Link>
                            </li>

                            {/* /settings/personal */}
                            <li>
                                <Link
                                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                                    href="/settings/account"
                                >
                                    Account
                                </Link>
                            </li>
                            {/* /settings/account */}
                            <li>
                                <Link
                                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                                    href="/import"
                                >
                                    Import
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">
                    <h1 className="text-2xl font-bold">Personal Information</h1>
                    <p className="mt-1 mb-6 text-sm text-gray-600">
                        Manage your personal information, including phone numbers and email addresses where you can be reached.
                    </p>
                    <PersonalForm />
                </main>
            </div>
        </div>
    )
}
export default SettingsTemplate
