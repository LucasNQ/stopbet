import { memo } from 'react';
import { BookOpen, AlertOctagon, TrendingUp, Lock } from 'lucide-react';

const CompleteArsenal = () => {
    const cards = [
        {
            image: '/arsenal/stopbet-72h.webp',
            title: 'StopBet 72h (Principal)',
            description: 'O Método definitivo para sair do ciclo das apostas.',
            icon: <BookOpen className="w-6 h-6 text-brand-red" />
        },
        {
            image: '/arsenal/sos-anti-recaida.webp',
            title: 'Protocolo SOS Anti-Recaída',
            description: 'Um guia de emergência para bloquear o impulso nos momentos mais críticos.',
            icon: <AlertOctagon className="w-6 h-6 text-brand-red" />
        },
        {
            image: '/arsenal/quebrando-cadeias.webp',
            title: 'Quebrando Cadeias',
            description: 'O Guia espiritual para vencer o vício voltado para os Cristãos.',
            icon: <TrendingUp className="w-6 h-6 text-brand-red" />
        },
        {
            image: '/arsenal/apos-as-72h.webp',
            title: 'A Blindagem (Pós-72h)',
            description: 'Blindagem emocional permanente para não voltar ao ciclo das apostas.',
            icon: <Lock className="w-6 h-6 text-brand-red" />
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-2 md:px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight mb-6">
                            O Material Completo <span className="text-brand-red">Que Você Vai Receber</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                            Tudo o que você precisa para retomar o controle da sua vida.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col scroll-reveal"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="aspect-[3/4] overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(CompleteArsenal);
