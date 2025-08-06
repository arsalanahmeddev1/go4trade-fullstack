import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import SectionHeading from "./common/SectionHeading";
import { BubbleButton } from "./common";
import { LockImg, SecurityVideo, StarImg, TestiImg, profile01, profile02, profile03, profile04, star5 } from "../assets";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


const TestimonialsSec = () => {
    const mainContainer = useRef(null);
    const mainDiv = useRef(null);
    const pinContainer = useRef(null);
    const VideoSec = useRef(null);
    const pathRef = useRef(null);
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const pathRef4 = useRef(null);
    const pathRef5 = useRef(null);
    const textBox = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.set(textBox.current, { opacity: 0, y: "20%" });

            const windowWidth = window.innerWidth > 768;

            gsap.set([box1.current,
            box2.current,
            box3.current,
            box4.current], { opacity: 0 });

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: mainDiv.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 1,
                    pin: pinContainer.current,
                    onEnter: () => {
                        // gsap.to(textBox.current, { opacity: 1, y: "-50%", duration: 0.5, })
                        // gsap.to([box1.current,
                        // box2.current,
                        // box3.current,
                        // box4.current], { opacity: 1, duration: 0.5 })
                    },
                    onLeave: () => {
                        // gsap.to(textBox.current, { opacity: 0, y: "20%", duration: 0.5, })
                        // gsap.to([box1.current,
                        // box2.current,
                        // box3.current,
                        // box4.current], { opacity: 0, duration: 0.5 })
                    },
                    onLeaveBack: () => {
                        // gsap.to(textBox.current, { opacity: 0, y: "20%", duration: 0.5, })
                        // gsap.to([box1.current,
                        // box2.current,
                        // box3.current,
                        // box4.current], { opacity: 0, duration: 0.5 })
                    },
                    onEnterBack: () => {
                        // gsap.to(textBox.current, { opacity: 1, y: "-50%", duration: 0.5, })
                        // gsap.to([box1.current,
                        // box2.current,
                        // box3.current,
                        // box4.current], { opacity: 1, duration: 0.5 });
                    }
                }
            });

            master.from(
                [pathRef.current,
                pathRef1.current,
                pathRef2.current,
                pathRef3.current,
                pathRef4.current,
                pathRef5.current,]
                , {
                    drawSVG: "90% 70%",
                    duration: 0.6,
                }, "one");

            master.fromTo(box1.current, {
                translateY: "130%",
            }, {
                translateY: windowWidth ? "20%" : "-60%",
                translateZ: windowWidth ? "-150px" : "-250px",
                rotateY: "30deg",
                rotateZ: "-9deg",
                opacity: 1,
            }, 0.6);

            master.fromTo(box2.current, {
                translateY: "130%",
            }, {
                translateY: windowWidth ? "-40%" : "-60%",
                translateZ: windowWidth ? "-150px" : "-250px",
                rotateY: "10deg",
                rotateZ: "2deg",
                opacity: 1,
            }, 0.6);


            master.fromTo(box3.current, {
                translateY: "130%",
            }, {
                translateY: windowWidth ? "-20%" : "-55%",
                translateZ: windowWidth ? "-150px" : "-250px",
                rotateY: "-10deg",
                rotateZ: "-2deg",
                opacity: 1,
            }, 0.6);

            master.fromTo(box4.current, {
                translateY: "130%",
            }, {
                translateY: windowWidth ? "-40%" : "-55%",
                translateZ: windowWidth ? "-150px" : "-250px",
                rotateY: "-10deg",
                rotateZ: "9deg",
                opacity: 1,
            }, 0.6);

            master.to(textBox.current,
                { opacity: 1, y: "-50%", duration: 0.5, }, 0.9);


            master.to(mainContainer.current, {
                scale: 1.5,
                z: 250,
                transformOrigin: "center center",
                ease: "power1.inOut",
                opacity: 0,
                duration: 0.2,
            });

            // master.from(VideoSec.current, {
            //     opacity: 0,
            //     y: "10%",
            //     scale: 0.8,
            //     z: -100,
            //     duration: 0.2,
            // });

            const handleResize = () => {
                ScrollTrigger.refresh();
            };

            setTimeout(() => {
                ScrollTrigger.refresh();
                requestAnimationFrame(() => ScrollTrigger.refresh());
            }, 100);

            return () => {
                window.removeEventListener('resize', handleResize);
            };

        }, mainDiv.current);

        return () => ctx.revert();

    }, []);

    return (

        <div className="main-div" ref={mainDiv}>
            <div className="pincontainer relative z-[2] perspective-[1000px] max-2xl:items-top h-screen" ref={pinContainer}>
                <section className='testimonial py-[5rem] relative overflow-hidden perspective-[500px] pb-0 h-full' ref={mainContainer}>
                    <div className="container perspective-[1000px] h-full flex items-center">

                        <div className="flex justify-center w-full">
                            <div className='flex gap-9 justify-center w-max mx-auto'>
                                <svg width="486" className="shrink-0" viewBox="0 0 486 670" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8" filter="url(#filter0_f_2048_969)">
                                        <path ref={pathRef} d="M452.665 5C467.106 119.44 519.548 492.049 409 585C298.452 677.951 166.336 659.658 4 659.658" stroke="url(#paint0_linear_2048_969)" stroke-width="8" />
                                    </g>
                                    <path ref={pathRef1} d="M452.665 5C467.106 119.44 519.548 492.049 409 585C298.452 677.951 166.336 659.658 4 659.658" stroke="url(#paint1_linear_2048_969)" />
                                    <defs>
                                        <filter id="filter0_f_2048_969" x="0" y="0.499023" width="485.76" height="668.617" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2048_969" />
                                        </filter>
                                        <linearGradient id="paint0_linear_2048_969" x1="391.415" y1="-19.4872" x2="247.019" y2="662.792" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2048_969" x1="391.415" y1="-19.4872" x2="247.019" y2="662.792" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <svg width="17" className="shrink-0" height="701" viewBox="0 0 17 701" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_2060_972)">
                                        <path ref={pathRef2} d="M8.5 4V697" stroke="url(#paint0_linear_2060_972)" stroke-width="8" />
                                    </g>
                                    <path ref={pathRef3} d="M8.5 4V697" stroke="url(#paint1_linear_2060_972)" />
                                    <defs>
                                        <filter id="filter0_f_2060_972" x="0.5" y="0" width="16" height="701" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2060_972" />
                                        </filter>
                                        <linearGradient id="paint0_linear_2060_972" x1="9" y1="4" x2="9" y2="697" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2060_972" x1="9" y1="4" x2="9" y2="697" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <svg width="496" className="shrink-0" viewBox="0 0 496 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8" filter="url(#filter0_f_2060_973)">
                                        <path ref={pathRef4} d="M38.0948 10C23.6539 124.44 -28.7881 497.049 81.7598 590C192.308 682.951 324.424 664.658 486.76 664.658" stroke="url(#paint0_linear_2060_973)" stroke-width="8" />
                                    </g>
                                    <path ref={pathRef5} d="M38.0948 10C23.6539 124.44 -28.7881 497.049 81.7598 590C192.308 682.951 324.424 664.658 486.76 664.658" stroke="url(#paint1_linear_2060_973)" />
                                    <defs>
                                        <filter id="filter0_f_2060_973" x="-0.000244141" y="0.499023" width="495.76" height="678.617" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_2060_973" />
                                        </filter>
                                        <linearGradient id="paint0_linear_2060_973" x1="99.3444" y1="-14.4872" x2="243.74" y2="667.792" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2060_973" x1="99.3444" y1="-14.4872" x2="243.74" y2="667.792" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0064B9" />
                                            <stop offset="1" stop-color="#01111F" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="div box-wrapper absolute top-0 2xl:top-1/2 2xl:-translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[1223px] w-full h-[60%] md:h-full max-h-[700px] grid grid-cols-2 md:grid-cols-4 items-start perspective-[1000px]">

                            <div className="testi-box p-4 md:p-5 px-4 md:px-6 max-w-[243px] rounded-[12px]" ref={box1}>
                                <div className="name flex items-center gap-4 mb-4">
                                    <img src={profile01} className="max-w-[44px]" alt="image" />
                                    <div>
                                        <h6 className="text-[#FCFCFC] font-semibold text-[12.61px] md:text-[18px] mb-0 leading-[18px]">Daniel</h6>
                                        <p className="text-[#FCFCFC] font-extralight text-[9px] md:text-[14px]">@seanrose</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p className="text-[#A0A0A0] font-extralight text-[10px] md:text-[14px] mb-2 md:mb-4">I passed the first challenge, thanks to the 
                                    academy.</p>
                                    <p className="text-[#F8F8F8] text-[14px] font-medium mb-0 md:mb-4">Daniel.</p>

                                    <img src={StarImg} alt="image" />
                                </div>
                            </div>

                            <div className="testi-box p-4 md:p-5 px-4 md:px-6 max-w-[243px] rounded-[12px] ml-auto md:m-0" ref={box2}>
                                <div className="name flex items-center gap-4 mb-4">
                                    <img src={profile02} className="w-[44px] h-[44px] object-cover  rounded-full" alt="image" />
                                    <div>
                                        <h6 className="text-[#FCFCFC] font-semibold text-[12.61px] md:text-[18px] mb-0 leading-[18px]">Manish Gupta</h6>
                                        <p className="text-[#FCFCFC] font-extralight text-[9px] md:text-[14px]">@seanrose</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p className="text-[#A0A0A0] font-extralight text-[10px] md:text-[14px] mb-2 md:mb-4">Go4Trades changed the game for me with 
                                    their affordable price and payouts.</p>
                                    <p className="text-[#F8F8F8] text-[14px] font-medium mb-0 md:mb-4">Manish Gupta</p>

                                    <img src={StarImg} alt="image" />
                                </div>
                            </div>

                            <div className="testi-box p-4 md:p-5 px-4 md:px-6 max-w-[243px] rounded-[12px]" ref={box3}>
                                <div className="name flex items-center gap-4 mb-4">
                                    <img src={profile03} className="w-[44px] h-[44px] object-cover  rounded-full" alt="image" />
                                    <div>
                                        <h6 className="text-[#FCFCFC] font-semibold text-[12.61px] md:text-[18px] mb-0 leading-[18px]">Vishiti</h6>
                                        <p className="text-[#FCFCFC] font-extralight text-[9px] md:text-[14px]">@seanrose</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p className="text-[#A0A0A0] font-extralight text-[10px] md:text-[14px] mb-2 md:mb-4">I am really enjoying trading with go4trades</p>
                                    <p className="text-[#F8F8F8] text-[14px] font-medium mb-0 md:mb-4">Vishiti</p>

                                    <img src={star5} alt="image" />
                                </div>
                            </div>

                            <div className="testi-box p-4 md:p-5 px-4 md:px-6 max-w-[243px] rounded-[12px] ml-auto md:m-0" ref={box4}>
                                <div className="name flex items-center gap-4 mb-4">
                                    <img src={profile04} className="w-[44px] h-[44px] object-cover  rounded-full" alt="image" />
                                    <div>
                                        <h6 className="text-[#FCFCFC] font-semibold text-[12.61px] md:text-[18px] mb-0 leading-[18px]">Alex Pokorny</h6>
                                        <p className="text-[#FCFCFC] font-extralight text-[9px] md:text-[14px]">@seanrose</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p className="text-[#A0A0A0] font-extralight text-[10px] md:text-[14px] mb-2 md:mb-4">They’re new but they’re here to stay!</p>
                                    <p className="text-[#F8F8F8] text-[14px] font-medium mb-0 md:mb-4">Alex Pokorny</p>

                                    <img src={star5} alt="image" />
                                </div>
                            </div>

                        </div>

                        <div className="text text-center absolute top-[80%] left-1/2 -translate-1/2 w-full" ref={textBox}>
                            <SectionHeading badge="Wall of love" heading="What Traders Are Saying" para="Simplicity is easy when you just skip tons of mission-critical features." className="!mb-5" />
                            <BubbleButton Tag='a' target="_blank" href='https://www.trustindex.io/reviews/go4trades.com' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Review us on Trust index</BubbleButton>
                        </div>
                    </div>
                </section>

                {/* <section className='security absolute z-[-1] top-1/2 -translate-y-1/2 left-0 w-full py-[8rem] mb-[5rem]' ref={VideoSec}>
                    <video src={SecurityVideo} autoPlay muted playsInline preload='metadata' loop className='opacity-85 absolute top-0 left-0 w-full h-full object-cover z-[-1] object-center'></video>
                    <div className="container">
                        <div className='w-full'>
                            <img src={LockImg} className='mx-auto mb-6' alt="image" />
                            <SectionHeading className="mb-[0]" badge="Go4trades cards" heading="Security you can bank on" para="We prioritize security, transparency, and compliance, ensuring a safe <br /> trading environment." />
                        </div>
                    </div>
                </section> */}
            </div>
        </div>

    )
}

export default TestimonialsSec