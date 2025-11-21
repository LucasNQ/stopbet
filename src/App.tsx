import { Suspense, lazy } from 'react';

// Componentes críticos (carregam imediatamente para não piscar a tela inicial)
import Hero from './components/Hero';
import Notification from './components/Notification';
import { useScrollReveal } from './hooks/useScrollReveal';

// Componentes secundários (carregam em segundo plano para acelerar o site)
// O navegador só baixa esses arquivos depois que o Hero já apareceu
const PainPoints = lazy(() => import('./components/PainPoints'));
const BonusCards = lazy(() => import('./components/ExclusiveBonuses'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const PricingCards = lazy(() => import('./components/PricingCards'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Um "esqueleto" simples que segura o espaço enquanto o conteúdo carrega
// Isso evita que o site "pule" (Layout Shift)
const SectionLoader = () => <div className="w-full h-96 bg-brand-white animate-pulse" />;

function App() {
  // Mantemos seu hook de animação
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-white">
      {/* O Hero é o LCP (Largest Contentful Paint), ele precisa ser instantâneo */}
      <Hero />

      {/* O Suspense gerencia o carregamento do resto da página */}
      <Suspense fallback={<SectionLoader />}>
        <PainPoints />
        <BonusCards />
        <Testimonials />
        <PricingCards />
        <FAQ />
        <Footer />
      </Suspense>

      {/* Notificação fica fora do Suspense para garantir que o script rode */}
      <Notification />
    </div>
  );
}

export default App;