import * as React from "react";
import { motion } from "framer-motion";

interface BlackFridayBannerProps {
  text?: string;
  speed?: number;
  glowIntensity?: "low" | "medium" | "high";
}

const BlackFridayBanner: React.FC<BlackFridayBannerProps> = ({
  text = "DESCONTO APLICADO ● ENTREGA IMEDIATA ● APROVADO POR MAIS DE 1.200 EX-APOSTADORES",
  speed = 40,
  glowIntensity = "medium",
}) => {
  const repeatedText = Array(15).fill(text).join(" ● ");

  const glowStyles = {
    low: "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
    medium: "drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]",
    high: "drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]",
  };

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-3 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400/10 to-transparent pointer-events-none" />

      <motion.div
        className="whitespace-nowrap will-change-transform"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span
          className={`inline-block text-white font-bold text-sm md:text-base tracking-wider uppercase ${glowStyles[glowIntensity]}`}
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default BlackFridayBanner;
