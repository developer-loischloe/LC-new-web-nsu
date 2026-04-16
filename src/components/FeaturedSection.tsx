import { motion } from "framer-motion";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";

export function FeaturedSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-6xl font-medium text-foreground italic">It's Back!</h2>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-3">[ For Limited Time Only ]</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left tall card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden aspect-[3/4] md:row-span-2 group cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={featured1} alt="Featured collection" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-display text-3xl font-semibold text-primary-foreground leading-tight">Magic timeless by nature, always</h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-primary-foreground/80">Gentleman Glossary</span>
            </div>
            <span className="inline-block mt-3 text-xs text-primary-foreground/70">$90.00</span>
          </div>
        </motion.div>

        {/* Top right */}
        <motion.div
          className="relative rounded-3xl overflow-hidden aspect-square group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img src={featured2} alt="Water splash texture" loading="lazy" width={800} height={800} className="w-full h-full object-cover rounded-full scale-90 group-hover:scale-95 transition-transform duration-700" />
        </motion.div>

        {/* Bottom right */}
        <motion.div
          className="relative rounded-3xl overflow-hidden aspect-square group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={featured3} alt="Oriental fragrance" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground leading-tight">Amazing wrapped in an oriental trail</h3>
            <span className="inline-block mt-2 text-xs text-primary-foreground/70">$110.00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
