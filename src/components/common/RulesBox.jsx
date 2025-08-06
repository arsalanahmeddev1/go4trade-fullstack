import React, { useEffect, useRef, useState } from 'react'
import ArrowDown from './ArrowDown';

const RulesBox = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [Height, setHeight] = useState(null);
    const paraRef = useRef(null);

    useEffect(() => {
        // Measure height after rendering
        if (paraRef.current) {
            setHeight(paraRef.current.scrollHeight);
            const maxAllowedHeight = 190; // Adjust height in pixels
            if (paraRef.current.scrollHeight > maxAllowedHeight) {
                setShowToggle(true);
            }
        }
    }, [props.para]);

    const toggleContent = () => {
        setIsExpanded(prev => !prev);
    };

    return (

        <div className="rules-box flex py-10 px-7 max-w-[1140px] flex-col md:flex-row mx-auto w-full items-start gap-6 border-1 border-[#004986] bg-(--base-color) rounded-[32px]">
            <div className='text md:flex-2/3'>
                <h2 className='text-[#FCFCFC] text-[42px] font-medium mb-6 leading-[100%]'>{props.heading}</h2>
                <p ref={paraRef} style={{
                    maxHeight: isExpanded ? Height + "px" : '190px'
                }}
                    className={`text-[#FCFCFC] text-[16px] lg:text-[18px] font-extralight relative transition-all duration-700 overflow-hidden`} dangerouslySetInnerHTML={{ __html: props.para }} />
                {showToggle && (
                    <button
                        onClick={toggleContent}
                        className="flex justify-center mt-4 items-center text-[#FCFCFC] gap-2 cursor-pointer"
                    >
                        {isExpanded ? 'Read less' : 'Read more'} <ArrowDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
            <div className='image md:flex-1/3 magnet-box'>
                <img src={props.img} alt={props.heading} className='magnet-element'/>
            </div>
        </div>
    )
}

export default RulesBox