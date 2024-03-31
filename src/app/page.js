import { Button } from "@nextui-org/react";
import Image from "next/image";
import homepage from '~/assets/image/3685.png';
import { FaChevronRight } from "react-icons/fa";
import { NumberItem } from "@/contraints/NumberItem";
import Membership from "./membership/page";
import Rewards from "./rewards/page";
import Community from "./community/page";
import FQA from "./fqa/page";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 md:w-full lg:mr-4 mb-4 lg:mb-0 grid gap-5">
          <h1 className="text-white md:w-full font-semibold tracking-widest leading-relaxed">We are a small community that helps people to learn about <span className="text-secondary">Web3 development.</span> </h1>
          <p className="text-white opacity-70 tracking-wider w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
          </p>
          <div className="flex gap-5">
            <Button className="rounded-md font-semibold bg-secondary text-white">Explore Now</Button>
            <Button className="rounded-md p-0 border-1 border-white font-normal bg-white/20 backdrop-blur-md text-white" endContent={
              <div className="p-3 bg-white/50">
                <FaChevronRight />
              </div>
            }>
              <p className="mx-3">
                Learn More
              </p>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full relative">
          <Image className="w-2/3 m-auto" src={homepage} alt="homepageImage" />
        </div>
      </section>
      <section>
        <div className="lg:w-fit md:w-full mt-5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl p-1">
          <div className="bg-primary gap-20 lg:flex md:flex gird justify-center items-start p-10 rounded-2xl">
            {
              NumberItem.map(item => (
                <div key={item.id} className="flex flex-col justify-center items-center gap-4">
                  <h1 className={`${item.id === 3 ? 'bg-gradient-to-r from-white to-purple-600 inline-block text-transparent bg-clip-text' : 'text-white'} font-bold`}>{item.value}</h1>
                  <div className="opacity-50 rounded-full w-5 h-1 bg-gradient-to-r from-gray-600 to-purple-300"></div>
                  <p className="text-white">{item.label}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="grid gap-10 mt-10">
        <Membership />
        <Rewards />
        <Community />
        
      </section>
    </main>
  );
}