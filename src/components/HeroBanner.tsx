import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";

export function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-stretch min-h-[85vh]">
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center py-12 md:py-20 md:w-1/2 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {["MORNING CARE", "SKIN CARE", "NATURE PRODUCT"].map((tag) => (
                <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium bg-cream-dark/60 rounded-full text-foreground uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-4 sm:mb-6" style={{ fontStyle: "normal" }}>
              Glow Naturally with Ecococo Morning Sun
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-md">
              Start your day with a burst of radiance! Our Vitamin C-infused formula nourishes and revitalizes your skin, leaving it hydrated, protected, and naturally glowing from morning to night.
            </p>

            {/* Product promo card */}
            <motion.div
              className="bg-card rounded-2xl p-4 max-w-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">LIMITED TIME – 30%</p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-0.5" style={{ fontStyle: "normal" }}>Morning Care</h3>
                </div>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-background" />
                </span>
              </div>
              <div className="rounded-xl overflow-hidden aspect-[16/10] bg-secondary">
                <img src={product1} alt="Morning care product" width={400} height={250} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right hero image */}
        <div className="relative md:w-1/2 min-h-[300px] md:min-h-0">
          <motion.img
            src={heroBanner}
            alt="Beauty models with glowing skin"
            className="absolute inset-0 w-full h-full object-cover object-top"
            width={1920}
            height={1080}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
          onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"}`}
            />
          ))}
        </div>
        <button
          className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
          onClick={() => setActiveSlide(Math.min(3, activeSlide + 1))}
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </section>
  );
}
