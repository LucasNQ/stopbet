import { Zap } from 'lucide-react';

const FinalCTA = () => {
  const scrollToCards = () => {
    document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-black text-brand-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gray rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Pare tudo agora.
            </h2>
            <p className="text-2xl md:text-3xl mb-4 text-brand-gray leading-relaxed">
              Faça a última aposta: <span className="text-brand-red font-bold">em você.</span>
            </p>
            <p className="text-xl text-brand-gray">
              Clique abaixo, escolha seu plano e liberte-se.
            </p>
          </div>

          <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToCards}
              className="group relative inline-flex items-center gap-3 bg-brand-red text-brand-white text-lg md:text-xl font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-105 border-2 border-brand-red"
            >
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Comece Agora – R$ 1,99
            </button>

            <button
              onClick={scrollToCards}
              className="group relative inline-flex items-center gap-3 bg-brand-red text-brand-white text-lg md:text-xl font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none border-2 border-brand-red"
            >
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Garanta pacote completo – R$ 7,99
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
