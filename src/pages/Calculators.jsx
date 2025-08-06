import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { packagesData } from '../utils/statics'
import MinusSvg from '../components/common/MinusSvg'
import PlusSignSvg from '../components/common/PlusSignSvg'
import { BubbleButton } from '../components/common'

const Calculators = () => {
    const calculatorNavButtons = ['Earnings Calculator', 'Profit / Loss Calculator', 'Risk Calculator']

    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);

    // Earnings Calculator State
    const [earningsData, setEarningsData] = useState({
        accountType: 'two_phase',
        accountSize: '10000',
        profitRate: 8
    });

    // Profit/Loss Calculator State
    const [plData, setPlData] = useState({
        accountSize: '10000',
        entryPrice: '1.0000',
        exitPrice: '1.0100',
        lotSize: '1.0'
    });

    // Risk Calculator State
    const [riskData, setRiskData] = useState({
        accountSize: '10000',
        entryPrice: '1.0000',
        exitPrice: '0.9900',
        lotSize: '1.0'
    });

    useEffect(() => {
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }
    }, [activeIndex]);

    // Earnings Calculator Functions
    const calculateEarnings = () => {
        let payout = 0.90; // All account types have 90% payout
        const accountSize = parseFloat(earningsData.accountSize) || 0;
        const expectedProfit = accountSize * (earningsData.profitRate / 100) * payout;
        return expectedProfit;
    };

    const handleEarningsChange = (field, value) => {
        setEarningsData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleProfitRateChange = (increment) => {
        setEarningsData(prev => ({
            ...prev,
            profitRate: Math.max(1, Math.min(20, prev.profitRate + increment))
        }));
    };

    // Profit/Loss Calculator Functions
    const calculateProfitLoss = () => {
        const accountSize = parseFloat(plData.accountSize) || 0;
        const entryPrice = parseFloat(plData.entryPrice) || 0;
        const exitPrice = parseFloat(plData.exitPrice) || 0;
        const lotSize = parseFloat(plData.lotSize) || 0;

        const pipDifference = (exitPrice - entryPrice) * 10000; // for forex majors
        const pipValue = 10; // $10 per lot per pip
        const profitLoss = pipDifference * lotSize * pipValue;
        const profitLossPercent = (profitLoss / accountSize) * 100;
        return { profitLoss, profitLossPercent };
    };

    const handlePLChange = (field, value) => {
        setPlData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Risk Calculator Functions
    const calculateRisk = () => {
        const accountSize = parseFloat(riskData.accountSize) || 0;
        const entryPrice = parseFloat(riskData.entryPrice) || 0;
        const exitPrice = parseFloat(riskData.exitPrice) || 0;
        const lotSize = parseFloat(riskData.lotSize) || 0;

        const pipDifference = Math.abs(entryPrice - exitPrice) * 10000; // for 4-decimal pairs
        const pipValue = 10; // typical forex majors
        const riskPerTrade = pipDifference * lotSize * pipValue;
        const riskPercentage = (riskPerTrade / accountSize) * 100;
        return { riskPerTrade, riskPercentage };
    };

    const handleRiskChange = (field, value) => {
        setRiskData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <>
            <section className='calculators py-[5rem] pt-[12rem]'>
                <div className="container">
                    <SectionHeading heading="Trading Calculators" className="mb-20" />
                </div>
                <div className="calc-bg">
                    <div className="container">
                        <div className="calculator-box max-w-[860px] mx-auto bg-(--base-color) border-1 border-[#002E55] p-8 rounded-[24px]" ref={container}>

                            <div className="package-navs max-w-[830px] w-full mx-auto mb-9 flex overflow-x-auto">
                                <ul className='flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full'>
                                    {calculatorNavButtons.map((item, index) => (
                                        <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 transition whitespace-nowrap ${activeIndex === index
                                            ? 'active'
                                            : ''
                                            }`}>{item}</button></li>
                                    ))}
                                    <span ref={span} className='bg-border'></span>
                                </ul>
                            </div>

                            <div className="content mt-8">

                                <div className={`${(activeIndex == 0) ? null : 'hidden'}`}>
                                    <h6 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[37px] font-medium text-center'>Earnings Calculator</h6>
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-5">
                                        <div>
                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Account</p>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account'
                                                        id='two_phase'
                                                        checked={earningsData.accountType === 'two_phase'}
                                                        onChange={() => handleEarningsChange('accountType', 'two_phase')}
                                                    />
                                                    <label htmlFor="two_phase">Two phase</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account'
                                                        id='one_phase'
                                                        checked={earningsData.accountType === 'one_phase'}
                                                        onChange={() => handleEarningsChange('accountType', 'one_phase')}
                                                    />
                                                    <label htmlFor="one_phase">One phase</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account'
                                                        id='vip'
                                                        checked={earningsData.accountType === 'vip'}
                                                        onChange={() => handleEarningsChange('accountType', 'vip')}
                                                    />
                                                    <label htmlFor="vip">VIP</label>
                                                </div>
                                            </div>

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4 mt-6'>Account Size</p>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account_size'
                                                        id='size_10k'
                                                        checked={earningsData.accountSize === '10000'}
                                                        onChange={() => handleEarningsChange('accountSize', '10000')}
                                                    />
                                                    <label htmlFor="size_10k">$10,000</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account_size'
                                                        id='size_25k'
                                                        checked={earningsData.accountSize === '25000'}
                                                        onChange={() => handleEarningsChange('accountSize', '25000')}
                                                    />
                                                    <label htmlFor="size_25k">$25,000</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account_size'
                                                        id='size_50k'
                                                        checked={earningsData.accountSize === '50000'}
                                                        onChange={() => handleEarningsChange('accountSize', '50000')}
                                                    />
                                                    <label htmlFor="size_50k">$50,000</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        name='account_size'
                                                        id='size_100k'
                                                        checked={earningsData.accountSize === '100000'}
                                                        onChange={() => handleEarningsChange('accountSize', '100000')}
                                                    />
                                                    <label htmlFor="size_100k">$100,000</label>
                                                </div>
                                            </div>

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4 mt-6'>Profit Rate</p>
                                            <input
                                                type="range"
                                                name="profile_rate"
                                                id="profile_rate"
                                                min="1"
                                                max="20"
                                                step="0.1"
                                                value={earningsData.profitRate}
                                                onChange={(e) => handleEarningsChange('profitRate', parseFloat(e.target.value))}
                                            />

                                            <div className="count flex gap-4 items-center mt-4">
                                                <button
                                                    type='button'
                                                    onClick={() => handleProfitRateChange(-0.5)}
                                                    className='border-[#004986] border-1 w-[45px] h-[45px] rounded-full text-[#80DBB4] text-[16px] font-bold flex all-center cursor-pointer'
                                                >
                                                    <MinusSvg />
                                                </button>
                                                <p className='text-[#FCFCFC] text-[22px] font-extralight underline'>{earningsData.profitRate.toFixed(1)}%</p>
                                                <button
                                                    type='button'
                                                    onClick={() => handleProfitRateChange(0.5)}
                                                    className='border-[#004986] border-1 w-[45px] h-[45px] rounded-full text-[#80DBB4] text-[16px] font-bold flex all-center cursor-pointer'
                                                >
                                                    <PlusSignSvg />
                                                </button>
                                            </div>

                                        </div>
                                        <div>
                                            <div className='bg-[#001C34] rounded-[12px] p-6'>
                                                <h6 className='text-[#FCFCFC] text-[28px] font-medium'>Take Home</h6>
                                                <p className='text-[#FCFCFC] text-[19px] font-extralight'>(On up to 90% Profit Split)</p>

                                                <h6 className='text-[30px] md:text-[40px] lg:text-[54px] text-[#FCFCFC] font-medium mb-10'>
                                                    ${calculateEarnings().toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                    <span className='text-[#80DBB4] text-[20px] font-normal'>/month</span>
                                                </h6>

                                                <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white !font-normal bg-blue-gradient hover:opacity-60 transition inline-block !text-[16px] !py-2.5'>Get Funded!</BubbleButton>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${(activeIndex == 1) ? null : 'hidden'}`}>
                                    <h6 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[37px] font-medium text-center'>Profit / Loss Calculator</h6>
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-5">
                                        <div>
                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Account Size ($)</p>
                                            <input
                                                type="number"
                                                value={plData.accountSize}
                                                onChange={(e) => handlePLChange('accountSize', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter account size"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Entry Price</p>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                value={plData.entryPrice}
                                                onChange={(e) => handlePLChange('entryPrice', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter entry price"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Exit Price</p>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                value={plData.exitPrice}
                                                onChange={(e) => handlePLChange('exitPrice', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter exit price"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Lot Size</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={plData.lotSize}
                                                onChange={(e) => handlePLChange('lotSize', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4]"
                                                placeholder="Enter lot size"
                                            />

                                        </div>
                                        <div>
                                            <div className='bg-[#001C34] rounded-[12px] p-6'>
                                                <h6 className='text-[#FCFCFC] text-[28px] font-medium'>P/L Result</h6>
                                                <p className='text-[#FCFCFC] text-[19px] font-extralight'>(Forex majors calculation)</p>

                                                {(() => {
                                                    const result = calculateProfitLoss();
                                                    const isProfit = result.profitLoss >= 0;
                                                    return (
                                                        <>
                                                            <h6 className={`text-[30px] md:text-[40px] lg:text-[54px] font-medium mb-6 ${isProfit ? 'text-[#80DBB4]' : 'text-[#BE1320]'}`}>
                                                                {isProfit ? '+' : ''}${Math.abs(result.profitLoss).toFixed(2)}
                                                            </h6>

                                                            <div className="mb-6">
                                                                <p className={`text-[20px] font-medium mb-2 ${isProfit ? 'text-[#80DBB4]' : 'text-[#BE1320]'}`}>
                                                                    {isProfit ? '+' : ''}{result.profitLossPercent.toFixed(2)}% of account
                                                                </p>
                                                                <p className="text-[#CCCCCC] text-[16px]">
                                                                    Pip difference: {((parseFloat(plData.exitPrice) - parseFloat(plData.entryPrice)) * 10000).toFixed(1)} pips
                                                                </p>
                                                            </div>
                                                        </>
                                                    );
                                                })()}

                                                <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white !font-normal bg-blue-gradient hover:opacity-60 transition inline-block !text-[16px] !py-2.5'>Get Funded!</BubbleButton>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${(activeIndex == 2) ? null : 'hidden'}`}>
                                    <h6 className='text-[#FCFCFC] text-[25px] md:text-[30px] lg:text-[37px] font-medium text-center'>Risk Calculator</h6>
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-5">
                                        <div>
                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Account Size ($)</p>
                                            <input
                                                type="number"
                                                value={riskData.accountSize}
                                                onChange={(e) => handleRiskChange('accountSize', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter account size"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Entry Price</p>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                value={riskData.entryPrice}
                                                onChange={(e) => handleRiskChange('entryPrice', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter entry price"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Stop Loss Price</p>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                value={riskData.exitPrice}
                                                onChange={(e) => handleRiskChange('exitPrice', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4] mb-6"
                                                placeholder="Enter stop loss price"
                                            />

                                            <p className='text-[#FCFCFC] text-[20px] font-extralight mb-4'>Lot Size</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={riskData.lotSize}
                                                onChange={(e) => handleRiskChange('lotSize', e.target.value)}
                                                className="w-full bg-[#001C34] border border-[#004986] rounded-[8px] px-4 py-3 text-[#FCFCFC] text-[18px] focus:outline-none focus:border-[#80DBB4]"
                                                placeholder="Enter lot size"
                                            />

                                        </div>
                                        <div>
                                            <div className='bg-[#001C34] rounded-[12px] p-6'>
                                                <h6 className='text-[#FCFCFC] text-[28px] font-medium'>Risk Amount</h6>
                                                <p className='text-[#FCFCFC] text-[19px] font-extralight'>(Per trade risk calculation)</p>

                                                {(() => {
                                                    const result = calculateRisk();
                                                    return (
                                                        <>
                                                            <h6 className='text-[30px] md:text-[40px] lg:text-[54px] text-[#BE1320] font-medium mb-6'>
                                                                ${result.riskPerTrade.toFixed(2)}
                                                            </h6>

                                                            <div className="mb-6">
                                                                <p className='text-[#BE1320] text-[20px] font-medium mb-2'>
                                                                    {result.riskPercentage.toFixed(2)}% of account
                                                                </p>
                                                                <p className="text-[#CCCCCC] text-[16px]">
                                                                    Pip difference: {(Math.abs(parseFloat(riskData.entryPrice) - parseFloat(riskData.exitPrice)) * 10000).toFixed(1)} pips
                                                                </p>
                                                                {result.riskPercentage > 2 && (
                                                                    <p className="text-[#BE1320] text-[14px] mt-2">⚠️ High risk trade</p>
                                                                )}
                                                            </div>
                                                        </>
                                                    );
                                                })()}

                                                <BubbleButton Tag='a' target='_blank' href='https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw' className='my-btn text-white !font-normal bg-blue-gradient hover:opacity-60 transition inline-block !text-[16px] !py-2.5'>Get Funded!</BubbleButton>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculators