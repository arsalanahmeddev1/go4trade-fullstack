import React, { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'
import BubbleButton from './BubbleButton'
import { HowWeFloat, HowWeFloat1 } from '../../assets'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin)

const MentorSec = () => {

    let svgImg1 = useRef();
    let svgPath1 = useRef();

    let svgImg2 = useRef();
    let svgPath2 = useRef();
    let mainContainer = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.to(svgImg1.current, {
                motionPath: {
                    path: svgPath1.current,
                    align: svgPath1.current,
                    alignOrigin: [0.5, 0.5],
                }
            })

            gsap.to(svgImg2.current, {
                motionPath: {
                    path: svgPath2.current,
                    align: svgPath2.current,
                    alignOrigin: [0.5, 0.5],
                }
            })

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: mainContainer.current,
                    start: 'top 50%',
                    end: '+=1500',
                    scrub: 1,
                }
            })

            master.to(svgImg1.current, {
                motionPath: {
                    path: svgPath1.current,
                    align: svgPath1.current,
                    alignOrigin: [0.5, 0.5],
                    start: 0.8,
                    end: 0,
                },
            }, 'one');

            master.to(svgImg2.current, {
                motionPath: {
                    path: svgPath2.current,
                    align: svgPath2.current,
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0,
                },
            }, 'one');

            const handleResize = () => {
                ScrollTrigger.refresh();
                console.log('refreshed');

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


    return (
        <section className='mentor py-[5rem] bg-white min-h-[100dvh] relative overflow-hidden' ref={mainContainer}>
            <div className="container">
                <div className='max-w-[666px] mx-auto text-center'>
                    <SectionHeading className="!mb-3" headingCLass="gradient-text" heading="Want a Mentor by <br/> Your Side? " />
                    <h6 className='text-(--base-color) text-[22px] font-medium text-center'>Coaches at Go4Trades aren’t just here to talk charts.</h6>
                    <p className='text-(--base-color) text-[16px] md:text-[18px] font-light text-center mb-8'>They’re here to help you feel more confident, understand how the market really works, and guide you step by step as you grow.  </p>

                    <h6 className='text-(--base-color) text-[32px] font-medium text-center'>Get KHDA Certified</h6>
                    <p className='text-(--base-color) text-[16px] md:text-[18px] font-light text-center mb-8'>Show off your skills with official recognition. Complete your program and earn a KHDA-approved certificate. </p>

                    <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Try Coaching</BubbleButton>

                    <div className='absolute bottom-0 svg-box-1 right-0 h-[70%]'>
                        <img src={HowWeFloat1} alt="image" className='absolute w-[7%]' ref={svgImg2} />
                        <svg className='h-full' width="auto" viewBox="0 0 910 759" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={svgPath2} d="M909.999 1H532.421C438.533 1 362.421 77.1116 362.421 171V304.188C362.421 398.076 286.31 474.188 192.421 474.188H171.821C77.9329 474.188 1.82129 550.299 1.82129 644.188V759" stroke="url(#paint0_linear_647_3608)" stroke-width="2" />
                            <defs>
                                <linearGradient id="paint0_linear_647_3608" x1="909.999" y1="759" x2="50.8316" y2="963.83" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#80DBB4" />
                                    <stop offset="0.999811" stop-color="#684BD3" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className='absolute bottom-0 svg-box-2 left-0 h-[70%]'>
                        <img src={HowWeFloat} alt="image" className='absolute w-[7%]' ref={svgImg1} />
                        <svg className='h-full' width="auto" viewBox="0 0 910 759" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={svgPath1} d="M-0.000653744 1H377.577C471.465 1 547.577 77.1116 547.577 171V304.188C547.577 398.076 623.688 474.188 717.577 474.188H738.177C832.065 474.188 908.177 550.299 908.177 644.188V759" stroke="url(#paint0_linear_647_3607)" stroke-width="2" />
                            <defs>
                                <linearGradient id="paint0_linear_647_3607" x1="-104" y1="759" x2="853.574" y2="987.291" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#684BD3" stop-opacity="0" />
                                    <stop offset="0.500113" stop-color="#684BD3" />
                                    <stop offset="1" stop-color="#80DBB4" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default MentorSec