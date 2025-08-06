import React, { useState } from 'react'
import { ChallengeTable } from '../utils/statics'
import Infosvg from './common/Infosvg'
import TickSvg from './common/TickSvg';

const ChallengesTable = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleBoxClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className='max-w-[830px] mx-auto mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div 
                    className={`challange-box w-full cursor-pointer transition-all duration-300 ${ (activeIndex == 0) ? 'active' : null}`}
                    onClick={() => handleBoxClick(0)}
                >
                    <div className='border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F] hover:border-[#684BD3] transition-all duration-300'>
                        <h6 className='text-white text-[18px] font-medium mb-2'>One-Phase Challenge </h6>
                        <p className='text-[#CCCCCC] text-[14px] font-extralight mb-1.5'><TickSvg /> Perfect for beginners </p>

                    </div>
                </div>
                <div 
                    className={`challange-box w-full cursor-pointer transition-all duration-300 ${ (activeIndex == 1) ? 'active' : null}`}
                    onClick={() => handleBoxClick(1)}
                >
                    <div className='border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F] hover:border-[#684BD3] transition-all duration-300'>
                        <h6 className='text-white text-[18px] font-medium mb-2'>Two-Phase Challenge </h6>
                        <p className='text-[#CCCCCC] text-[14px] font-extralight mb-1.5'><TickSvg /> Balanced and structured </p>

                    </div>
                </div>
                <div 
                    className={`challange-box w-full cursor-pointer transition-all duration-300 ${ (activeIndex == 2) ? 'active' : null}`}
                    onClick={() => handleBoxClick(2)}
                >
                    <div className='border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F] hover:border-[#684BD3] transition-all duration-300'>
                        <h6 className='text-white text-[18px] font-medium mb-2'>Instant Funding</h6>
                        <p className='text-[#CCCCCC] text-[14px] font-extralight mb-1.5'><TickSvg /> For quick, confident traders </p>

                    </div>
                </div>
            </div>


            <div className="flex justify-center gap-3.5 items-center mb-8">
                <p className='text-[#FFFFFF] text-[16px] font-extralight'>Select Preference</p>
                {ChallengeTable.map((item, index) => (
                    <div key={index} className="form-group flex items-center max-sm:gap-1 gap-2 custom-radio" onClick={() => setActiveIndex(index)}>
                        <input type="radio" name="step" id={item.ButtonName} value={item.ButtonName} checked={activeIndex === index} />
                        <label htmlFor={item.ButtonName} className='text-[#FFFFFF] text-[16px] md:text-[18px] font-extralight cursor-pointer'>{item.ButtonName}</label>
                    </div>
                ))}
            </div>

            {ChallengeTable.map((item, index) =>
                activeIndex === index ? (
                    <>
                        <div key={index} className="table-parent p-[2px] rounded-[12px] overflow-x-auto overflow-y-visible relative mb-10">
                            <table className="table w-full border bg-(--base-color) rounded-[12px] overflow-hidden min-w-[1140px]">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        {item.TableHeadContent.map((item, index) => (
                                            <th key={index} scope="col">
                                                <h4>{item}</h4>
                                                <a target='_blank' href="https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE 1 ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkb zIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_ SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw" className='table-btn'>Buy Challenge</a>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.TableContent.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.main} <Infosvg /></th>
                                            {item.data.map((dataItem, dataIndex) => (
                                                <td key={dataIndex}>{dataItem}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className='text-[#FCFCFC] text-[17px] md:text-[22px] font-extralight mb-6'>Each challenge tests your ability to manage risk, stay disciplined, and hit realistic targets. </p>
                        <ul className='flex items-center flex-wrap gap-x-10 gap-y-5 p-0'>
                            {item.Includes.map((item, index) => (
                                <li key={index}><strong>{item.key}</strong> {item.value}</li>
                            ))}
                        </ul>
                    </>
                ) : null
            )}



        </>
    )
}

export default ChallengesTable