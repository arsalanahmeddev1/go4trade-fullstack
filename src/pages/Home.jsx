import React, { useEffect, useRef } from 'react'
import { bannerVideo, LockImg, SecurityVideo } from '../assets';
import { BubbleButton, TallyButton } from '../components/common';
import { Badge } from '../components/common';
import HighlightBox from '../components/HighlightBox';
import Drawsvg from '../components/Drawsvg';
import ConstarAnim from '../components/ConstarAnim';
import AcedemySec from '../components/AcedemySec';
import SectionHeading from '../components/common/SectionHeading';
import EarthAnim from '../components/EarthAnim';
import CountrySlider from '../components/CountrySlider';
import WhatsAppicon from '../components/common/WhatsAppicon';
import CardAnim from '../components/common/CardAnim';
import Lighting from '../components/Lighting';
import ChallemgesAnim from '../components/ChallemgesAnim';
import ChallengesSec from '../components/ChallengesSec';
import VideoSec from '../components/VideoSec';
import TestimonialsSec from '../components/TestimonialsSec';
import AnimatedBorder from '../components/common/AnimatedBorder';
import JoinUsSec from '../components/JoinUsSec';

import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

const Home = () => {

  const challengesRef = useRef(null);


  const handleScroll = () => {
    const smoother = ScrollSmoother.get();
    if (smoother && challengesRef.current) {
      const targetY = smoother.offset(challengesRef.current, "top");

      gsap.to(smoother, {
        duration: 2.5,
        scrollTop: targetY,
        ease: "power2.inOut",
      });
    }
  };
  return (
    <>
      <section className='hero-banner bg-[#01111F] flex items-center'>
        <video autoPlay muted loop playsInline src={bannerVideo} className='w-full h-[70%] mt-[-161px] md:mt-0 md:h-full object-cover'></video>

        <div className="container px-[10px] text-center absolute left-0 top-1/2 transform -translate-y-1/2 right-0">
          <div className="all-center flex-wrap gap-6 mb-8">
            <Badge>Simulated capital</Badge>
            <Badge>Real rewards</Badge>
            <Badge>No risk</Badge>
            <Badge>90% reward split</Badge>
          </div>
          <h1 className='mb-9'>
            A place where dreams <br /> meet reality
          </h1>
          <BubbleButton onClick={handleScroll} className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Try now</BubbleButton>
        </div>
      </section>

      <VideoSec />

      <section className='key-highlights'>
        <div className="container">


          <SectionHeading className="max-md:!mb-0" badge="Key Highlights" heading="Change the way you trade" />


          <HighlightBox />
        </div>
      </section>


      <Drawsvg
        heading1="Learn and Grow"
        para1="Learn through KHDA-certified programs and sharpen your skills with simulated capital."
        heading2="Prove Your Skills"
        para2="Hit the targets and show you’ve got what it takes."
        heading3="Get Funded & Keep up to 90%"
        para3="Trade live and cash in your profits."
        badge="️Steps"
        mainHeading="Switch to Go4Trades <br /> In 3 Steps"
        mainPara="Join a prop firm designed for the next-generation of traders. Take the <br /> challenge, prove your skills, and keep up to 90% of your rewards." />

      <ChallemgesAnim />

      <div ref={challengesRef}>
        <ChallengesSec />
      </div>


      <ConstarAnim />

      <AcedemySec />

      <EarthAnim />


      {/* mt-[-7%] */}
      <section className='trade mt-[-16%] relative z-[2]'>
        <div className="container">
          <SectionHeading className="flex bg-[#01111f5e] items-center flex-col md:flex-row text-center md:text-left gap-6" heading="Trade with the World. Win Together." para="We’re more than a prop trading firm. <br /> We’re a global trading community. Join thousands of traders in multiple
                languages, all connected in one space." />

          <CountrySlider />

          <div className="grid lg:grid-cols-2 my-10 gap-6">
            <AnimatedBorder>
              <div className='social-box w-full min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end'>
                <h5 className='text-[#CCCCCC] text-[22px] font-medium mb-4'>We’re here for you</h5>

                <div className="flex gap-x-12 gap-y-3 flex-wrap">

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>12K+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Funded Traders</p>
                  </div>

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>5K+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Active Traders</p>
                  </div>

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>$8M+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Total Rewards Paid</p>
                  </div>

                </div>
              </div>
            </AnimatedBorder>

            <div className='grid md:grid-cols-2 gap-6'>

              <AnimatedBorder>
                <a target='_blank' href="https://discord.gg/G2PEumeRsB">
                  <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end discord'>
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>Connect with fellow traders</h6>
                  </div>
                </a>
              </AnimatedBorder>

              <AnimatedBorder>
                <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end whatsapp'>
                  <h6 className='text-[20px] font-medium text-[#CCCCCC] mb-2'>Always By Your Side</h6>
                  <BubbleButton target='_blank' Tag='a' href='http://wa.me/qr/LKQGHXQ3A5PLI1' bubbleColor='#0f6540' className="btn btn-primary bg-green-gradient primary-theme hidden  transition lg:block opacity-65 hover:opacity-[1] w-max">
                    <WhatsAppicon />

                    Chat Now
                  </BubbleButton>
                </div>
              </AnimatedBorder>

            </div>

          </div>
        </div>
      </section>

      <section className='cards py-[4rem]'>
        <div className="container">
          <SectionHeading className="mb-[20px]" badge="Go4trades cards" heading="Spend Your Rewards Anytime, Anywhere" para="Trade. Earn. Spend. Get your exclusive Go4Trades Card for fast, seamless withdrawals." />
          <div className="text-center">
            {/* <BubbleButton className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition'>Reserve your spot</BubbleButton> */}
            <TallyButton>
              <a href="#tally-open=npqlrV&tally-layout=modal &tally-hide-title=1&tally-auto-close=0&tally-for m-events-forwarding=1">
                Reserve your spot
              </a>
            </TallyButton>
          </div>


        </div>
        <div className="container max-md:!px-0">
          <CardAnim />
        </div>
      </section>

      <section className='security py-[10rem] mb-[5rem] relative'>
        <video src={SecurityVideo} autoPlay muted playsInline preload='metadata' loop className='opacity-85 absolute top-0 left-0 w-full h-full object-cover z-[-1] object-center'></video>
        <div className="container">
          <div className='w-full'>
            <img src={LockImg} className='mx-auto mb-6' alt="image" />
            <SectionHeading className="mb-[0]" badge="Go4trades cards" heading="Security you can bank on" para="We prioritize security, transparency, and compliance, ensuring a safe <br /> trading environment." />
          </div>
        </div>
      </section>

      <TestimonialsSec />


      <Lighting />

      <JoinUsSec />
    </>
  )
}

export default Home
