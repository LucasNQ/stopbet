const PainPoints = () => {
  const scrollToCards = () => {
    document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  const painPoints = [
    {
      line1: 'Você tenta dormir, mas a cabeça não desliga.',
      line2: 'O vício em apostas não deixa você em paz.',
    },
    {
      line1: 'Promete que vai parar…',
      line2: 'Mas no dia seguinte, o dedo volta pro app.',
    },
    {
      line1: 'Já vendeu celular, pediu empréstimo,',
      line2: 'usou o cartão da esposa — e ainda perdeu.',
    },
    {
      line1: 'O arrependimento te corrói.',
      line2: 'Mas a vontade de apostar sempre vence.',
    },
    {
      line1: 'Você sente que está sozinho.',
      line2: 'Cheio de vergonha, culpa e medo.',
    },
    {
      line1: 'Mas mesmo assim…',
      line2: 'ainda acredita que pode sair dessa em silêncio.',
    },
  ];

  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-6 scroll-reveal">
              O StopBet é para você que...
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {painPoints.map((point, index) => {
              const renderLine2 = () => {
                if (point.line2.includes(' — ')) {
                  const parts = point.line2.split(' — ');
                  return (
                    <>
                      <span className="text-brand-black font-medium">{parts[0]}</span>
                      <span className="text-brand-black font-medium"> — </span>
                      <span className="text-brand-red font-bold">{parts[1]}</span>
                    </>
                  );
                }
                return <span className="text-brand-red font-bold">{point.line2}</span>;
              };

              return (
                <div key={index} className="scroll-reveal text-center">
                  <p className="text-xl md:text-2xl text-brand-black font-medium italic leading-relaxed mb-1">
                    {point.line1}
                  </p>
                  <p className="text-xl md:text-2xl italic leading-relaxed">
                    <span className="text-brand-black">{renderLine2()}</span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center scroll-reveal">
            <button
              onClick={scrollToCards}
              className="group relative h-14 px-12 overflow-hidden bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-xl transition-all duration-200 ease-out hover:scale-[1.03] shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.6)] border-none inline-flex items-center justify-center"
            >

              <span className="relative z-10 text-white font-bold tracking-wide">
                Quero adquirir o meu
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
