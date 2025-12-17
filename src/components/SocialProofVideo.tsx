import { memo, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const SocialProofVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className="pt-0 pb-10 md:pb-20 bg-brand-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto scroll-reveal">

                    <div
                        className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-black cursor-pointer group"
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            playsInline
                            preload="metadata"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            <source src="https://lpj-hoqoanid.on.adaptive.ai/cdn/gUcAi4q9pwLhmUaLHgHqBRkAKnFzWLfm-lpj-social-proof.mp4" type="video/mp4" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>

                        {/* Custom Play/Pause Overlay */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 bg-black/30'}`}>
                            <div className="w-16 h-16 bg-brand-red/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform transition-transform duration-200 hover:scale-110">
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 fill-current" />
                                ) : (
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(SocialProofVideo);
