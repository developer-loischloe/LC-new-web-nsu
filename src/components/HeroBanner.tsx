import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[85vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden bg-cream">
      <motion.img
        src={heroBanner}
        alt="Beauty models with glowing skin"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/40 to-transparent md:from-cream/70 md:via-cream/30" />
      <div className="relative z-10 flex flex-col justify-end sm:justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-0">
        <motion.div
          className="max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {["Trending", "Skincare", "Reward Points"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] sm:text-xs font-medium bg-background/80 rounded-full text-foreground backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-warm-black mb-3 sm:mb-4">
            Glow Naturally with Ecococo Morning Sun
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-md">
            Start your day with a burst of radiance! Our Vitamin C-infused formula nourishes and revitalizes your skin, leaving it refreshed, luminous, and naturally glowing from sunrise to night.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2.5 sm:py-3">
              <span className="text-xs sm:text-sm font-medium text-foreground">Morning Care</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i === 0 ? "bg-foreground" : "bg-foreground/30"}`} />
        ))}
      </div>
    </section>
  );
}
