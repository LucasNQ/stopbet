import { Check, ArrowRight } from 'lucide-react';

const PricingCards = () => {
  const plans = [
    {
      name: 'StopBet 72h',
      price: '1,99',
      originalPrice: '19,90',
      popular: false,
      description: 'Para quem quer testar',
      features: [
        'Protocolo Básico (3 dias)',
        'Exercícios para cortar o impulso',
        'Acesso imediato',
      ],
      link: 'https://seguro.stopbet.site/1rgpSoOUsSJEiGh7R8mW',
    },
    {
      name: 'StopBet Total',
      price: '7,99',
      originalPrice: '37,90',
      popular: true,
      description: 'A solução completa e definitiva',
      features: [
        'Protocolo Completo',
        'Acesso ao Grupo VIP',
        'Guia de recomeço financeiro',
        'Manual da Recaída',
        'Acesso imediato',
      ],
      link: 'https://seguro.stopbet.site/J56C1xky6ttQRz250Ug4',
    },
  ];

  return (
    <section id="pricing-cards" className="py-20 bg-brand-white relative overflow-hidden">
      {/* Fundo decorativo sutil para dar profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4">
              Escolha seu plano
            </h2>
            <p className="text-xl text-gray-800">
              Investimento mínimo. Resultado máximo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-4xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`scroll-reveal relative rounded-3xl transition-all duration-300 flex flex-col h-full ${plan.popular
                  ? 'bg-white text-brand-black ring-4 ring-brand-red/20 shadow-[0_20px_50px_-12px_rgba(198,40,40,0.25)] scale-100 md:scale-105 z-10 border-2 border-brand-red'
                  : 'bg-gray-50 text-brand-black border border-gray-200 shadow-xl scale-95 opacity-90 hover:opacity-100 hover:scale-100'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-red text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
                    POPULAR
                  </div>
                )}

                <div className={`p-8 pb-0 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="text-center border-b border-gray-100 pb-8">
                    <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-6">
                      {plan.description}
                    </p>

                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-1 relative inline-block">
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 200 25"
                          preserveAspectRatio="none"
                        >
                          <line
                            x1="0"
                            y1="20"
                            x2="200"
                            y2="5"
                            stroke="#DC2626"
                            strokeWidth="2"
                          />
                        </svg>
                        <p className="text-sm text-brand-black font-semibold relative z-10">
                          DE R$ {plan.originalPrice}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-brand-black">
                        <span className="text-2xl font-bold mt-2">R$</span>
                        <span
                          className={`text-6xl font-black tracking-tighter ${plan.popular ? 'text-brand-red' : 'text-brand-black'
                            }`}
                        >
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-2">
                        Pagamento Único
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${plan.popular
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-200 text-gray-600'
                            }`}
                        >
                          <Check className="w-4 h-4 stroke-[3px]" />
                        </div>
                        <span
                          className={`text-base font-medium ${plan.popular ? 'text-gray-800' : 'text-gray-600'
                            }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button
                      className={`group relative h-14 w-full overflow-hidden font-boldQX text-lg rounded-xl transition-all duration-200 ease-out hover:scale-[1.02] border-none inline-flex items-center justify-center ${plan.popular
                        ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.6)]'
                        : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg'
                        }`}
                    >
                      {plan.popular && (
                        <>
                          <div className="absolute inset-0 bg-red-600 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                          <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-200" />
                        </>
                      )}

                      <span className="relative z-10 flex items-center gap-2 font-bold">
                        {plan.popular
                          ? 'Quero Garantir Agora'
                          : 'Começar Básico'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </a>

                  <p className="text-center text-xs text-gray-400 font-medium mt-4 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Acesso liberado imediatamente
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal text-center mt-32">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src="/logo-garantia.png" alt="StopBet" className="h-8 object-cover object-center" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-brand-black mb-4">
              <span className="block md:inline">Garantia incondicional de</span>{' '}
              <span className="block md:inline">7 Dias</span>
            </h3>
            <p className="text-lg text-brand-black leading-normal max-w-3xl mx-auto">
              Se em 7 dias você sentir que não é pra você, te devolvemos 100% do valor. Sem letra miúda. Sem questionamento.{' '}
              <span className="text-brand-red">Você entra com confiança. E se não sentir que é pra você — sai sem prejuízo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;