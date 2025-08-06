import React, { useEffect, useRef, useState } from 'react'
import { VideoSectionVideo } from '../assets';
import video_icon from '../assets/images/play-icon.png'

const VideoSec = () => {
    const [playVideo, setplayVideo] = useState(false);

    const video = useRef(null);

    useEffect(() => {
        const vid = video.current;

        if (playVideo) {
            vid.play();
        }

        const handlePause = () => setplayVideo(false);
        const handlePlay = () => setplayVideo(true);

        // Attach event listeners
        vid.addEventListener('pause', handlePause);
        vid.addEventListener('play', handlePlay);

        // Cleanup
        return () => {
            vid.removeEventListener('pause', handlePause);
            vid.removeEventListener('play', handlePlay);
        };
    }, [playVideo]);


    return (
        <section className='video-section bg-[#01111F]'>
            <div className="container lg:!px-16">
                <div className="video-box">
                    <video ref={video} src={VideoSectionVideo} muted loop controls={playVideo} className='w-full aspect-[16/11] lg:aspect-[16/7]'></video>
                    <button onClick={() => setplayVideo((prev) => !prev)} className={`video-btn ${ (playVideo) ? 'hidden' : ''}`}><img src={video_icon} alt="video icon" /></button>
                </div>
            </div>
        </section>
    )
}

export default VideoSec