import RewardsItem from '@/components/rewards/RewardsItem';
import { RewardsItemPage } from '@/contraints/Item';
import React from 'react';

export default function Rewards() {
  return (
    <section>
      <h3 className='text-white'>NFTs: A New Way to Reward Members</h3>
      <h1 className='lg:w-1/3 md:w-2/3 w-full font-normal text-white mt-5'>Use NFT Rewards to Power Loyalty</h1>
      <p className='lg:w-2/4 md:w-3/4 w-full mt-5 text-white opacity-75 lg:text-normal md:text-medium text-sm'>NFTs are quickly emerging as a new form of rewards for loyalty members. Brands are reaching new customers, building a new wave of excitement, and creating new communities of super fans. Now, you can offer NFT rewards at nearly every touchpoint. With Annex Cloud, you can add NFT rewards - with or without gamification - and create an entirely new kind of experience for your members.</p>
      <section className='lg:mt-10 md:mt-5 mt-5 lg:m-0 md:-m-5 -m-10 grid lg:grid-cols-2 grid-cols-1 gap-4'>
        {
          RewardsItemPage.map((item) => (
            <RewardsItem date={item.date} label={item.label} key={item.id} description={item.description} logo={item.image} route={item.route} />
          ))
        }
      </section>
    </section>
  )
}
