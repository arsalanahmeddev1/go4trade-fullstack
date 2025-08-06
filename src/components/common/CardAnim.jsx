import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Card1, Card2, Card3, Card4 } from '../../assets';

gsap.registerPlugin(useGSAP);

const CardAnim = () => {

    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
        });

        gsap.set('.card-1', { rotateY: "45deg", left: 0, translateZ: "-90px" });
        gsap.set('.card-2', { translateZ: "90px", translateX: "-50%", left: "50%", zIndex: 2, });
        gsap.set('.card-3', { rotateY: "-45deg", right: 0, translateZ: "-90px" });

        // first move
        tl.to('.card-3', {
            zIndex: 2,
            rotateY: 0,
            translateZ: "90px",
            translateX: "-50%",
            left: "50%",
            right: 0,
            duration: 2,
            delay: 1,
        }, 'one');

        tl.to('.card-1', {
            rotateY: "-45deg",
            right: 0,
            left: "unset",
            duration: 2,
            delay: 1,
        }, 'one');


        tl.to('.card-2', {
            rotateY: "45deg",
            translateZ: "-90px",
            translateX: "0",
            left: 0,
            duration: 2,
            zIndex: 0,
            delay: 1,
        }, 'one');



       // second move
        tl.to('.card-3', {
            zIndex: -1,
            rotateY: "45deg",
            translateZ: "-90px",
            translateX: 0,
            left: 0,
            right: "unset",
            duration: 2,
            delay: 1,
        }, 'two');

        tl.to('.card-1', {
            rotateY: 0,
            right: "50%",
            translateZ: "90px",
            translateX: "50%",
            duration: 2,
            zIndex: 20,
            delay: 1,
        }, 'two');


        tl.to('.card-2', {
            rotateY: "-45deg",
            translateZ: "-90px",
            translateX: "0",
            right: 0,
            left: "unset",
            duration: 2,
            zIndex: 0,
            delay: 1,
        }, 'two');

        // third move
        tl.to('.card-3', {
            zIndex: 0,
            rotateY: "-45deg",
            translateZ: "-90px",
            translateX: "-100%",
            left: "100%",
            right: 0,
            duration: 2,
            delay: 1,
        }, 'three');

        tl.to('.card-1', {
            rotateY: "45deg",
            right: "100%",
            translateZ: "-90px",
            translateX: "100%",
            duration: 2,
            zIndex: 0,
            delay: 1,
        }, 'three');


        tl.to('.card-2', {
            rotateY: 0,
            translateZ: "90px",
            translateX: "50%",
            right: "50%",
            left: "unset",
            duration: 2,
            zIndex: 20,
            delay: 1,
        }, 'three');

    }, { scope: container });


    return (
        <div className="card-holder perspective-[1000px] h-[22vw] perspective-origin-center flex mt-[90px] max-w-[991px] mx-auto relative" ref={container}>
            <div className="card-1 card w-[47%] absolute">
                <div className="move">
                    <img src={Card1} alt="image" className='max-w-[unset] w-full rounded-[17px]' />
                </div>
            </div>
            <div className="card-2 card w-[47%] absolute translate-z-[90px]">
                <div className="move">
                    <img src={Card2} alt="image" className='max-w-[unset] w-full rounded-[17px]' />
                </div>
            </div>
            <div className="card-3 card w-[47%] absolute rotate-y-[-45deg] translate-z-[-90px]">
                <div className="move">
                    <img src={Card3} alt="image" className='max-w-[unset] w-full rounded-[17px]' />
                </div>
            </div>
        </div>
    )
}

export default CardAnim