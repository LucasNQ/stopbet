import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import BonusCards from './components/ExclusiveBonuses';
import Testimonials from './components/Testimonials';
import PricingCards from './components/PricingCards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-white">
      <Hero />
      <PainPoints />
      <BonusCards />
      <Testimonials />
      <PricingCards />
      <FAQ />
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
