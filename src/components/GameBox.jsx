import React, { useEffect, useRef } from 'react'
import { GameBoxImg } from '../assets';
import { gsap } from "gsap";
import SectionHeading from './common/SectionHeading';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import MagneticEffect from './common/MagneticEffect';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


const GameBox = () => {

    MagneticEffect(0.2);

    const Box = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            const paths = Box.current.querySelectorAll('path');

            const master = gsap.timeline({ paused: true })

            ScrollTrigger.create({
                trigger: Box.current,
                start: "top 50%",
                onEnter: () => master.restart(),
                onEnterBack: () => master.restart(),
            });

            paths.forEach((path, pathIndex) => {
                var timing = (pathIndex !== 2 && pathIndex !== 5) ? "one" : 0.5;

                master.from(path, {
                    drawSVG: "0%",
                    duration: 8,
                    ease: "power2.out",
                }, timing);

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
        <section className='game-box py-[5rem]' ref={containerRef}>
            <div className="container">

                <div ref={Box} className="box max-w-[560px] w-full rounded-[42px] bg-[#01111F] border-1 border-[#008AFF] px-9 py-10 mx-auto">
                    <div className="magnet-box">
                        <img src={GameBoxImg} alt="image" className='ms-auto mb-6 w-1/2 md:w-auto magnet-element' />
                    </div>
                    <div className="text">
                        <SectionHeading className="text-start !mb-0" badge_class="!mx-0" badge="Step 1" heading="Learn the Game" para="New to trading? We’ve got you <br /><br/ >

                        We provide the tools, resources, and support to help you learn fast and trade smart. " />
                    </div>

                    <svg width="543" height="388" className='absolute right-full top-1/2 -translate-y-1/2' viewBox="0 0 543 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M542.935 139H338.313L233.149 74.2347H88.8537L28.9346 1" stroke="url(#paint0_linear_2084_2594)" />
                        <path d="M542.935 197.234L338.313 197.234L233.149 298.499H88.8537L0.353699 386.999" stroke="url(#paint1_linear_2084_2594)" />
                        <path d="M304.935 228.999L181.435 154.999" stroke="url(#paint2_linear_2084_2594)" />
                        <defs>
                            <linearGradient id="paint0_linear_2084_2594" x1="542.935" y1="70" x2="28.9346" y2="70" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2084_2594" x1="542.935" y1="292.416" x2="22.5" y2="292" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2084_2594" x1="548" y1="192" x2="97" y2="192" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                        </defs>
                    </svg>






                    <svg width="543" height="388" className='absolute left-full top-1/2 -translate-y-1/2' viewBox="0 0 543 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 139H204.622L309.786 74.2347H454.081L514 1" stroke="url(#paint0_linear_2084_2595)" />
                        <path d="M0 197.234L204.622 197.234L309.786 298.499H454.081L542.581 386.999" stroke="url(#paint1_linear_2084_2595)" />
                        <path d="M238 228.999L361.5 154.999" stroke="url(#paint2_linear_2084_2595)" />
                        <defs>
                            <linearGradient id="paint0_linear_2084_2595" x1="0" y1="70" x2="514" y2="70" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2084_2595" x1="-7.33039e-06" y1="292.416" x2="520.435" y2="292" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2084_2595" x1="-5.06543" y1="192" x2="445.935" y2="192" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#008AFF" />
                                <stop offset="1" stop-color="#01111F" />
                            </linearGradient>
                        </defs>
                    </svg>


                </div>

            </div>
        </section>
    )
}

export default GameBox