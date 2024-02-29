import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { CheckIcon } from 'lucide-react';
import { Icons } from '@/components/icons';

interface ShelfCardProps {
    // You could add more props here if needed
}

export const ShelfCard: React.FC<ShelfCardProps> = ({ }) => {

    const bookImages = [
        { alt: "The Lord of the Rings", src: "/placeholder.svg" },
        { alt: "The Hitchhiker's Guide to the Galaxy", src: "/placeholder.svg" },
        { alt: "Ender's Game", src: "/placeholder.svg" },
        { alt: "Dune", src: "/placeholder.svg" },
        { alt: "A Game of Thrones", src: "/placeholder.svg" },
        { alt: "1984", src: "/placeholder.svg" },
        { alt: "Foundation Trilogy", src: "/placeholder.svg" },
        { alt: "Fahrenheit 451", src: "/placeholder.svg" },
        { alt: "Neuromancer", src: "/placeholder.svg" }
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <div className='mb-2 flex items-center'>

                    <Avatar size={"md"}>
                        <AvatarImage
                            alt='Vivian'
                        />
                        <AvatarFallback>JJ</AvatarFallback>
                    </Avatar>
                    <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900 mb-0.5'>

                            <span className="text-gray-500 mr-1">List</span>
                            created by @Vivian</p>
                        <div className='flex space-x-1 text-sm font-medium text-beige-700 '>
                            <span className="ml-[-3px] text-xs bg-beige-100  p-0.5 px-1.5 rounded-lg ">100 books</span>
                            <span aria-hidden='true'>·</span>
                            <span className="text-xs bg-beige-100 p-0.5 px-1.5 rounded-lg flex gap-2">
                                12/123 Read
                            </span>
                        </div>
                    </div>

                </div>
                <CardTitle>
                    <div className="flex gap-2">
                        Top 100 Science-Fiction and Fantasy Books of All Time
                        <Icons.password className='h-4 w-4 text-black' />
                    </div>

                </CardTitle>

                <CardDescription>
                    These are the top 100 best scifi and fantasy books
                </CardDescription>
            </CardHeader>
            <CardContent>

                <div className="flex overflow-x-auto pb-4 space-x-4">
                    {bookImages.map((book, index) => (
                        <img
                            key={index}
                            alt={book.alt}
                            height="150"
                            src={book.src}
                            style={{
                                aspectRatio: "100/150",
                                objectFit: "cover",
                            }}
                            width="100"
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default ShelfCard;
