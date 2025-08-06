import { useEffect, useMemo, useState } from "react";
import { EarthImg, EarthVideo } from '../assets';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";
import { EarthParticle } from "../assets";

const EarthAnim = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Your downloaded options from TS Particles website

    const particlesOptions = EarthParticle;

    return (
        <div className="container relative max-w-max w-full !px-0">
            {init ? (
                <Particles
                    id="tsparticles3"
                    init={initParticlesEngine}
                    options={particlesOptions}
                    className="absolute w-full h-[62%] top-[31%] left-0 -translate-y-1/2 z-10"
                />
            ) : ''}

            <div className="image relative flex items-center justify-center">
                {/* <video src={EarthVid} className="mx-auto" loop autoPlay muted playsInline></video> */}
                {/* <img src={EarthImg} className='mx-auto' alt="image" /> */}
                <video src={EarthVideo} className="mx-auto w-[65%]" autoPlay playsInline muted loop></video>
            </div>
        </div>
    )
}

export default EarthAnim