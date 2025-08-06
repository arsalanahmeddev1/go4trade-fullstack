import React from 'react'
import { ChallengesImg1 } from '../../assets'

const ChallengesImageBox = (props) => {
  return (
    <div className={`challenge-imagebox ${props.className}`}>
        <div className={`image ${props.imageParentClass}`}>
            { (props.img) ? <img src={props.img} alt="image" className={`${props.imgCLass}`} /> : null} 
        </div>
        <div className={`text ${props.textBoxClass}`}>
            <p className='text-[12px] text-[#80DBB4] font-extralight mb-2 uppercase'>{props.subHeading}</p>
            <h6 className='text-[#F8F8F8] text-[22px] font-medium mb-2'>{props.heading}</h6>
            <p className='text-[#F2F2F2] text-[18px] font-extralight'>{props.para}</p>
        </div>
    </div>
  )
}

export default ChallengesImageBox