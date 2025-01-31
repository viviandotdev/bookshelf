import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HeartIcon, SendIcon } from 'lucide-react';
import React from 'react';
import Rating from '@/components/rating';

interface UpdateCardProps {}

export const UpdateCard: React.FC<UpdateCardProps> = ({}) => {
  return (
    <div className=' overflow-hidden rounded-lg border-beige-100 bg-beige-50 '>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <div
            className='h-64 w-[192px] rounded bg-gray-200'
            style={{
              aspectRatio: '192/192',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='flex flex-col justify-between'>
          <div className='p-4'>
            <div className='mb-2 flex items-center'>
              <Avatar>
                <AvatarImage
                  alt='Jacob Jones'
                  src='/placeholder.svg?height=32&width=32'
                />
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>Jacob Jones</p>
                <div className='flex space-x-1 text-sm text-gray-500'>
                  <time dateTime='2022-07-23'>Jul 23, 2022</time>
                  <span aria-hidden='true'>·</span>
                  <span>finished</span>
                </div>
              </div>
            </div>
            <a
              className='mt-1 block text-lg font-medium leading-tight text-black hover:underline'
              href='#'
            >
              Cosas que nunca dejamos atrás
            </a>
            <p className='mt-2 text-gray-500'>
              Knox prefiere vivir su vida tal y como se toma el café: solo. Pero
              todo cambia cuando llega a su pueblecito un terremoto llamado
              Naomi, una novia a la fuga en busca de su gemela, de la que lleva
              años sin saber nada. Lástima que su hermana le...
            </p>
          </div>

          <div className='mt-3 flex justify-between space-x-4 p-4'>
            <Button variant='secondary'>Want To Read</Button>
            <div className='flex items-center'>
              <Rating className='' value={5} />
            </div>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className=' flex'>
          <div className='relative flex-1 items-center'>
            <Input
              className='h-12 bg-beige-100 pr-10 text-sm outline-beige-100'
              placeholder='Write a comment...'
              type='text'
            />
            <Button
              className='absolute right-2 top-1/2 h-[32px] w-[32px] -translate-y-1/2 transform bg-white px-2 py-1'
              variant='secondary'
            >
              <SendIcon className='h-4 w-4 text-gray-400' />
            </Button>
          </div>
          <Button
            className='ml-4 h-12 w-12 border border-gray-200 bg-white p-2'
            variant='secondary'
          >
            <HeartIcon className='h-5 w-5 text-gray-400' />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UpdateCard;
