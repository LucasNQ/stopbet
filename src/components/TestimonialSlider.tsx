import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Foi a primeira vez que consegui passar três dias sem jogar. Parece pouco, mas pra mim foi tudo, já estou me sentindo livre dessa vontade perturbadora que eu tinha de apostar.",
    name: "Rafaela S.",
    avatar: "/Rafaela.webp",
  },
  {
    id: 2,
    quote: "Após seguir o Protocolo, Parei de fingir que era só diversão. Tô conseguindo controlar o impulso e não jogar, obrigado.",
    name: "Marcelo",
    avatar: "/Marcelo.webp",
  },
  {
    id: 3,
    quote: "Entrei achando que era golpe ou papo de coach, confesso. Mas comecei a ler e parecia que vocês tavam dentro da minha cabeça, descrevendo minha vida. Quatro dias limpa. Só de ver meu dinheiro sobrar na conta já valeu.",
    name: "Jaqueline",
    avatar: "/Jaqueline.webp",
  },
  {
    id: 4,
    quote: "Fiz calado. Ninguém sabe. Mas tô limpo tem uns dias e não me odeio mais por dentro. Esse negócio me ajudou a levantar rapidamente.",
    name: "Helton P.",
    avatar: "/Helton.webp",
  },
  {
    id: 5,
    quote: "Peguei dinheiro escondido da minha mãe. Fiz o StopBet chorando, em silêncio. No 2º dia, recusei uma aposta automática pela 1ª vez em meses.",
    name: "Anônimo",
    avatar: "/Anônimo.webp",
  },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);

      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex >= maxIndex) {
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex <= 0) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + direction);
        }
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, windowWidth, direction]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext();
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <div className="px-4 py-8 sm:py-12 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative" ref={containerRef}>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${canGoPrev
                ? 'bg-brand-red text-brand-white hover:bg-brand-red/90 hover:scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 1.5}rem)`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              >
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-brand-black/5 rounded-2xl p-8 border border-brand-gray/20"
                    style={{
                      minWidth: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 1.5) / visibleCount
                        }rem)`,
                      maxWidth: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 1.5) / visibleCount
                        }rem)`,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Quote className="w-10 h-10 text-brand-red mb-4 opacity-50" />

                    <p className="text-lg text-brand-black mb-6 leading-relaxed min-h-[120px]">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-brand-gray/20">
                      <div className="w-12 h-12 rounded-full bg-brand-gray/20 overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-black">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={goNext}
              disabled={!canGoNext}
              className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${canGoNext
                ? 'bg-brand-red text-brand-white hover:bg-brand-red/90 hover:scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'bg-brand-red w-8'
                  : 'bg-brand-gray/40 hover:bg-brand-gray'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
