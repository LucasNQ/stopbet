import React, { memo, useEffect } from 'react';

interface VSLPlayerProps {
    videoId?: string;
}

const VSLPlayerComponent: React.FC<VSLPlayerProps> = ({ videoId = "j115l4oguw" }) => {

    // Efeito para carregar os scripts do Wistia apenas uma vez
    useEffect(() => {
        // 1. Verifica se o script principal já existe para não duplicar
        if (!document.getElementById("wistia-script-main")) {
            const scriptMain = document.createElement("script");
            scriptMain.src = "https://fast.wistia.com/player.js";
            scriptMain.async = true;
            scriptMain.id = "wistia-script-main";
            document.body.appendChild(scriptMain);
        }

        // 2. Carrega o script específico do seu vídeo
        const scriptVideo = document.createElement("script");
        scriptVideo.src = `https://fast.wistia.com/embed/${videoId}.js`;
        scriptVideo.async = true;
        scriptVideo.type = "module";
        document.body.appendChild(scriptVideo);

        // Limpeza ao desmontar o componente
        return () => {
            if (document.body.contains(scriptVideo)) {
                document.body.removeChild(scriptVideo);
            }
        };
    }, [videoId]);

    return (
        <div className="w-[calc(100%+2rem)] -mx-4 md:w-full md:max-w-[800px] md:mx-auto mb-8 z-30 relative scroll-reveal px-1 md:px-0">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">

                {/* Estilos inline para o placeholder (imagem de fundo antes do vídeo carregar) */}
                <style>
                    {`
                        wistia-player[media-id='${videoId}']:not(:defined) {
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch');
                            display: block;
                            filter: blur(5px);
                            padding-top: 56.25%;
                        }
                    `}
                </style>

                {/* O Player Wistia - Usamos ts-ignore pois o React não reconhece a tag nativamente no TypeScript */}
                {/* @ts-ignore */}
                <wistia-player media-id={videoId} aspect="1.7777777777777777"></wistia-player>
            </div>
        </div>
    );
};

// Mantemos o memo para proteger contra o conflito da Utmify
export default memo(VSLPlayerComponent);