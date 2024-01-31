import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

interface AccountFormProps {

}

export const AccountForm: React.FC<AccountFormProps> = ({ }) => {
    return (
        <div className="p-8">
            <div>
                <div className=" p-8 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Account Security</h2>
                    <Card className="mb-6">
                        <CardContent>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-medium my-4">Email</h3>
                                    <p className="text-sm">livivian61@gmail.com</p>
                                </div>
                                <Button className="mb-4 rounded-md">
                                    Change Email
                                </Button>

                            </div>
                            <div className="border-t pt-4 flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Password</h3>
                                    <p className="text-sm mb-4">
                                        Set a permanent password to login to your account.
                                    </p></div>
                                <Button className="mb-4 rounded-md">
                                    Change Password
                                </Button>
                            </div>
                        </CardContent> </Card>
                    {/* <h2 className="text-lg font-medium mb-2">Security</h2>
                    <Card>
                        <CardContent>

                            <div className="border-t pt-4">
                                <h4 className="text-lg font-medium mb-2">Two-Factor Authentication (2FA)</h4>
                                <p className="text-sm mb-4">Protect your account with an additional layer of security.</p>
                                <Button>Enable</Button>
                            </div>
                        </CardContent>
                    </Card> */}
                </div>
            </div>
        </div>
    )
}
export default AccountForm
