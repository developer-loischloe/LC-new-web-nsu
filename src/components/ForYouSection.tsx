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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-[480px] sm:h-[580px] md:h-[640px]">
          {cards.map((card, i) => {
            // Compute circular offset so cards always appear on both sides
            const len = cards.length;
            let offset = i - active;
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;
            const absOffset = Math.abs(offset);
            const isActive = i === active;

            if (absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                className="absolute top-0 left-1/2 w-[300px] sm:w-[440px] md:w-[560px] h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                style={{ zIndex: 10 - absOffset }}
                animate={{
                  x: `calc(-50% + ${offset * (offset === 0 ? 0 : 260 + (absOffset - 1) * 80)}px)`,
                  scale: isActive ? 1 : 0.88 - (absOffset - 1) * 0.06,
                  opacity: isActive ? 1 : 0.7 - (absOffset - 1) * 0.2,
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
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-b from-warm-black/20 via-transparent to-warm-black/40" />
                )}

                {/* Content overlay - only on active card */}
                {isActive && (
                  <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10">
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide" style={{ fontStyle: "normal" }}>
                      {card.title}
                    </h3>

                    {/* Stats block - middle/lower area */}
                    <div className="mt-auto flex items-end justify-between gap-4">
                      <div className="space-y-4 sm:space-y-5">
                        {card.stats.map((s, j) => (
                          <div key={j}>
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white leading-none">
                              {s.value}
                            </div>
                            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-white/90 uppercase tracking-wider leading-tight mt-1.5 whitespace-pre-line font-medium">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* Product thumbnail - large rounded pill */}
                      <div className="shrink-0 w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-44 rounded-[2rem] overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl">
                        <img src={card.product} alt="Product" width={144} height={176} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controls - pill shaped */}
        <div className="flex items-center justify-center mt-8 sm:mt-10">
          <div className="flex items-center gap-4 px-4 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-foreground/10 shadow-sm">
            <button
              className="flex items-center justify-center hover:opacity-60 transition-opacity"
              onClick={prev}
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`h-[2px] rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-6 bg-foreground" : "w-3 bg-foreground/30"}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
            <button
              className="flex items-center justify-center hover:opacity-60 transition-opacity"
              onClick={next}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
