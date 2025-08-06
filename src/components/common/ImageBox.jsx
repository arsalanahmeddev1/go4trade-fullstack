import React from 'react'

const ImageBox = (props) => {
    return (
        <div className={`key-box join-box ${props.className}`}>
            {(props.img) ? (
                <div className={`image image-group mb-4 max-w-full ${props.ImageParentClass}`}>
                    {props.img.endsWith('.mp4') ? (
                        <video
                            src={props.img}
                            autoPlay
                            muted
                            playsInline
                            loop
                            className={props.fullImage ? 'w-full' : null}
                        />
                    ) : (
                        <img
                            src={props.img}
                            alt="image"
                            className={props.fullImage ? 'w-full' : null}
                        />
                    )}
                    <div className={`dots ${(props.hideDots) ? 'hidden' : null}`}>
                        <span className={props.dotsClass}></span>
                        <span className={props.dotsClass}></span>
                        <span className={props.dotsClass}></span>
                    </div>
                </div>
            ) : null}

            <div className="text">
                <h6 className={`text-[#F8F8F8] text-[18px] md:text-[22px] font-medium mb-4 ${props.headingClass}`} dangerouslySetInnerHTML={{ __html: props.heading }}></h6>
                {(props.para) ? (<p className='text-[#CCCCCC] text-[18px] font-light'>{props.para}</p>) : null}
            </div>
        </div>
    )
}

export default ImageBox