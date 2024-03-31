import CommunityCards from '@/components/community/CommunityCards';
import { CommunityItem } from '@/contraints/Item';
import React from 'react'

export default function Community() {
  return (
    <section className='mt-10'>
      <h1 className='font-bold text-center text-white'>Community</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-20'>
        {
          CommunityItem.map((item, index) => (
            <CommunityCards date={item.date} description={item.description} label={item.title} thumbnail={item.thumbnail} linkId={item.id} key={index} />
          ))
        }
      </div>
    </section>
  )
}
