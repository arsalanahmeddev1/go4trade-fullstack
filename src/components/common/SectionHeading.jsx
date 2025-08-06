import React from 'react';
import Badge from './Badge';

const SectionHeading = (props) => {
    return (
        <div className={`heading text-center mb-15 ${props.className}`}>
            { (props.badge) ? ( <Badge className={`mx-auto mb-4 ${props.badge_class}`}>{props.badge}</Badge> ) : '' }
            { (props.heading) ? (<h2 className={props.headingCLass} dangerouslySetInnerHTML={{ __html: props.heading }} /> ) : '' }
            { (props.para) ? (<p dangerouslySetInnerHTML={{ __html: props.para }} className={`text-[#CCCCCC] text-[20px] font-extralight ${props.paraClass}`} />) : ''}
        </div>
    )
}

export default SectionHeading;