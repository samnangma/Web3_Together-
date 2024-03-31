import { Link } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import sample from '~/assets/image/Investments-eToro-UK-pounds.webp';

export default function Membership() {
  return (
    <section>
      <h1 className='font-semibold lg:text-4xl md:text-3xl text-xl text-white tracking-widest'>How to be a Membership?</h1>
      <p className='text-gray-400 lg:text-lg md:text-medium text-small mt-5 tracking-wider'>When you buy a Web3 Together NFT Membership Pass, you are not simply buying an NFT. You will gain membership access to a Web3 Together Membership Pass: Genesis Edition whose benefits and offerings will increase over time.Web3 Together pass supply will be limited to3333.</p>
      <p className='text-gray-400 mt-4'>Link here: <Link className='text-white' href='#'>https://www.google.com/</Link></p>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
        <div className='h-fit lg:w-5/6 w-full rounded-2xl p-4 backdrop-blur-lg bg-white/10'>
          <p className='text-lg text-white font-semibold'>Suggestion</p>
          <p className='text-sm mt-4 text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          </p>
          <div className='lg:w-2/3 md:w-full w-full grid md:grid-cols-2 grid-cols-1 justify-start items-center mt-5 lg:gap-14 gap-5'>
            <div className='flex justify-between gap-4 items-center text-gray-300 font-semibold'>
              Rewards:
              <div className='p-2 rounded-lg font-bold uppercase text-[#b151c7] bg-[#8B347D80]'>
                75px
              </div>
            </div>
            <div className='flex justify-between gap-4 items-center text-gray-300 font-semibold'>
              Deadline:
              <div className='p-2 rounded-lg font-bold uppercase text-[#187CF9] bg-[#007BEC80]'>
                75px
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={sample} alt='sample-image' className='m-auto lg:w-1/2 w-full' />
        </div>
      </div>
    </section>
  )
}
