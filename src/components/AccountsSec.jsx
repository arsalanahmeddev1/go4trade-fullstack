import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './common/SectionHeading'
import { GrowthData, packagesData } from '../utils/statics';
import StarSvg from './common/StarSvg';

const AccountsSec = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }
    }, [activeIndex]);


    return (
        <section className='accounts py-[5rem]' ref={container}>
            <div className="container">
                <SectionHeading badge="Go4trades cards" heading="Ways You Could Grow Your <br /> Go4Trades Account" para="The table below shows how your account balance and risk levels change on the Go4Trades Account if you pass <br /> the Challenges, reach a total balance of $400,000 (for example, by combining two $200,000 accounts), and <br /> meet the requirements for the Scaling Plan." />

                <div className="border-1 border-[#004986] rounded-[24px] p-4 max-w-[1140px] mx-auto">

                    <div className="package-navs max-w-[672px] w-full mx-auto mb-9 lg:mb-20 flex overflow-x-auto">
                        <ul className='flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full'>
                            {GrowthData.map((item, index) => (
                                <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[18px] text-[#FFFFFF] font-normal whitespace-nowrap cursor-pointer rounded-full w-full py-3 px-4 transition ${activeIndex === index
                                    ? 'active'
                                    : ''
                                    }`}>{item.buttonName}</button></li>
                            ))}
                            <span ref={span} className='bg-border'></span>
                        </ul>
                    </div>
                    {GrowthData.map((item, index) =>
                        activeIndex === index ? (
                            <div className="flex flex-col lg:flex-row">
                                <div className='flex-1/3 max-lg:mb-16'>
                                    <div className='w-max lg:mx-auto'>
                                        <h5 className='text-[#684BD3] text-[17px] font-light uppercase'>Account Size</h5>
                                        <h6 className='text-[#F8F8F8] text-[30px] md:text-[45px] font-medium'>{item.inital}</h6>
                                    </div>
                                </div>
                                <div className='flex-2/3 relative flex flex-wrap gap-y-6 justify-between rounded-[12px] border-1 border-[#004986] p-6 gradient mr-0 lg:mr-10'>
                                    <div className="account-growth absolute bottom-full bg-[#002E55] py-[9px] px-[15px] rounded-t-[12px] min-w-[212px]">
                                        <p className='text-[#FCFCFC] text-[18px] font-light'> <StarSvg /> Account Growth</p>
                                    </div>
                                    <div>
                                        <p className='text-[#CCCCCC] text-[17px] font-extralight mb-5'>Account Growth</p>
                                        <p className='text-[#F8F8F8] text-[28px] font-medium'>{item.account_growth}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#CCCCCC] text-[17px] font-extralight mb-5'>Max Drawdown (5%)</p>
                                        <p className='text-[#F8F8F8] text-[28px] font-medium'>{item.maxLoss}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#CCCCCC] text-[17px] font-extralight mb-5'>Daily Drawdown (2%)</p>
                                        <p className='text-[#F8F8F8] text-[28px] font-medium'>{item.dailyLoss}</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </section>
    )
}

export default AccountsSec