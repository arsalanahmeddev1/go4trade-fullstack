import React from 'react'
import { WhatsAppIcon } from '../../assets'

const JoinBox = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <div className="join-box border-[#004986] base-color border-1 rounded-[12px] p-[30px]">
                <div className="image-group w-[50%] lg:w-[30%] mx-auto mb-[30px]">
                    <img src={props.img} alt="image" className='w-full' />
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="text text-center">
                    <h6 className='text-[#FCFCFC] text-[19px] md:text-[24px] lg:text-[28px] font-semibold mb-2'>{props.heading}</h6>
                    <p className='text-[#CCCCCC] font-extralight text-[15px] md:text-[18px] lg:text-[22px] mb-0'>{props.para}</p>
                </div>
            </div>
        </a>
    )
}

export default JoinBox