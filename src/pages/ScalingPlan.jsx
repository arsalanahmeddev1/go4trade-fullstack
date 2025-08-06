import React, { useEffect } from 'react'
import ChallemgesAnim from '../components/ChallemgesAnim'
import SectionHeading from '../components/common/SectionHeading'
import { Scaling1, Scaling2, ScalingBannerVid, ScalingMain } from '../assets'
import { ScalingPlanKeys } from '../utils/statics'
import Lighting from '../components/Lighting'
import AccountsSec from '../components/AccountsSec'
import ImageBox from '../components/common/ImageBox'
import AnimatedBorder from '../components/common/AnimatedBorder'
import JoinUsSec from '../components/JoinUsSec'
import MagneticEffect from '../components/common/MagneticEffect'

const ScalingPlan = () => {
    useEffect(() => {

        MagneticEffect(0.1);

    }, [])

    return (
        <>
            <section className='top pt-[12rem] text-center mb-[-26%] relative z-[2]'>
                <p className='text-[#FCFCFC] text-[17px] md:text-[20px] font-extralight'>Your biggest breakthrough lies just beyond <br /> your comfort zone</p>
                <SectionHeading heading="The Limitless Challenge" />
            </section>
            <div className='mt-[10rem]'>
            <ChallemgesAnim video={ScalingBannerVid} />
            </div>

            <section className='scaling'>
                <div className="container">
                    <div className='md:w-1/2 mb-10'>
                        <h3 className='text-[25px] md:text-[36px] font-medium text-transparent text-gradient leading-[120%] mb-3'>Take charge of your trading journey with Go4Trades' Scaling Plan</h3>
                        <p className='text-[#FCFCFC] text-[16px] md:text-[20px] font-extralight'>Your success is rewarded like never before. Earn up to 95% of your simulated profits and turn your skills into extraordinary rewards!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

                        <AnimatedBorder>
                            <div className="scaling-box border-1 border-[#002E55] rounded-[12px] px-6 py-5 gradient-blue">
                                <div className="magnet-box">
                                    <img src={Scaling1} className='mb-5 magnet-element' alt="image" />
                                </div>
                                <div className="text">
                                    <h5 className='text-[#F8F8F8] text-[20px] lg:text-[32px] font-medium'>Push Your Limits, Reap the Benefits</h5>
                                    <p className='text-[#CCCCCC] text-[16px] lg:text-[20px] font-light'>With a Go4Trades account, you can claim up to 90% of your simulated profits as a reward. The reward is granted once the required conditions are met and success is achieved. It is processed bi-weekly and delivered within an average of 8 hours, so our traders can enjoy fast access to the profits they’ve earned.</p>
                                </div>
                            </div>
                        </AnimatedBorder>


                        <AnimatedBorder>
                            <div className="scaling-box border-1 border-[#002E55] h-full rounded-[12px] px-6 py-5 gradient-green">
                                <div className='magnet-box'>
                                    <img src={Scaling2} className='mb-5 magnet-element' alt="image" />
                                </div>
                                <div className="text">
                                    <h5 className='text-[#F8F8F8] text-[20px] lg:text-[32px] font-medium'>Scale Your Account</h5>
                                    <p className='text-[#CCCCCC] text-[16px] lg:text-[20px] font-light'>At Go4Trades, we believe in rewarding your dedication. Meet the criteria of our Scaling Plan and get a 25% increase in your account balance, along with the chance to earn up to 95% of your rewards. Scale your account to a maximum of $2 Million and turn your hard work into bigger rewards. Take a look at the detailed breakdown below and start scaling today!</p>
                                </div>
                            </div>
                        </AnimatedBorder>

                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr_1fr]">

                        <AnimatedBorder padding="self-end">
                            <div className='border-1 border-[#004986] rounded-[12px] p-4 gradient-blue-dark text-center'>
                                <h6 className='text-[#F8F8F8] text-[20px] xl:text-[27px] font-medium mb-6'>What You’ll Get</h6>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Upgrade your reward to <strong>95%</strong></p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Scale your account up to <strong>$2M</strong></p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Keep growing as you meet the criteria</p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Fast access to payouts</p>
                            </div>
                        </AnimatedBorder>

                        <div className='col-span-1'>
                            <img src={ScalingMain} className='mx-auto w-1/2 lg:w-auto' alt="image" />
                        </div>

                        <AnimatedBorder padding="self-start">
                            <div className='border-1 border-[#004986] rounded-[12px] p-4 gradient-blue-dark text-center'>
                                <h6 className='text-[#F8F8F8] text-[20px] xl:text-[27px] font-medium mb-6'>What You’ll Need</h6>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Complete a minimum of a 4-month trading cycle</p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Achieve at least <strong> 10%</strong> of the total net simulated profit</p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Successfully process a minimum of 2 rewards</p>
                                <p className='text-[#F8F8F8] text-[17px] xl:text-[20px] font-extralight mb-4'>Maintain a positive account balance at scale-up</p>
                            </div>
                        </AnimatedBorder>

                    </div>
                </div>
            </section>

            <section className='key-components py-[5rem] mt-[5rem]'>
                <div className="container">
                    <SectionHeading badge_class="!mx-0" className="text-start" badge="Go4trades cards" heading="Key Components of the Scaling Plan" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {ScalingPlanKeys.map((item, index) => (
                            <ImageBox key={index} img={item.img} heading={item.heading} para={item.para} />
                        ))}

                    </div>
                </div>
            </section>

            <AccountsSec />

            <div className='overflow-hidden'>
                <Lighting text1="Your journey starts with one dive!" text2="Another Text will appear here." />
            </div>

            <JoinUsSec />
        </>
    )
}

export default ScalingPlan