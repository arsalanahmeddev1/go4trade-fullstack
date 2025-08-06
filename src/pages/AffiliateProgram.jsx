import React from 'react'
import { AffiliateProgramBg, AffiliateProgramVid, AffiliateReady, Fund4, HowWeDoImg1, WhyJoin, WhyJoin1, WhyJoin2, WhyJoin3, WhyJoin4, WhyJoin5 } from '../assets'
import { BubbleButton } from '../components/common'
import Drawsvg from '../components/Drawsvg'
import SectionHeading from '../components/common/SectionHeading'
import ImageBox from '../components/common/ImageBox'

const AffiliateProgram = () => {
    return (
        <>
            <section className='hero-banner bg-[#01111F] flex items-center affiliate-banner'>
                <video autoPlay muted loop playsInline src={AffiliateProgramVid} className='w-full h-full object-cover'></video>
                {/* <img src={AffiliateProgramBg} alt="image" className='absolute top-0 left-0 w-full h-full' /> */}

                <div className="container px-[10px] text-center absolute left-0 top-1/2 transform -translate-y-1/2 right-0">
                    <div className='max-w-[850px] mx-auto'>
                        <h1 className='mb-9 !font-medium'>
                            Turn Your Influence <br /> into Income
                        </h1>
                        <p className='text-[#FCFCFC] text-[20px] md:text-[24px] font-extralight mb-6'>Calling all creators, traders, and side-hustlers! Join the Go4Trades Affiliate Program to monetize your content and grow with one of the top prop trading platforms out there. </p>
                        <BubbleButton Tag='a' target='_blank' href='https://forms.gle/DNCaagwhV2bCidjA6' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Join Now!</BubbleButton>
                    </div>
                </div>
            </section>

            <Drawsvg
                heading1="Apply"
                para1="Fill out a quick application, takes just a few minutes. Once approved, you’ll get your affiliate dashboard and referral link. "
                heading2="Connect"
                para2="Share your unique link across your social platforms, YouTube videos, blog posts, Telegram groups, or private communities."
                heading3="Earn"
                para3="Get rewarded for every successful referral. Our commission structure is built to support long-term creators and serious hustlers. "
                // badge="️Steps"
                mainHeading="How It Works"
                // mainPara="Join a prop firm designed for the next-generation of traders. Take the <br /> challenge, prove your skills, and keep 90% of your profits."
                headingClass="lg:mb-60"
                sectionClass="!mb-0 max-md:mt-[-15%] max-md:!pt-0"
            />


            <section className='why-join py-[4rem]'>
                <div className="container">
                    <SectionHeading heading="Why Join Go4Trades <br /> Affiliate Program? " />


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className='flex flex-col gap-y-6'>
                            <ImageBox ImageParentClass="ml-auto" className="border border-[#002E55] rounded-[32px] p-7 no-effect bg-[#684BD3] h-full flex flex-col justify-end" hideDots={true} heading="Earn Competitive Commissions" para="Make money on every successful referral, from signups to challenge purchases. " />
                            <ImageBox ImageParentClass="ml-auto" className="border border-[#002E55] rounded-[32px] p-7 no-effect h-full" hideDots={true} img={WhyJoin3} heading="Dedicated Affiliate Support" para="From onboarding to performance tracking, we’ve got your back." />
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <ImageBox ImageParentClass="ml-auto" className="border border-[#002E55] rounded-[32px] p-7 no-effect h-full" hideDots={true} img={WhyJoin1} heading="Partner With a Licensed Platform" para="Promote a KHDA-licensed prop trading platform built for education + funding." />
                            <ImageBox ImageParentClass="ml-auto" className="border border-[#002E55] rounded-[32px] p-7 pt-3 no-effect h-full" hideDots={true} img={WhyJoin} heading="Affiliate-Only Campaigns" para="Gain access to exclusive marketing opportunities and community activations." />
                            <ImageBox ImageParentClass="ml-auto" className="border border-[#002E55] rounded-[32px] p-7 no-effect h-full" hideDots={true} img={WhyJoin2} heading="Priority Access to Promos" para="Share discount codes, early offers, and content drops with your audience." />
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            <ImageBox fullImage={true} ImageParentClass="!w-full" className="border border-[#002E55] rounded-[32px] p-7 no-effect h-full bg-[image:var(--dark-purple-gradient)]" hideDots={true} img={WhyJoin4} heading="Content Collab Opportunities" para="Collaborate with our marketing team for reels, campaigns, and growth pushes." />
                            <ImageBox fullImage={true} ImageParentClass="!w-full" className="border border-[#002E55] rounded-[32px] p-7 pt-0 no-effect h-full bg-[image:var(--dark-blue-gradient)]" hideDots={true} img={WhyJoin5} heading="Flexible Commission Models" para="We offer different commission structures based on your needs, whether you're an influencer, educator, or performance marketer. " />
                        </div>
                    </div>
                </div>
            </section>

            <section className='affiliate-perks py-[4rem]'>
                <div className="container">
                    <SectionHeading heading="Affiliate Perks " />

                    <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 box">
                        {/* first row .. */}
                        <div className='col-span-2'>
                            <ImageBox className="lg:p-10" headingClass="text-center !font-normal" heading="Access to exclusive campaigns & events" ImageParentClass="mx-auto" img={Fund4} hideDots={true} />
                        </div>
                        <div className='col-span-2'>
                            <ImageBox className="lg:p-10" headingClass="text-center !font-normal" heading="Regular bonus <br /> opportunities" ImageParentClass="mx-auto" img={Fund4} hideDots={true} />
                        </div>
                        <div className='col-span-2'>
                            <ImageBox className="lg:p-10" headingClass="text-center !font-normal" heading="Behind-the-scenes previews of new features" ImageParentClass="mx-auto" img={Fund4} hideDots={true} />
                        </div>
                        <div className='lg:col-start-2 col-span-2'>
                            <ImageBox className="lg:p-10" headingClass="text-center !font-normal" heading="Custom discount codes for your audience" ImageParentClass="mx-auto" img={Fund4} hideDots={true} />
                        </div>
                        <div className='col-span-2'>
                            <ImageBox className="lg:p-10" headingClass="text-center !font-normal" heading="Monthly top-performer <br /> shoutouts" ImageParentClass="mx-auto" img={Fund4} hideDots={true} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='ready py-[5rem]'>
                <div className="container">
                    <div className='max-w-[730px] mx-auto text-center'>
                        <img src={AffiliateReady} alt="image" className='mx-auto mb-10 max-md:w-[70%]' />
                        <SectionHeading className="!mb-6" heading="Ready to Earn While You <br /> Build?" para="Join the Go4Trades Affiliate Program and start turning your audience into income, today. " />

                        <BubbleButton Tag='a' target='_blank' href='https://forms.gle/DNCaagwhV2bCidjA6' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Apply Now</BubbleButton>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AffiliateProgram