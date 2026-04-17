import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foryou1 from "@/assets/foryou-1.jpg";
import foryou2 from "@/assets/foryou-2.jpg";
import foryou3 from "@/assets/foryou-3.jpg";
import foryou4 from "@/assets/foryou-4.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const cards = [
  {
    bg: foryou1,
    product: product1,
    title: "FACE OIL",
    stats: [
      { value: "96%", label: "NOTICED DEEPLY NOURISHED\nAND HYDRATED SKIN" },
      { value: "90%", label: "FELT A MORE RADIANT\nAND GLOWING COMPLEXION" },
      { value: "92%", label: "SAW REDUCED FINE LINES\nAND IMPROVED TEXTURE" },
    ],
  },
  {
    bg: foryou2,
    product: product2,
    title: "ROWSE",
    stats: [
      { value: "96%", label: "SAW MORE LIFTED\nSKIN IN JUST 1 WEEK" },
      { value: "100%", label: "SAW MORE SCULPTED FACIAL\nFEATURES IN 1 WEEK" },
      { value: "92%", label: "SAW IMMEDIATE IMPROVEMENT\nOF FINE LINES AND WRINKLES" },
    ],
  },
  {
    bg: foryou3,
    product: product3,
    title: "LUXURY LIPSTICK",
    stats: [
      { value: "96%", label: "NOTICED FULLER AND MORE\nDEFINED LIPS" },
      { value: "91%", label: "FELT DEEP HYDRATION\nAND SMOOTH TEXTURE" },
      { value: "97%", label: "SAW LONG-LASTING VIBRANT\nCOLOR ALL DAY" },
    ],
  },
  {
    bg: foryou4,
    product: product4,
    title: "VOLUME MASCARA",
    stats: [
      { value: "96%", label: "SAW INSTANTLY LONGER\nAND FULLER LASHES" },
      { value: "100%", label: "NOTICED A CLUMP-FREE, LIFTED\nEFFECT ALL DAY" },
      { value: "92%", label: "EXPERIENCED SMUDGE-PROOF,\nALL-DAY WEAR" },
    ],
  },
];

export function ForYouSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? cards.length - 1 : a - 1));
  const next = () => setActive((a) => (a === cards.length - 1 ? 0 : a + 1));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-cream-dark overflow-hidden">
      <motion.h2
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-foreground mb-10 sm:mb-14"
        style={{ fontStyle: "normal" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        For You
      </motion.h2>

      {/* Card carousel */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[420px] sm:h-[500px] md:h-[560px]">
          {cards.map((card, i) => {
            const offset = i - active;
            const absOffset = Math.abs(offset);
            const isActive = i === active;

            if (absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                className="absolute top-0 left-1/2 w-[260px] sm:w-[360px] md:w-[440px] h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                style={{ zIndex: 10 - absOffset }}
                animate={{
                  x: `calc(-50% + ${offset * (offset === 0 ? 0 : 180 + (absOffset - 1) * 60)}px)`,
                  scale: isActive ? 1 : 0.82 - (absOffset - 1) * 0.06,
                  opacity: isActive ? 1 : 0.45 - (absOffset - 1) * 0.15,
                  rotateY: offset * -8,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setActive(i)}
              >
                <img
                  src={card.bg}
                  alt={card.title}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-warm-black/30 via-warm-black/20 to-warm-black/60" />

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ fontStyle: "normal" }}>
                    {card.title}
                  </h3>
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-3 sm:space-y-4">
                      {card.stats.map((s, j) => (
                        <div key={j}>
                          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/90 italic">{s.value}</span>
                          <p className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-wider leading-tight mt-0.5 whitespace-pre-line">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Product thumbnail */}
                    <div className="shrink-0 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl overflow-hidden bg-card/80 backdrop-blur-sm shadow-lg">
                      <img src={card.product} alt="Product" width={96} height={112} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
          <button
            className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
            onClick={prev}
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <div className="flex items-center gap-1.5">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button
            className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
            onClick={next}
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
