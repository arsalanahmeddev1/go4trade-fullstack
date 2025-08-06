import React, { useEffect, useRef } from 'react'
import SectionHeading from './common/SectionHeading'
import { HowWorks, HowWorks3, HowWorks4 } from '../assets'
import { BubbleButton, SidebarPopup } from './common'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HowWorksSec = ({ handleScroll }) => {
    let mainContainer = useRef();
    let box1 = useRef();
    let box2 = useRef();
    let box3 = useRef();
    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.set([box2.current, box3.current], {
                opacity: 0,
                pointerEvents: 'none',
            });

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: mainContainer.current,
                    start: 'center center',
                    end: '+=1000',
                    pin: true,
                    scrub: 1,
                }
            });

            master.to(box1.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
                ease: 'power2.inOut'
            }, 0.1);

            master.to(box2.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.inOut',
                pointerEvents: 'unset',
            }, 0.1);

            master.to(box2.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
                ease: 'power2.inOut'
            }, 0.4);

            master.to(box3.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.inOut',
                pointerEvents: 'unset',
            }, 0.4);

            const handleResize = () => {
                ScrollTrigger.refresh();
            };

            window.addEventListener('resize', handleResize);

            setTimeout(() => {
                ScrollTrigger.refresh();
                requestAnimationFrame(() => ScrollTrigger.refresh());
            }, 100);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, mainContainer);

        return () => ctx.revert();

    }, [])
    
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [selectedLevel, setSelectedLevel] = React.useState('');

    const handleLevelSelect = (level) => {
        console.log('Level selected:', level);
        setSelectedLevel(level);
        setIsSidebarOpen(true);
        console.log('Sidebar should be open now, isSidebarOpen:', true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedLevel('');
    };
    return (
        <div>
            <section className='how-works pt-[5rem] pb-[5rem]' ref={mainContainer}>
                <div className="container">
                    <SectionHeading heading="How does this work?" />
                    <div className="relative flex flex-col justify-center max-w-[1280px] mx-auto min-h-[550px] max-md:min-h-[500px] rounded-[32px] border-[2px] border-[#002E55] bg-[#01111FB2] max-lg:p-10 how-works-box">
                        <div className='grid grid-cols-1 lg:grid-cols-2 absolute top-1/2 left-0 -translate-y-1/2 max-md:px-6 items-center' ref={box1}>
                            <div>
                                <div className="image max-lg:w-[50%] mx-auto w-max relative z-[2]">
                                    <img src={HowWorks} alt="image" />
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="text lg:pr-[8rem] flex flex-col justify-center h-full">
                                <h4 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[44px] font-medium mb-4'>Learn</h4>
                                <p className='text-[#FCFCFC] text-[19px] md:text-[25px] lg:text-[32px] font-light mb-6 min-h-[120px] flex items-center'>KHDA-approved trading programs made simple from beginner to advanced, get the skills that matter.</p>
                                <BubbleButton Tag='button' onClick={() => handleLevelSelect('get-started')} className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block w-fit'>Get started</BubbleButton>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 absolute top-1/2 left-0 -translate-y-1/2 max-md:px-6 items-center' ref={box2}>
                            <div>
                                <div className="image max-lg:w-[50%] mx-auto w-max relative z-[2]">
                                    <img src={HowWorks3} alt="image" />
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="text lg:pr-[8rem] flex flex-col justify-center h-full">
                                <h4 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[44px] font-medium mb-4'>Practice</h4>
                                <p className='text-[#FCFCFC] text-[19px] md:text-[25px] lg:text-[32px] font-light mb-6 min-h-[120px] flex items-center'>Test your skills with simulated capital. No pressure, no risk. Just virtual capital and realistic challenges to help you build confidence.</p>
                                <BubbleButton Tag='a' href='/challenges' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block w-fit'>View Challenges</BubbleButton>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 absolute top-1/2 left-0 -translate-y-1/2 max-md:px-6 items-center' ref={box3}>
                            <div>
                                <div className="image max-lg:w-[50%] mx-auto w-max relative z-[2]">
                                    <img src={HowWorks4} alt="image" />
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="text lg:pr-[8rem] flex flex-col justify-center h-full">
                                <h4 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[44px] font-medium mb-4'>Earn</h4>
                                <p className='text-[#FCFCFC] text-[19px] md:text-[25px] lg:text-[32px] font-light mb-6 min-h-[120px] flex items-center'>Earn as you grow. Join funded challenges where you keep up to 90% of your rewards.</p>
                                <BubbleButton Tag='a' href='/scaling-plan' onClick={handleScroll} className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block w-fit'>Try Scaling Plan</BubbleButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Popup with Tally Form */}
            <SidebarPopup
                isOpen={isSidebarOpen}
                onClose={handleCloseSidebar}
                selectedLevel={selectedLevel}
            />
        </div>
    )
}

export default HowWorksSec


