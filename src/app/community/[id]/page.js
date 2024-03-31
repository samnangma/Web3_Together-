'use client';

import CommunityCards from '@/components/community/CommunityCards';
import { CommunityItem } from '@/contraints/Item';
import { Button, Link, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function CommunityById({ params }) {
  let itemId = params.id;
  const router = useRouter();
  const [communityItems, setCommunityItems] = useState({});

  useEffect(() => {
    const filteredItems = CommunityItem.filter(item => item.id === parseInt(itemId));
    setCommunityItems(filteredItems);
  }, [itemId]);

  return (
    <section>
      <div className='flex justify-center items-center relative'>
        <h1 className='lg:w-1/2 md:w-2/3 w-full lg:mt-0 md:mt-5 mt-14 lg:text-4xl md:text-2xl text-xl text-center text-white leading-tight font-bold'>If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project.</h1>
        <Button onClick={() => router.back()} className='fixed z-40 top-10 right-10 backdrop-blur-lg bg-white/30 font-bold text-secondary rounded-lg lg:px-7 lg:py-6'>Back</Button>
      </div>
      <div id='detail' className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20'>
        <div>
          <Image src={communityItems[0]?.thumbnail} alt='sample' className='w-full' />
          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-5'>
            {
              CommunityItem.slice(1, 3).map((item, index) => (
                <CommunityCards date={item.date} description={item.description} label={item.title} thumbnail={item.thumbnail} linkId={item.id} key={index} />
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-5 text-white font-light leading-loose'>
          <p>
            {communityItems[0]?.description}
          </p>
          <div>
            <h3 className='font-bold'>How can join</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
            </p>
          </div>
          <div>
            <h3 className='font-bold'>Timeline:</h3>
            <ul className='list-disc ml-5'>
              <li>27 March 2023: Open application</li>
              <li>02 May 2023: Deadline of the 300-word proposal submission</li>
              <li>13 June 2023: Submission of first paper draft</li>
              <li>13 July 2023: Final papers</li>
              <li>September 2023: Publication</li>
            </ul>
          </div>
          <h3>How to Apply: <Link href='#' className='text-white underline'>https//:www.event.com</Link></h3>
          <h3 className='font-bold'>Note: <span className='text-small font-normal'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took</span></h3>
        </div>
      </div>
    </section >
  )
}
