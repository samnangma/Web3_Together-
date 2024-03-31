'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RewardsItem({ logo, label, date, description, route }) {
  const router = useRouter();

  return (
    <div className='p-5 w-full backdrop-blur-lg bg-white/20 rounded-xl'>
      <div className='flex justify-between items-start gap-5'>
        <div className='w-1/3'>
          <Image className='rounded-xl max-h-40 object-cover' src={logo} width={'auto'} height={'auto'} alt='mock-up-image' />
        </div>
        <div id='content' className='w-2/3 lg:mt-3 mt-0'>
          <p className='font-semibold text-white'>{label}</p>
          <p className='text-white text-sm opacity-70 mt-3'>{description}</p>
        </div>
      </div>
      <div className='w-full flex justify-between items-center mt-5'>
        <p id='date' className='text-white'>{date}</p>
        <Button onClick={() => router.push(route)} className='bg-secondary min-w-32 text-white text-medium'>Join</Button>
      </div>
    </div>
  )
}
