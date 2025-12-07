import { Check } from 'lucide-react';

const Upsell = () => {
    return (
        <section className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Check className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-brand-black mb-6">
                    Compra Aprovada! <span className="text-green-600">Mas espere...</span>
                </h1>

                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Seu acesso ao <span className="font-bold">StopBet</span> já foi enviado para seu e-mail.
                    <br />
                    Mas antes de você ir, eu tenho uma oportunidade única para acelerar seus resultados.
                </p>

                {/* Aqui você adiciona a oferta do Upsell (Vídeo, Texto, Botão de Compra 1-Click) */}
                <div className="bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-200">
                    <p className="font-bold text-gray-400 uppercase tracking-widest">
                        Espaço para o Vídeo de Upsell ou Oferta
                    </p>
                </div>

                <button className="mt-12 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-xl">
                    Sim, quero adicionar este complemento ao meu pedido
                </button>
            </div>
        </section>
    );
};

export default Upsell;