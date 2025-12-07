import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Obrigado = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4">
            <div className="bg-brand-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-brand-red">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-brand-black mb-4">
                    Obrigado!
                </h1>

                <p className="text-brand-black/80 mb-8 text-lg">
                    Sua ação foi concluída com sucesso. Agora você está um passo mais perto de retomar o controle.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-brand-red hover:bg-[#a52121] text-brand-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    Voltar ao Início
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Obrigado;