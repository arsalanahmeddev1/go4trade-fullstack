import { useRef } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { ChallengesBannerVid, ChallengesImg1, ChallengesImg2, ChallengesImg3, StratImg } from '../assets'
import { BubbleButton } from '../components/common'
import ChallengesImageBox from '../components/common/ChallengesImageBox'
import ChallengesTable from '../components/ChallengesTable'

import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

const Packages = () => {
    const challengesRef = useRef(null);


    const handleScroll = () => {
        const smoother = ScrollSmoother.get();
        if (smoother && challengesRef.current) {
            const targetY = smoother.offset(challengesRef.current, "top");

            gsap.to(smoother, {
                duration: 2,
                scrollTop: targetY,
                ease: "power2.inOut",
            });
        }
    };
    return (
        <>
            <section className='top pt-[20vw] md:pt-[14vw] max-sm:pt-[7rem]'>
                <div className="container relative">
                    <video src={ChallengesBannerVid} autoPlay playsInline muted loop className='w-full mx-auto max-w-[1276px] max-md:min-h-[500px] object-cover'></video>
                    <div className="text absolute top-[5%] w-[93%] max-w-[724px] left-1/2 -translate-x-1/2 text-center">
                        <p className='text-[#FCFCFC] text-center text-[19px] md:text-[24px] font-light'>Tailored for Every Trader</p>
                        <SectionHeading paraClass="!text-[#FCFCFC]" heading="Choose the challenge <br /> that fits YOU" para="Every trader is different, that's why we offer more than one way to get funded. Pick a Go4Trades challenge that matches your goals and unlock simulated capital. " />
                        <BubbleButton onClick={handleScroll} className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Pick your challenge</BubbleButton>

                    </div>
                </div>
            </section>

            <section className='know-our-challenge py-[5rem]'>
                <div className="container">
                    <div className="text-center">
                        <SectionHeading className="!mb-6" heading="Get to know our Challenges" />
                        <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/register?_gl=1*ek2t8j*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIxNDI1NzIkbzQkZzAkdDE3NTIxNDI1NzIkajYwJGwwJGgw*_ga_S S36ZZJDJK*czE3NTIxNDI1NzIkbzQkZzAkdDE3NTI xNDI1NzIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Pick your challenge</BubbleButton>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 mt-10'>
                        <ChallengesImageBox
                            img={ChallengesImg1}
                            subHeading="one step"
                            heading="Built for smart risk-takers "
                            para="It's simple, pass one phase and unlock simulated capital. No second chances, just solid performance and control. "
                            imgCLass="ml-auto"
                            textBoxClass="p-7"
                            className="border border-[#002E55] rounded-[24px] bg-[image:var(--gradient-2)]"
                        />

                        <ChallengesImageBox
                            img={ChallengesImg2}
                            subHeading="two Step "
                            heading="For those who play the long game "
                            para="This challenge gives you space to prove consistency, sharpen your strategy, and earn funding a structured way. "
                            imgCLass="ml-auto"
                            textBoxClass="p-7 pt-10 w-1/2 max-md:w-full"
                            className="border border-[#002E55] rounded-[24px] flex flex-row-reverse max-md:flex-col max-md:flex-col-reverse"
                            imageParentClass="self-end w-1/2 max-md:w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        <ChallengesImageBox
                            img={ChallengesImg3}
                            subHeading="Instant Funding "
                            heading="For the confident starter "
                            para="Skip the wait and go live from day one. Get immediate access to simulated capital and start building your track record with real rewards. "
                            imgCLass="ml-auto"
                            textBoxClass="p-7 mt-[-10%]"
                            className="border border-[#002E55] rounded-[24px]"
                        />

                        <ChallengesImageBox
                            subHeading="Limitless "
                            heading="Built for smart risk-takers "
                            para="Think bigger. Designed for serious traders ready to scale fast, with simulated capital increases, performance-based growth, and no ceiling in sight for rewards. "
                            imgCLass="ml-auto"
                            textBoxClass="p-7 text-center"
                            className="border border-[#002E55] rounded-[24px] flex flex-col justify-center bg-[image:var(--gradient-3)]"
                        />
                    </div>
                </div>
            </section>

            <section className='challenge-table py-[5rem]' ref={challengesRef}>
                <div className="container">
                    <SectionHeading heading="Choose Your Trading Challenge" para="This is your entry point to getting funded with simulated capital. <br />
                      Pick a challenge based on your goals and trading style:" />

                    <ChallengesTable />
                    <div className="text-center mt-10">
                        <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Pick your challenge</BubbleButton>
                    </div>
                </div>
            </section>

            <section className='where-start py-[5rem]'>
                <div className="container">
                    <div className="text-center">
                        <img src={StratImg} alt="image" className='mx-auto mb-6' />
                        <SectionHeading className="!mb-6" heading="Where Will You Start?" para="Start your challenge. Your way. <br /> Pay with card, crypto, or bank transfer. " />
                        <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/register?_gl=1*ek2t8j*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIxNDI1NzIkbzQkZzAkdDE3NTIxNDI1NzIkajYwJGwwJGgw*_ga_S S36ZZJDJK*czE3NTIxNDI1NzIkbzQkZzAkdDE3NTI xNDI1NzIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Pick your challenge</BubbleButton>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages