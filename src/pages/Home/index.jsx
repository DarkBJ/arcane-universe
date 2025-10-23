import { useRef, useState } from "react";
import videoBg from '../../assets/header/arc-header-vid.mp4';
import { togglePlayPause as handleToggle } from '../../components/header/utils/playPause';
import { toggleMute } from '../../components/header/utils/audio';

export default function Home() {

    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const togglePlayPause = () => {
        handleToggle(videoRef, isPaused, setIsPaused);
    };

    const handleMuteToggle = () => {
    toggleMute(videoRef, isMuted, setIsMuted);
    };

    const toggleLike = () => {
    setIsLiked(prev => !prev);
    };


    const toggleFullscreen = () => {
    const videoElement = videoRef.current;

        if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch((err) => {
            console.error("Erro ao tentar fullscreen:", err);
    });
    } else {
        document.exitFullscreen();
        }
    };


    return (
        <div className="w-full h-[100vh] flex items-center flex-col">

            <div className="w-full flex">
                <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="object-cover w-full h-[100vh] z-0 brightness-50"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>

                <div className="w-[85%] h-full z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-5">
                        <img className="w-7" src="/src/assets/header/netflix-icon.png" alt="Logo Netflix" />
                        <span className="text-white font-medium text-[1em] tracking-[2px]">Séries</span>
                    </div>

                    <div className="w-full p-0 flex items-center justify-center">
                        <img className="w-[500px]" src="/src/assets/header/arc-header-logo.png" alt="Logo 'Arcane'" />
                    </div>

                    <div className="w-full h-auto absolute top-[90%] flex justify-center gap-5">

                        <button
                            onClick={togglePlayPause}
                            className="border-1 border-white opacity-75 hover:opacity-100 hover:border-2 duration-300 w-10 h-10 flex items-center justify-center rounded-[50%] p-1.5 backdrop-brightness-30 cursor-pointer"
                        >
                            {isPaused ? (
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-icon lucide-play">
                                <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                            ) : (
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause">
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                </svg>
                            )}
                        </button>

                        <button className="border-1 border-white opacity-75 hover:opacity-100 hover:border-2 duration-300 w-10 h-10 flex items-center justify-center rounded-[50%] p-1.5 backdrop-brightness-30 cursor-pointer" onClick={handleMuteToggle}
>

                        {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x-icon lucide-volume-x"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>
                        ) : (
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
                        )}
                        </button>

                    <button className="border-1 border-white opacity-75 hover:opacity-100 hover:border-2 duration-300 w-10 h-10 flex items-center justify-center rounded-[50%] p-1.5 backdrop-brightness-30 cursor-pointer" onClick={toggleLike}>
                        {/* Heart Icon */}
                        {isLiked ? (

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="red" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1 4.5 2.09C13.09 4 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/>
                        </svg>
                    ) : (

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    )}
                        </button>

                        <button
                        onClick={toggleFullscreen}
                          className="border-1 border-white opacity-75 hover:opacity-100 hover:border-2 duration-300 w-10 h-10 flex items-center justify-center rounded-full p-1.5 backdrop-brightness-30 cursor-pointer"
                        >
                        {/* Fullscreen Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
