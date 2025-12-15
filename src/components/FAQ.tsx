import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Funciona mesmo em 72h?',
      answer:
        'Sim! O protocolo StopBet foi desenvolvido para interromper o ciclo compulsivo em 72 horas através de técnicas comprovadas de neurociência e comportamento. Você vai sentir a diferença já nas primeiras horas.',
    },
    {
      question: 'E se eu apostar durante as 72h?',
      answer:
        'O protocolo inclui estratégias específicas para lidar com recaídas e impulsos. Mesmo que você tropece, o material te ensina a retomar o controle imediatamente. Não é sobre perfeição, é sobre progresso.',
    },
    {
      question: 'Preciso pagar mensalidade?',
      answer:
        'Não! É um pagamento único. Acesso vitalício!',
    },
    {
      question: 'Preciso me expor em grupos?',
      answer:
        'Absolutamente não. O StopBet é 100% privado e individual. Você faz no seu ritmo, na sua privacidade, sem precisar se expor para ninguém.',
    },
    {
      question: 'Vou ter suporte se estiver difícil?',
      answer:
        'Após você receber o material através do whastapp de nossa equipe, é só você nos enviar uma mensagem para solicitar o acesso ao grupo VIP.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4 scroll-reveal">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-800 scroll-reveal">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="scroll-reveal bg-brand-black/5 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-gray/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-black/10 transition-colors duration-200"
                >
                  <span className="text-lg md:text-xl font-bold text-brand-black pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-red flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-8 pb-6 text-brand-black text-lg leading-relaxed border-t border-brand-gray/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
