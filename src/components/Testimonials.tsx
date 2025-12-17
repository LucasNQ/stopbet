import { Users } from 'lucide-react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className="pt-20 pb-8 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4 scroll-reveal">
              Quem já <span className="text-brand-red">largou o vício</span>
            </h2>
            <p className="text-xl text-gray-800 scroll-reveal">
              Depoimentos de quem seguiu o protocolo mesmo tendo recaídas:
            </p>
          </div>

          <TestimonialSlider />

          <div className="mt-0 text-center scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-brand-black px-4 py-2 rounded-full text-sm">
              <Users className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="font-semibold">+1000 pessoas já recuperaram o controle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
