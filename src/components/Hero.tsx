// import { Zap, Shield, Users, Download } from 'lucide-react'; //
import BlackFridayBanner from './BlackFridayBanner';
import VSLPlayer from './VSLPlayer';

const Hero = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const scrollToCards = () => {
    document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-white text-brand-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bg-brand-red text-brand-white text-center py-3 font-semibold text-sm md:text-base z-20 shadow-lg">
        🔥 Desconto só HOJE nessa página – {currentDate}
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-32">
        <div className="text-center mb-8">
          <div className="">
            <img
              src="/logo-hero.png"
              alt="StopBet Logo"
              className="mx-auto h-auto w-full max-w-sm md:max-w-lg lg:max-w-lg mb-6"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
            Em apenas <span className="text-brand-red">72 horas</span>, você vai APAGAR a vontade de apostar e recuperar seu controle.
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Mesmo que hoje você se sinta um lixo por não conseguir parar — <span className="font-bold text-gray-900">esse protocolo vai virar o jogo.</span>
          </p>

          <VSLPlayer />

          <div className="scroll-reveal mt-8">
            <button
              onClick={scrollToCards}
              className="group relative h-14 px-12 overflow-hidden bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-xl transition-all duration-200 ease-out hover:scale-[1.03] shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.6)] border-none inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-red-600 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />

              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-200" />

              <span className="relative z-10 text-white font-bold tracking-wide">
                Quero adquirir o meu
              </span>
            </button>
          </div>

          <div className="mt-16 mb-32 scroll-reveal">
            <BlackFridayBanner
              text="OFERTA FIM DE ANO - DESCONTO APLICADO ● ENTREGA IMEDIATA ● APROVADO POR MAIS DE 1.200 EX-APOSTADORES"
              speed={40}
              glowIntensity="medium"
            />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-white to-transparent"></div>
    </section>
  );
};

export default Hero;
