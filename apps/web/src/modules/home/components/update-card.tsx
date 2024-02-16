import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HeartIcon, SendIcon, StarIcon } from 'lucide-react';
import React from 'react'


interface UpdateCardProps {

}

export const UpdateCard: React.FC<UpdateCardProps> = ({ }) => {
    return (
        <div className=" bg-white rounded-lg shadow-md overflow-hidden ">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <div
                        className="h-64 w-[192px] bg-gray-200"
                        style={{
                            aspectRatio: "192/192",
                            objectFit: "cover",
                        }} />

                </div>
                <div className="p-4">
                    <div className="flex items-center mb-2">
                        <Avatar>
                            <AvatarImage alt="Jacob Jones" src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>JJ</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Jacob Jones</p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime="2022-07-23">Jul 23, 2022</time>
                                <span aria-hidden="true">·</span>
                                <span>finished</span>
                            </div>
                        </div>
                    </div>
                    <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline" href="#">
                        Cosas que nunca dejamos atrás
                    </a>
                    <p className="mt-2 text-gray-500">
                        Knox prefiere vivir su vida tal y como se toma el café: solo. Pero todo cambia cuando llega a su pueblecito
                        un terremoto llamado Naomi, una novia a la fuga en busca de su gemela, de la que lleva años sin saber nada.
                        Lástima que su hermana le...
                    </p>
                    <div className="mt-3 flex space-x-4 justify-between">
                        <Button variant="outline">Want To Read</Button>
                        <div className="flex items-center">
                            Rate it
                            <StarIcon className="text-gray-300" />
                            <StarIcon className="text-gray-300" />
                            <StarIcon className="text-gray-300" />
                            <StarIcon className="text-gray-300" />
                            <StarIcon className="text-gray-300" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="p-4 border-t border-gray-200">

                <div className=" flex">
                    <div className="relative flex-1 items-center">
                        <Input className="pr-10 text-sm bg-beige-200" placeholder="Write a comment..." type="text" />
                        <Button className="py-1 px-2 absolute right-2 bg-white top-1/2 transform -translate-y-1/2" variant="ghost">
                            <SendIcon className="w-4 h-4 text-gray-500" />
                        </Button>
                    </div>
                    <Button className="p-2 ml-4" variant="ghost">
                        <HeartIcon className="w-4 h-4  text-gray-500" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default UpdateCard
