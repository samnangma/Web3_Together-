import { Link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export default function CommunityCards({ thumbnail, label, description, date, linkId }) {
  return (
    <div id='community-box' className='hover:scale-105 transition-all text-white backdrop-blur-lg grid justify-between items-start bg-white/20 rounded-xl'>
      <Image src={thumbnail} alt='thumbnail' className='w-full rounded-t-xl max-h-64 max-w-full object-cover' />
      <div className='p-4 mt-5'>
        <h2>{label}</h2>
        <p className='text-normal leading-tight opacity-60 mt-3'>{description}</p>
      </div>
      <div className='flex justify-between items-center w-full mt-10 p-4'>
        <p>{date}</p>
        <Link href={`/community/${linkId}`} className='font-bold text-secondary'>Join Now</Link>
      </div>
    </div>
  )
}
