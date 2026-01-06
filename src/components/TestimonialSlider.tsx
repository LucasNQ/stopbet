import { motion } from 'framer-motion';

const TestimonialSlider = () => {
  return (
    <div className="px-4 py-8 sm:py-12 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/dp-whatsapp-1.webp"
              alt="Depoimento 1"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/dp-whatsapp-2.webp"
              alt="Depoimento 2"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
