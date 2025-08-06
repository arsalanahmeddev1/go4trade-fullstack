import { useEffect, useMemo, useState } from "react";
import { ConStarImg } from '../assets';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";
import { ParticleOptions } from "../assets";

const ConstarAnim = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Your downloaded options from TS Particles website

    const particlesOptions = ParticleOptions;

    return (
        <div className="container relative max-w-max w-full !px-0">
            {init ? (
                <Particles
                    id="tsparticles"
                    init={initParticlesEngine}
                    options={particlesOptions}
                    className="absolute w-full h-[30%] top-[34%] left-0 -translate-y-1/2 z-10"
                />
            ) : ''}

            <div className="image relative flex items-center justify-center">
                <img src={ConStarImg} className='mx-auto' alt="image" />
            </div>
        </div>
    );
};

export default ConstarAnim;