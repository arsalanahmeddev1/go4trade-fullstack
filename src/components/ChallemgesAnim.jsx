import { useEffect, useMemo, useState } from "react";
import { ChallengesImg } from '../assets';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";
import { ChallengesParticle } from "../assets";

const ChallemgesAnim = (props) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Your downloaded options from TS Particles website

    const particlesOptions = ChallengesParticle;
    return (
        <div className="container relative max-w-max w-full !px-0 pointer-events-none select-none">
            {init ? (
                <Particles
                    id="tsparticles5"
                    init={initParticlesEngine}
                    options={particlesOptions}
                    className="absolute w-full h-[554px] top-[84%] left-0 -translate-y-1/2 z-10"
                />
            ) : ''}

            <div className="image relative flex items-center justify-center">
                {(props.video) ? (
                    <video src={props.video} className="mx-auto w-[80%]" loop autoPlay muted playsInline></video>
                ) : (
                    <img src={ChallengesImg} className='mx-auto' alt="image" />
                )}
            </div>
        </div>
    )
}

export default ChallemgesAnim