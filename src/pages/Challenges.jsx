import  { useEffect } from 'react'
import { ChallengesBannerVid, ChallengesPageVid, Fund1, Fund2, Key5 } from '../assets'
import SectionHeading from '../components/common/SectionHeading'
import GameBox from '../components/GameBox';
import ImageBox from '../components/common/ImageBox';
import AnimatedBorder from '../components/common/AnimatedBorder';
import MagneticEffect from '../components/common/MagneticEffect';
import ChallengesTable from '../components/ChallengesTable';

const Challenges = () => {

    useEffect(() => {

        MagneticEffect(0.1);

    }, []);

    return (
        <>
            <section className='top pt-[20vw] md:pt-[14vw] max-sm:pt-[9rem]'>
                <div className="container relative">
                    <video src={ChallengesBannerVid} autoPlay playsInline muted loop className='w-full mx-auto max-w-[1276px]'></video>
                    <div className="text absolute top-[5%] w-[93%]">
                        <p className='text-[#FCFCFC] text-center text-[24px] font-light'>How Go4Trades Works:</p>
                        <SectionHeading heading="Get Funded to Trade Without <br /> Risking Your Own Money" />
                    </div>
                </div>
            </section>

            <section className='become-trader'>
                <div className="container">

                    <AnimatedBorder padding="max-w-[1140px] w-full mx-auto !rounded-[24px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 max-w-[1140px] w-full mx-auto rounded-[24px] items-center px-5 py-6 md:px-9 md:py-10 border-1 border-[#002E55] double-gradient">
                            <h4 className='text-[#FCFCFC] text-[25px] sm:text-[30px] md:text-[40px] font-medium leading-[120%]'>Looking <br />
                                to become a funded trader? </h4>


                            <p className='text-[16px] sm:text-[18px] lg:text-[22px] text-[#FCFCFC] font-extralight'>At Go4Trades, we’re not just funding traders. We’re empowering dreamers, doers, and future market leaders. <br /><br />

                                Join our simulated capital challenges, prove your skills, and unlock real trading capital with no personal risk. </p>
                        </div>
                    </AnimatedBorder>
                </div>
            </section>

            <GameBox />

            <section className='challenge-table py-[5rem]'>
                <div className="container">
                    <SectionHeading badge="Step 2: " heading="Choose Your Trading Challenge" para="This is your entry point to getting funded with simulated capital. <br />
                      Pick a challenge based on your goals and trading style:" />
                    <ChallengesTable />
                </div>
            </section>

            <section className='funds py-[5rem]'>
                <div className="container">

                    <AnimatedBorder padding="mb-6">
                        <div className="grid items-center grid-cols-1 lg:grid-cols-2 fund-boxes border-1 border-[#002E55] rounded-[12px] p-5 sm:p-6 md:p-8 lg:p-10 gap-y-10 bg-(--base-color)">
                            <div className='text'>
                                <SectionHeading className="text-start !mb-2" badge_class="!mx-0" badge="Step 3: " heading="Turn Skill Into Bigger Payouts" />
                                <h6 className='text-[#CCCCCC] text-[22px] font-medium mb-6'>Pass the challenge? Congrats! </h6>
                                <p className='text-[18px] text-[#CCCCCC] font-extralight mb-8'>You’re now a funded trader. We’ll fund your account with up to <strong>$100,000+ simulated capital</strong>, giving you the chance to trade live markets without using your own capital. </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                    <ImageBox img={Key5} heading="You trade. 
                                        We take the risk" />

                                    <ImageBox img={Key5} heading="You keep up to 90% of the profits " />

                                </div>

                                <p className='text-[#CCCCCC] text-[18px] font-extralight'>It’s the smarter, safer way to start your trading career. </p>

                            </div>
                            <div className='image magnet-box'>
                                <img src={Fund1} alt="image" className='mx-auto w-2/3 lg:w-auto magnet-element' />
                            </div>
                        </div>
                    </AnimatedBorder>

                    <AnimatedBorder>
                        <div className="grid items-center grid-cols-1 lg:grid-cols-2 fund-boxes border-1 border-[#002E55] rounded-[12px] p-5 sm:6 md:p-8 lg:p-10 gap-y-10 bg-(--base-color)">
                            <div className='text'>
                                <SectionHeading className="text-start !mb-2" badge_class="!mx-0" badge="Step 3: " heading="Get Funded by Go4Trades" />
                                <h6 className='text-[#CCCCCC] text-[22px] font-medium mb-6'>Scale Your Funded Account & Earn More </h6>
                                <p className='text-[18px] text-[#CCCCCC] font-extralight mb-8'>Consistency gets rewarded. As you prove your skill, we’ll boost your capital and unlock higher payout levels.  </p>

                                <div className="grid grid-cols-1 gap-6">

                                    <ImageBox className="flex items-center gap-5" img={Key5} headingClass="!font-extralight" heading="Up to 90% profit split " />

                                    <ImageBox className="flex items-center gap-5" img={Key5} headingClass="!font-extralight" heading="Fast withdrawals " />
                                    <ImageBox className="flex items-center gap-5" img={Key5} headingClass="!font-extralight" heading="Performance-based scaling " />

                                </div>

                                <p className='text-[#CCCCCC] text-[18px] font-extralight capitalize'>the more you grow, the more we fund. It’s that simple. </p>

                            </div>
                            <div className='image magnet-box'>
                                <img src={Fund2} alt="image" className='mx-auto w-2/3 lg:w-auto magnet-element' />
                            </div>
                        </div>
                    </AnimatedBorder>

                </div>
            </section>
        </>
    )
}

export default Challenges