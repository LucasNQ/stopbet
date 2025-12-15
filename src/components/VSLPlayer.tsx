import React, { memo } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface VSLPlayerProps {
    videoId?: string;
}

// O componente agora é definido separadamente
const VSLPlayerComponent: React.FC<VSLPlayerProps> = ({ videoId = "nl0DnSHT8Tg" }) => {
    return (
        <div className="w-[calc(100%+2rem)] -mx-4 md:w-full md:max-w-[800px] md:mx-auto mb-8 z-30 relative scroll-reveal px-1 md:px-0">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <LiteYouTubeEmbed
                    id={videoId}
                    title="Apresentação VSL"
                    params="controls=0&rel=0&modestbranding=1&iv_load_policy=3"
                    poster="maxresdefault"
                />
            </div>
        </div>
    );
};

// AQUI ESTÁ A MÁGICA:
// Exportamos o componente envolvido em 'memo'. 
// Isso impede que ele seja recriado quando a Utmify altera a URL.
export default memo(VSLPlayerComponent);