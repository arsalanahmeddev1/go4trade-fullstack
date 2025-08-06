import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Dotsimage } from "../assets";
import SectionHeading from "./common/SectionHeading";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const Drawsvg = (props) => {
    const pathRef = useRef(null);
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const containerRef = useRef(null);
    const pinContainer = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let ctx = gsap.context(() => {
            const isDesktop = window.innerWidth > 1024;

            if (isDesktop) {
                gsap.set('.text-box', { opacity: 0, y: "30%" })
            }
            gsap.set([containerRef.current, pinContainer.current], { opacity: 1 });

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "25% top",
                    end: isDesktop ? "+=4000" : "bottom",
                    scrub: true,
                    pin: isDesktop ? pinContainer.current : false,
                    onRefreshInit: self => {
                        self.end = self.start + (isDesktop ? 4000 : 0);
                    }
                }
            });


            master.from(pathRef.current, {
                drawSVG: "0%",
                duration: 1
            }, "one");

            master.from(pathRef1.current, {
                drawSVG: "0%",
                duration: 1
            }, "one");

            master.from(pathRef2.current, {
                drawSVG: "0%",
                duration: 1
            }, "one");


            if (isDesktop) {
                master.to(box1.current, {
                    y: "-0%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none",
                }, 0.01);

                master.to(box2.current, {
                    y: "-10%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none"
                }, 0.20);

                // master.to(box1.current, {
                //     y: "20%",
                //     duration: 0.09,
                //     opacity: 0,
                //     ease: "none",
                // }, 0.20);

                master.to(box3.current, {
                    y: "-50%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none"
                }, 0.7);

                // master.to(box2.current, {
                //     y: "20%",
                //     duration: 0.09,
                //     opacity: 0,
                //     ease: "none"
                // }, 0.7);
            }

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

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={`steps overflow-hidden relative z-[4] mb-[-10%] mt-[25px] ${props.sectionClass}`} ref={containerRef}>
            <div className={`container ${props.headingClass}`}>

                <SectionHeading badge={props.badge} heading={props.mainHeading} para={props.mainPara} />

            </div>
            <div ref={pinContainer} className="mt-20 relative max-w-[910px] mx-auto w-[90%] lg:w-full lg:flex items-center justify-center 3xl:h-screen">
                <div className="relative">
                    <svg className="w-full absolute lg:relative blur-[2px] hidden" height="373" viewBox="0 0 910 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5C322 1.5 896.238 26.5 908 169.5C919.762 312.5 660 359.5 483 368.5C341.4 375.7 292 368.5 292 368.5" stroke="url(#paint0_linear_2006_920)" strokeWidth="1.5" />
                        <path d="M353.5 12.0005C353.5 12.0005 504 20.0005 621.5 39.5005" stroke="url(#paint1_linear_2006_920)" strokeWidth="3" />
                        <defs>
                            <linearGradient id="paint0_linear_2006_920" x1="530" y1="39" x2="315" y2="372" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#004986" />
                                <stop offset="1" stopColor="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2006_920" x1="353.296" y1="14.5365" x2="621.77" y2="36.1379" gradientUnits="userSpaceOnUse">
                                <stop offset="0.000924955" stopColor="#004986" stopOpacity="0" />
                                <stop offset="0.575" stopColor="#80DBB4" />
                                <stop offset="1" stopColor="#004986" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg className="w-full absolute lg:relative" height="391" viewBox="0 0 928 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_2055_971)">
                            <path ref={pathRef} d="M9.5 10.5C331 10.5 905.238 35.5 917 178.5C928.762 321.5 669 368.5 492 377.5C350.4 384.7 301 377.5 301 377.5" stroke="url(#paint0_linear_2055_971)" stroke-width="1.5" />
                        </g>
                        <path ref={pathRef1} d="M9.5 10.5C331 10.5 905.238 35.5 917 178.5C928.762 321.5 669 368.5 492 377.5C350.4 384.7 301 377.5 301 377.5" stroke="url(#paint1_linear_2055_971)" stroke-width="1.5" />
                        <path ref={pathRef2} d="M362.5 21.0005C362.5 21.0005 513 29.0005 630.5 48.5005" stroke="url(#paint2_linear_2055_971)" stroke-width="3" />
                        <defs>
                            <filter id="filter0_f_2055_971" x="0.5" y="0.75" width="926.636" height="389.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_2055_971" />
                            </filter>
                            <linearGradient id="paint0_linear_2055_971" x1="558.5" y1="11" x2="313" y2="401" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#80DBB4" />
                                <stop offset="1" stop-color="#01111F" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2055_971" x1="539" y1="48" x2="324" y2="381" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#004986" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2055_971" x1="362.296" y1="23.5365" x2="630.77" y2="45.1379" gradientUnits="userSpaceOnUse">
                                <stop offset="0.000924955" stop-color="#004986" stop-opacity="0" />
                                <stop offset="0.575" stop-color="#80DBB4" />
                                <stop offset="1" stop-color="#004986" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>


                    <div className="text-box box-1" ref={box1}>
                        <h5>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                            </svg>
                            {props.heading1}
                        </h5>
                        <p>{props.para1}</p>
                    </div>
                    <div className="text-box box-2" ref={box2}>
                        <h5>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                            </svg>
                            {props.heading2}
                        </h5>
                        <p>{props.para2}</p>
                    </div>
                    <div className="text-box box-3" ref={box3}>
                        <h5>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                            </svg>
                            {props.heading3}
                        </h5>
                        <p>{props.para3}</p>
                    </div>


                    <img src={Dotsimage} alt="image" className="absolute top-[8px] w-[75%] left-0 hidden lg:block" />
                </div>
            </div>
        </section>

    );
};

export default Drawsvg;
