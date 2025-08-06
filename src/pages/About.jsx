import React, { useEffect } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { AboutBannerVid, AboutImg, BuiltForBoldVid, HowWeDoImg, HowWeDoImg1, HowWeDoImg2, HowWeDoImg3, HowWeDoVid2, WhatWeDoImg, WhoWeImg } from '../assets'
import ImageBox from '../components/common/ImageBox'
import { BubbleButton } from '../components/common'

const About = () => {
  return (
    <>
      <section className="about py-[5rem] pt-[12rem]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <SectionHeading headingCLass="!normal-case" badge_class="!mx-0" className="text-start" badge="About us" heading="We’re redefining <br /> trading" para="Go4Trades makes trading easy, quick, and open to all. 
              Welcome to your new favorite way of growing your money." />
            <div className='image'>
              <img src={AboutImg} alt="image" className='max-md:w-2/3 max-md:mx-auto' />
              {/* <video src={AboutBannerVid} autoPlay playsInline muted loop className='max-md:w-2/3 max-md:mx-auto'></video> */}
            </div>
          </div>
        </div>
      </section>

      <section className='who-are-we'>
        <div className="container">
          <SectionHeading className="!mb-4" paraClass="!font-medium" badge="Who are we " heading="Built for the Bold" para="We’re here for the next generation of traders who think differently," />
          <p className='text-[#F2F2F2] text-[18px] font-extralight text-center'>We’re here for the next generation of traders who think differently, for the ones who believe in mastering markets, staying ahead of trends, and growing smarter every day. Go4Trades is more than just a trading platform, we’re your partner in growth. <br />
            Whether you’re an experienced trader or a beginner, we empower you with the tools, technology, and transparency to take your investment game to the next level. </p>
          {/* <img src={WhoWeImg} alt="image" className='mx-auto' /> */}
          <video src={BuiltForBoldVid} autoPlay playsInline muted loop className='mx-auto'></video>
        </div>
      </section>

      <section className='what-we-do py-[5rem]'>
        <div className="container">
          <SectionHeading badge="What we do" heading="Let’s simplify all things trading" para="To democratize trading and level the financial playing field, one trade at a time. 
          We’re here to make global markets accessible, transparent, and fair for every trader. " />
          <img src={WhatWeDoImg} alt="image" className='mx-auto' />
        </div>
      </section>

      <section className='how-we-do'>
        <div className="container">
          <SectionHeading heading="How we do it" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className='flex flex-col gap-y-6'>
              <ImageBox headingClass="md:text-[24px]" ImageParentClass="shrink-0" dotsClass="!bg-[#684BD3] !w-[6px] !h-[6px]" className="flex items-end max-md:flex-wrap gap-6 border border-[#002E55] rounded-[24px] p-10 purple-effect" img={HowWeDoImg} heading="Empower Everyone " para="Trading isn’t just for the pros. We’re making it possible for anyone to start, learn, and grow. " />
              <ImageBox className="border border-[#002E55] rounded-[24px] p-7 purple-effect" hideDots={true} img={HowWeDoImg1} heading="Own the Outcome" para="Your success is our mission. We’re here to deliver, with knowledge, integrity, and impact. " />
            </div>
            <div className='flex flex-col gap-y-6'>
              <ImageBox className="border border-[#002E55] rounded-[24px] p-7 purple-effect"  hideDots={true} img={HowWeDoImg2} heading="Keep It Simple" para="We cut the noise. Fast, clear, intuitive, and that’s how trading should be. " />
              <ImageBox headingClass="md:text-[24px]" ImageParentClass="shrink-0" dotsClass="!bg-[#684BD3] !w-[6px] !h-[6px]" className="flex items-end max-md:flex-wrap gap-6 border border-[#002E55] rounded-[24px] p-10 purple-effect h-full" img={HowWeDoImg3} heading="Stay Transparent " para="No hidden fees. No Risk. Just open access to global markets " />
            </div>
          </div>
          <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block' parent_Class="text-center mt-10">Open your account today!</BubbleButton>

        </div>
      </section>
    </>
  )
}

export default About
