import { useRef, useState } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { AcedemyPage1, AcedemyPage2, AcedemyPage3, AloneBgImg, AloneImg, ReadyImg } from '../assets'
import AcedemyCheckBox from '../components/common/AcedemyCheckBox'
import { BubbleButton, SidebarPopup } from '../components/common'
import MentorSec from '../components/common/MentorSec'
import HowWorksSec from '../components/HowWorksSec'

import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

const Academy = () => {

    const challengesRef = useRef(null);
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedLevelImage, setSelectedLevelImage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    const handleLevelSelect = (level, image) => {
        console.log('Level selected:', level, image);
        setSelectedLevel(level);
        setSelectedLevelImage(image);
        setIsSidebarOpen(true);
        console.log('Sidebar should be open now, isSidebarOpen:', true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedLevel('');
    };

    return (
        <>
            <section className='academy-banner pt-[12rem] pb-[6rem] bg-white' ref={challengesRef}>
                <div className="container">
                    <h4 className='text-(--base-color) text-[20px] font-medium text-center'>Trade smarter with Go4Trades Academy </h4>
                    <SectionHeading headingCLass="!text-(--base-color) !normal-case" paraClass="!text-(--base-color) font-light" heading="Turn your ambition into <br/> action" para="Access structured courses, learn key strategies, and begin trading <br/> with confidence. No fluff, just results. " />


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[988px] mx-auto gap-3 mb-8">

                        <AcedemyCheckBox
                            name="academy-level"
                            value="basics"
                            isSelected={selectedLevel === 'basics'}
                            onSelect={handleLevelSelect}
                            heading="Chart the Basics"
                            para="Beginner Level"
                            img={AcedemyPage2}
                        />
                        <AcedemyCheckBox
                            name="academy-level"
                            value="strategy"
                            isSelected={selectedLevel === 'strategy'}
                            onSelect={handleLevelSelect}
                            heading="Set the Strategy"
                            para="Intermediate"
                            img={AcedemyPage1}
                        />
                        <AcedemyCheckBox
                            name="academy-level"
                            value="advanced"
                            isSelected={selectedLevel === 'advanced'}
                            onSelect={handleLevelSelect}
                            heading="Secure the Bag"
                            para="Advanced"
                            img={AcedemyPage3}
                        />

                    </div>



                    <p className='text-(--base-color) font-light text-[16px] text-center mb-8'>Check out other plans, too</p>
                    <div className="flex justify-center flex-wrap gap-3 mb-6">
                        <BubbleButton Tag='a' href='#' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>View full access course</BubbleButton>
                        <BubbleButton Tag='a' href='/challenges' bubbleColor='#0f6540' className="btn bg-green-gradient primary-theme inline-block !p-[14px] !px-[32px] hover:opacity-80">View simulated challenges </BubbleButton>
                    </div>




                </div>
            </section>

            <HowWorksSec handleScroll={handleScroll} />

            <MentorSec />

            <section className='alone py-[5rem] lg:min-h-[825px] relative z-[2]'>
                <div className="container h-full">
                    <img src={AloneImg} alt="image" className='mx-auto mb-8' />
                    <div className='max-w-[832px] mx-auto text-center'>
                        <SectionHeading className="!mb-6" heading="You're not in this alone" para="Coaches at Go4Trades aren’t just here to talk charts. They’re here to help you feel more confident, understand how the market really works, and guide you step by step as you grow. " />
                        <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Try Coaching </BubbleButton>
                    </div>

                    <img src={AloneBgImg} alt="image" className='absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]' />
                </div>
            </section>

            <section className='start py-[5rem] bg-white'>
                <div className="container">
                    <img src={ReadyImg} alt="image" className='mx-auto mb-6 max-md:w-2/3' />
                    <div className='max-w-[630px] mx-auto'>
                        <SectionHeading className="!mb-6" headingCLass="!text-(--base-color) !normal-case" paraClass="!text-(--base-color) font-light" heading="Ready to Start Trading Smarter? " para="Join thousands already learning, practicing, and profiting with Go4Trades." />

                        <div className="flex justify-center flex-wrap gap-3">
                            <BubbleButton Tag='button' onClick={handleScroll} className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Start Now</BubbleButton>
                            <BubbleButton Tag='a' target="_blank" href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' bubbleColor='#0f6540' className="btn bg-green-gradient primary-theme inline-block opacity-65 hover:opacity-[1] !p-[14px] !px-[32px]">Talk to a Coach</BubbleButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Popup with Tally Form */}
            <SidebarPopup
                isOpen={isSidebarOpen}
                onClose={handleCloseSidebar}
                selectedLevel={selectedLevel}
                selectedLevelImage={selectedLevelImage}
            />
        </>
    )
}

export default Academy