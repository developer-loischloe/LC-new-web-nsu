import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-cream">
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
      <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-cream/30 to-transparent" />
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex gap-2 mb-6">
            {["Trending", "Skincare", "Reward Points"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-background/80 rounded-full text-foreground backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] text-warm-black mb-4">
            Glow Naturally with Ecococo Morning Sun
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
            Start your day with a burst of radiance! Our Vitamin C-infused formula nourishes and revitalizes your skin, leaving it refreshed, luminous, and naturally glowing from sunrise to night.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-full px-5 py-3">
              <span className="text-sm font-medium text-foreground">Morning Care</span>
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-foreground" : "bg-foreground/30"}`} />
        ))}
      </div>
    </section>
  );
}
