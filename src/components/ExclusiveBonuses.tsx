import React from 'react';
import { Shield, BookOpen, Users } from 'lucide-react';

interface BonusCardProps {
  icon: React.ReactNode;
  price: string;
  title: string;
  description: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ icon, price, title, description }) => {
  return (
    <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden scroll-reveal h-full flex flex-col">
      <div className="p-8 flex flex-col items-center text-center flex-grow">
        
        {/* 1. Ícone com fundo para dar peso visual (O que você gostou) */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center shadow-inner">
            {/* CloneElement garante que o ícone tenha o tamanho certo dentro da bolha */}
            {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 stroke-[2px]" })}
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-black leading-tight mb-3">
          {title}
        </h3>
        
        <p className="text-gray-800 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* 2. Estilo do Preço (O que você gostou) - Posicionado no rodapé do card para destaque */}
        <div className="mt-auto pt-4 border-t border-gray-100 w-full">
          <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
            Vendido separadamente por:
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-400 line-through font-medium decoration-red-500/50 decoration-2">
              {price}
            </span>
            <span className="text-green-600 font-black bg-green-50 px-3 py-1 rounded-lg text-sm border border-green-100 animate-pulse">
              HOJE GRÁTIS
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

const BonusCards: React.FC = () => {
  const bonuses = [
    {
      icon: <Shield />,
      price: "R$27,00",
      title: "BÔNUS 1 – Protocolo SOS Anti-Recaída",
      description: "Passo a passo rápido para bloquear o impulso nos momentos mais críticos, em menos de 5 minutos."
    },
    {
      icon: <BookOpen />, // Removi as classes manuais w-12 h-12 para usar o padrão do card
      price: "R$59,99",
      title: "BÔNUS 2 – Guia de Recomeço Financeiro",
      description: "Estrutura simples para organizar dívidas, parar de cavar o buraco e começar a reconquistar o que perdeu."
    },
    {
      icon: <Users />, // Removi as classes manuais w-12 h-12 para usar o padrão do card
      price: "R$19,90",
      title: "BÔNUS 3 – Grupo VIP",
      description: "Para trocar ideias com pessoas na mesma situação que você."
    }
  ];

  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-6">
              <span className="text-brand-red">Bônus</span>
              <span className="text-brand-black"> Exclusivos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
            {bonuses.map((bonus, index) => (
              <BonusCard
                key={index}
                icon={bonus.icon}
                price={bonus.price}
                title={bonus.title}
                description={bonus.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusCards;