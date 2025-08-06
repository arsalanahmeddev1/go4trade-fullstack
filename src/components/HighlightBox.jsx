import React from 'react'
import { useRef } from 'react';
import glow_image from '../assets/images/glow-image.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(useGSAP, CustomEase);


const HighlightBox = () => {
    const container = useRef();

    const pulse = () => {
        useGSAP(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: CustomEase.create("custom", "M0,0 C0.6,0.6,0,1,1,1"),
                    // ease: CustomEase.create("custom", "M0,0 C0.064,0 0.264,0.136 0.37,0.353 0.44,0.498 0.474,0.719 0.514,0.811 0.604,1.021 0.872,1 1,1 "),
                    // ease: CustomEase.create("custom", "M0,0 C0.07,0 0.223,0.181 0.349,0.37 0.417,0.472 0.473,0.692 0.508,0.772 0.598,0.983 0.872,1 1,1 "),
                    // ease: CustomEase.create("custom", "M0,0 C0.272,0 0.321,0.536 0.321,0.536 0.321,0.536 0.323,0.77 0.441,0.88 0.588,1 0.859,1 1,1 "),
                },
                repeat: -1,
            });
            tl.to('.glow-image span:nth-child(4)', {
                width: '280%',
                height: '280%',

                opacity: 0,
                duration: 3,
            }, 0);
            tl.to('.glow-image span:nth-child(3)', {
                width: '210%',
                height: '210%',
                opacity: 0,
                duration: 3,
            }, 0);
            tl.to('.glow-image span:nth-child(2)', {
                width: '150%',
                height: '150%',
                opacity: 0,
                duration: 3,
            }, 0);


        }, { scope: container });
    }

    pulse();




    return (
        <div ref={container} className='grid max-w-[984px] md:h-[600px] mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-2 highlighs-box'>
            <div className='m-glow-image md:hidden'>
                <div className="glow-image relative w-max h-max top-1/2 left-1/2 -translate-1/2">
                    <img src={glow_image} alt="image" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="glow-image hidden md:block absolute top-1/2 left-1/2 -translate-1/2">
                <img src={glow_image} alt="image" />
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="text flex md:justify-center items-center item-1 mb-4">
                <div className='md:max-w-[193px] md:text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize mb-3'>Risk-Free Trading</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Trade with simulated capital and keep real rewards.</p>
                </div>
            </div>
            <div className="text flex md:justify-center items-center item-2 mb-4">
                <div className='md:max-w-[193px] md:text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize mb-3'>Weekly Payouts</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Get paid fast, no waiting</p>
                </div>
            </div>
            <div className="text flex md:justify-center items-center item-3 mb-4">
                <div className='md:max-w-[193px] md:text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize mb-3'>Keep up to 90% of Your Wins</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Your Wins, your money</p>
                </div>
            </div>
            <div className="text flex md:justify-center items-center item-4 mb-4">
                <div className='md:max-w-[193px] md:text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize mb-3'>KHDA-Certified Education</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Learn from the best.</p>
                </div>
            </div>


        </div>
    )
}

export default HighlightBox