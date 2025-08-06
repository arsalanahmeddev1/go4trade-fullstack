import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import RulesBox from '../components/common/RulesBox'
import { generalRules } from '../utils/statics';
import AnimatedBorder from '../components/common/AnimatedBorder';
import MagneticEffect from '../components/common/MagneticEffect';

const GeneralRules = () => {
    
    MagneticEffect(0.2);

    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);

    useEffect(() => {

        MagneticEffect(0.2);
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }

    }, [activeIndex])

    return (
        <section className='general-rules pt-[12rem]' ref={container}>
            <div className="container">
                <SectionHeading heading="General Rules" />

                <div className="package-navs max-w-[663px] w-full mx-auto mb-20">
                    <ul className='flex items-center justify-between relative z-[2] border-1 border-[#004986] rounded-full'>
                        {generalRules.map((item, index) => (
                            <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[12px] sm:text-[16px] lg:text-[22px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-2 md:px-4 transition ${activeIndex === index
                                ? 'active'
                                : ''
                                }`}>{item.buttonName}</button></li>
                        ))}
                        <span ref={span} className='bg-border'></span>
                    </ul>
                </div>

                {generalRules.map((item, index) =>
                    activeIndex === index ? (
                        <div key={index} id={index} className='max-w-[1140px] mx-auto w-full'>
                            {item.boxes.map((rules, rulesIndex) => (
                                <AnimatedBorder key={rulesIndex} padding="mb-5 !rounded-[32px]">
                                    <RulesBox heading={rules.heading} para={rules.para} img={rules.img} />
                                </AnimatedBorder>
                            ))}
                        </div>
                    ) : null
                )}

            </div>
        </section>
    )
}

export default GeneralRules