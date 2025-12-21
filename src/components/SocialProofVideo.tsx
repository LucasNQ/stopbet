import { memo, useState, useRef } from 'react';
import { Play } from 'lucide-react';

const SocialProofVideo = () => {
    // Estado para controlar se o vídeo foi ativado
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        setIsLoaded(true);
        // Pequeno delay para garantir que o elemento <video> renderizou antes de dar play
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 50);
    };

    return (
        <section className="pt-16 pb-10 md:pb-20 bg-brand-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto scroll-reveal">

                    <div className="text-center mb-6">
                        <p className="text-lg text-gray-800 font-medium max-w-[320px] mx-auto leading-relaxed">
                            Depoimento que o Jhonatan nos enviou, demonstrando sua gratidão:
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-black cursor-pointer group">

                        {!isLoaded ? (
                            // --- FACHADA (IMAGEM LEVE) ---
                            <button
                                onClick={handlePlayClick}
                                className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
                                aria-label="Assistir depoimento"
                            >
                                {/* Substitua '/depoimento-poster.webp' pelo caminho da sua imagem */}
                                <img
                                    src="/jhonatan-poster-video.webp"
                                    alt="Capa do depoimento"
                                    className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                                    loading="lazy"
                                    width="320"
                                    height="568"
                                />

                                {/* Botão de Play */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                    <div className="w-16 h-16 bg-brand-red/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform transition-transform duration-200 group-hover:scale-110">
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </div>
                                </div>
                            </button>
                        ) : (
                            // --- VÍDEO REAL (PESADO) ---
                            // Só é injetado no DOM após o clique
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                playsInline
                                controls // Adicionei controls para melhor UX no celular após o play
                                autoPlay
                            >
                                <source src="https://lpj-hoqoanid.on.adaptive.ai/cdn/gUcAi4q9pwLhmUaLHgHqBRkAKnFzWLfm-lpj-social-proof.mp4" type="video/mp4" />
                                Seu navegador não suporta a reprodução de vídeos.
                            </video>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(SocialProofVideo);