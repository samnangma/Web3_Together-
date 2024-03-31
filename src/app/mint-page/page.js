import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import mint from '~/assets/image/mint.png';

export default function MintPage() {
  return (
    <section>
      <h1 className='text-white font-normal text-center'>
        Web3 <span className='text-secondary'>Together</span>
      </h1>
      <div className='flex justify-center items-center mt-20 lg:mx-0 -mx-10'>
        <div className='lg:flex md:flex grid justify-between items-start lg:w-1/2 w-full min-h-10 backdrop-blur-lg bg-white/30 rounded-2xl py-10 shadow-md'>
          <div className='lg:w-1/3 w-full text-white flex flex-col justify-center items-center'>
            <Image className='rounded-full w-2/3 m-auto' src={mint} alt="mint-image" />
            <h2 className='font-semibold mt-5'>Web3 together </h2>
            <div>
              <p>Current price</p>
              <p className='text-lg font-semibold'>$0.000097456</p>
            </div>
            <div className='mt-10'>
              <p>Current price</p>
              <p className='text-lg font-semibold'>$0.000097456</p>
            </div>
            <div className='mt-16 flex gap-3 flex-wrap'>
              <FaTwitter size={40} />
              <FaInstagram size={40} />
              <FaFacebook size={40} />
              <FaGithub size={40} />
            </div>
          </div>
          <div className='lg:w-2/3 w-full px-10 lg:py-0 py-5'>
            <h2 className='font-semibold text-white tracking-widest leading-normal'>
              Mint Your Web3 Together Digital Membership Pass : Founders Edition!
            </h2>
            <div className='grid gap-5 text-white opacity-70 mt-10 font-light'>
              <p>
                A private group of 3333 dedicated NFT collectors and artists. Membership to the collective and all of the benefits come from holding the Web3 Together Membership Pass.
              </p>
              <p>
                A private group of 3333 dedicated NFT collectors and artists. Membership to the collective and all of the benefits come from holding the Web3 Together Membership Pass.
              </p>
              <p>
                A private group of 3333 dedicated NFT collectors and artists. Membership to the collective and all of the benefits come from holding the Web3 Together Membership Pass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
