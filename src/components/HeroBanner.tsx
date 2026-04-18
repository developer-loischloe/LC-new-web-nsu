import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";

export function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90vh] overflow-hidden bg-background">
      {/* Full-width background banner image */}
      <motion.img
        src={heroBanner}
        alt="Beauty models with glowing skin"
        className="absolute inset-0 w-full h-full object-cover object-right"
        width={1920}
        height={1080}
        style={{ y: imageY, scale: imageScale }}
      />

      {/* Soft fade gradient on the left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent md:via-background/70" />

      {/* Content overlay */}
      <div className="relative z-10 min-h-[90vh] flex flex-col">
        <div className="flex-1 flex flex-col justify-center py-12 md:py-20 px-4 sm:px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {["MORNING CARE", "SKIN CARE", "NATURE PRODUCT"].map((tag) => (
                <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium bg-cream-dark/60 rounded-full text-foreground uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-4 sm:mb-6">
              Glow Naturally with Ecococo Morning Sun
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-md">
              Start your day with a burst of radiance! Our Vitamin C-infused formula nourishes and revitalizes your skin, leaving it hydrated, protected, and naturally glowing from morning to night.
            </p>
          </motion.div>
        </div>

        {/* Bottom row: promo card (left) + carousel controls (right) */}
        <div className="relative px-4 sm:px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-8 md:pb-12 flex items-end justify-between gap-4">
          {/* Product promo card */}
          <motion.div
            className="bg-card rounded-2xl p-4 w-full max-w-[260px] sm:max-w-xs shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">LIMITED TIME – 30%</p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-0.5">Morning Care</h3>
              </div>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </span>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square bg-secondary">
              <img src={product1} alt="Morning care product" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Carousel controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              className="w-9 h-9 rounded-full border border-foreground/20 bg-background/80 backdrop-blur flex items-center justify-center hover:bg-foreground/5 transition-colors"
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 bg-foreground" : "w-1.5 bg-foreground/50"}`}
                />
              ))}
            </div>
            <button
              className="w-9 h-9 rounded-full border border-foreground/20 bg-background/80 backdrop-blur flex items-center justify-center hover:bg-foreground/5 transition-colors"
              onClick={() => setActiveSlide(Math.min(3, activeSlide + 1))}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
