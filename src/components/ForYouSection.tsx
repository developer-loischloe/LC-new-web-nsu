import { motion } from "framer-motion";
import product4 from "@/assets/product-4.jpg";

const stats = [
  { value: "96%", label: "Skin looks lifted, more luminous and younger" },
  { value: "100%", label: "Saw a visible & lasting effect on skin firmness" },
  { value: "92%", label: "Noticed skin looked brighter and better overall" },
];

export function ForYouSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center text-foreground mb-10 sm:mb-16 italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        For You
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-olive"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={product4} alt="Featured product" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-destructive text-destructive-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            ROWSE
          </div>
        </motion.div>
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <div key={i} className="border-b border-border pb-4 sm:pb-6">
              <span className="font-display text-3xl sm:text-4xl font-semibold text-foreground">{s.value}</span>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
