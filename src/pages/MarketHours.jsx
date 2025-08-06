import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { marketHolidays, marketHours, proTips } from '../utils/statics'
import { ProTip1, TradingHours } from '../assets'
import ImageBox from '../components/common/ImageBox'

const MarketHours = () => {
    const TabBtns = ['Market Trading Hours', 'Market Holidays']
    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);
    useEffect(() => {
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }
    }, [activeIndex])


    return (
        <>
            <section className='market-hours pt-[12rem]' ref={container}>
                <div className="container">
                    <SectionHeading heading="Market Trading Hours & Holidays" />


                    <div className="package-navs max-w-[523px] w-full mx-auto mb-20 flex overflow-x-auto">
                        <ul className='flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full'>
                            {TabBtns.map((item, index) => (
                                <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 whitespace-nowrap transition ${activeIndex === index
                                    ? 'active'
                                    : ''
                                    }`}>{item}</button></li>
                            ))}
                            <span ref={span} className='bg-border'></span>
                        </ul>
                    </div>

                    <div className="content">
                        <div className={(activeIndex == 0) ? null : 'hidden'}>
                            <h6 className='text-[#FCFCFC] text-[32px] font-medium mb-9'>Market Trading Hours:</h6>
                            <p className='text-[#FCFCFC] text-[16px] md:text-[22px] font-extralight mb-6'>Know when the markets move, and when they rest.</p>
                            <p className='text-[#FCFCFC] text-[16px] md:text-[22px] font-extralight mb-9'>Understanding market hours and public holidays helps you plan trades smarter, avoid surprises, and catch the most active price action. <br /><br />

                                Scroll to the end for pro tips. </p>

                            <div className="table-parent-box border-1 border-[#002E55] rounded-[12px] overflow-x-auto">
                                <table className='w-full min-w-[700px]'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Market </th>
                                            <th scope='col'>Opening Hours (GMT) </th>
                                            <th scope='col'>Notes </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketHours.map((item, index) => (
                                            <tr key={index}>
                                                <th scope='row'> <span style={{ backgroundColor: item.color }}></span> {item.market}</th>
                                                <td>{item.openingHours}</td>
                                                <td>{item.notes}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                            <p className='text-[#FCFCFC] font-medium text-[16px] md:text-[20px] text-center mt-9'>Forex Market Sessions</p>
                            <p className='text-[#FCFCFC] font-extralight text-[16px] md:text-[20px] text-center mt-6'>GMT</p>

                            <img src={TradingHours} alt="image" className='mx-auto w-full' />

                            <p className='text-[#FCFCFC] text-[16px] md:text-[22px] font-extralight mt-7'><strong>Peak hours:</strong> London–New York overlap (1:00 PM–5:00 PM GMT) <br />
                                This is where liquidity and volatility are highest, perfect for day traders. </p>
                        </div>
                        <div className={(activeIndex == 1) ? null : 'hidden'}>
                            <h6 className='text-[#FCFCFC] text-[25px] md:text-[32px] font-medium mb-9'>Global Market Holidays:</h6>
                            <p className='text-[#FCFCFC] text-[16px] md:text-[22px] font-extralight mb-9'>Markets may close or have low liquidity during holidays. Here are some key ones to watch out for: <br /><br />

                                Scroll to the end for pro tips. </p>
                            <div className="table-parent-box border-1 border-[#002E55] rounded-[12px] overflow-x-auto">
                                <table className='w-full min-w-[700px]'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Holiday</th>
                                            <th scope='col'>Affected Markets</th>
                                            <th scope='col'>Month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketHolidays.map((item, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{item.holiday}</th>
                                                <td>{item.affectedMarket}</td>
                                                <td>{item.month}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <p className='text-[#FCFCFC] text-[16px] md:text-[22px] font-extralight mt-7'><strong>Note:</strong><br />
                                On holidays, spreads may widen and price movements may slow down. Avoid trading low-liquidity sessions unless you have a strategy for it. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pro-tips py-[5rem]'>
                <div className="container">
                    <SectionHeading heading="Pro Tips" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 protip-bg max-lg:!bg-none">
                        {proTips.map((item, index) => (
                            <ImageBox
                                key={index}
                                className="text-center no-effect p-6"
                                headingClass="!mb-0 !text-[18px]"
                                ImageParentClass="mx-auto"
                                hideDots={true}
                                img={item.img}
                                heading={item.heading}
                                para={item.para} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default MarketHours