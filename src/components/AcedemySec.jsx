import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { Badge } from "./common";
import acedemy1 from '../assets/images/Frame 1000004825.png'
import acedemy2 from '../assets/images/Group 1000004816.png'
import acedemy3 from '../assets/images/Group 1000004817.png'
import acedemy4 from '../assets/images/Group 1000004818.png'
import acedemy5 from '../assets/images/Frame 1000004817.png'
import acedemy6 from '../assets/images/acedemy1.png'
import acedemy7 from '../assets/images/acedemy2.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import SectionHeading from "./common/SectionHeading";
import AnimatedBorder from "./common/AnimatedBorder";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const AcedemySec = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const academyBoxes = gsap.utils.toArray('.acedemy-box');

        if (typeof window === "undefined") return;

        let ctx = gsap.context(() => {


            academyBoxes.forEach((box, boxIndex) => {

                const paths = box.querySelectorAll('svg path');

                paths.forEach((path, pathIndex) => {
                    const animation = gsap.from(path, {
                        drawSVG: "0%",
                        duration: 4,
                        ease: "power2.out",
                        paused: true // Start paused
                    });

                    ScrollTrigger.create({
                        trigger: box,
                        start: "top 80%",
                        onEnter: () => animation.restart(),
                        onEnterBack: () => animation.restart(),
                        // markers: true, // For debugging
                        id: `path-${boxIndex}-${pathIndex}`
                    });
                });
            });




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
        <section className='acedemy pb-[30px] -mt-[33%] relative z-10'>
            <div className="container">

                <SectionHeading badge="Academy" heading="Do more with your spare time" para="We’re one of the few platforms licensed by KHDA in Dubai, ensuring top-tier educational resources." />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2" ref={containerRef}>

                    <AnimatedBorder>
                        <Link to="/academy">
                            <div className="acedemy-box">
                                <div className="image-box my-[30px] aspect-[1/0.5] relative all-center">
                                    <img src={acedemy5} className='main w-[33%]' alt="image" />
                                    <img src={acedemy6} className='absolute top-0 right-[23%] w-[11%] z-[2]' alt="image" />
                                    <img src={acedemy7} className='absolute top-[14%] left-[11%] w-[11%] z-[2]' alt="image" />

                                    <svg className='absolute top-[29%] left-[20%] w-[14%] h-auto' width="91" height="65" viewBox="0 0 91 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M90.748 63.6825H41.8413C36.1873 63.6825 31.6039 59.0991 31.6039 53.4451V24.1866C31.6039 20.4933 29.6146 17.0863 26.3982 15.271L0.317469 0.551758" stroke="#048CFF" strokeWidth="0.853119" />
                                    </svg>

                                    <svg className='absolute top-[16%] right-[28%] w-[6%] h-auto' width="39" height="81" viewBox="0 0 39 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 80H27.7626C33.4166 80 38 75.4166 38 69.7626V0" stroke="#048CFF" strokeWidth="0.853119" />
                                    </svg>


                                </div>
                                <div className="text">
                                    <p><strong className='font-bold'>KHDA Certificate,</strong> Master the Go4Trades challenges with our KHDA-approved Trading Courses.</p>
                                </div>
                            </div>
                        </Link>
                    </AnimatedBorder>

                    <AnimatedBorder>
                        <a target="_blank" href="https://my.go4trades.com/register?_gl=1*15jf4jc*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIyMjUwMjAkbzYkZzEkdDE3NTIyMjUwMjMkajU3JGwwJGgw*_ga_SS36ZZJDJK*czE3NTIyMjUwMjAkbzYkZzEkdDE3NTIyMjUwMjMkajU3JGwwJGg5Njc5ODk1Nw">
                            <div className="acedemy-box">
                                <div className="image-box my-[30px] aspect-[1/0.5] relative all-center">
                                    <img src={acedemy1} className='main w-[33%]' alt="image" />
                                    <img src={acedemy2} className='absolute top-0 right-[18%] w-[11%] z-[2]' alt="image" />
                                    <img src={acedemy3} className='absolute top-0 left-[16%] w-[11%] z-[2]' alt="image" />
                                    <img src={acedemy4} className='absolute bottom-[17%] left-[12%] w-[11%] z-[2]' alt="image" />

                                    <svg className='absolute top-[16%] right-[23%] w-[16%] h-auto' viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.921875 80H70.6845C76.3384 80 80.9219 75.4166 80.9219 69.7626V0" stroke="#048CFF" strokeWidth="0.853119" />
                                    </svg>


                                    <svg className='absolute top-[19%] left-[24%] w-[15%] h-auto' viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M75.9902 64H37.1755C31.5216 64 26.9381 59.4165 26.9381 53.7626V24.0435C26.9381 20.6515 25.258 17.4798 22.452 15.5742L0.990233 1" stroke="#048CFF" strokeWidth="0.853119" />
                                    </svg>

                                    <svg className='absolute bottom-[28%] left-[22%] w-[23%] h-auto' viewBox="0 0 135 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M133.912 0V10.7626C133.912 16.4165 129.329 21 123.675 21H0.912109" stroke="#048CFF" strokeWidth="0.853119" />
                                    </svg>


                                </div>
                                <div className="text">
                                    <p>Experience seamless, advanced charting powered by <strong className="font-bold">TradingView,</strong> the platform trusted by top traders worldwide.</p>
                                </div>
                            </div>
                        </a>
                    </AnimatedBorder>
                </div>

            </div>
        </section>
    )
}

export default AcedemySec