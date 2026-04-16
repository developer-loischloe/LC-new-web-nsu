import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const popular = [
  { img: product1, tag: "Care" },
  { img: product2, tag: "Care Oils" },
  { img: product3, tag: "Health Cosmetics" },
];

export function PopularProducts() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center text-foreground mb-3 sm:mb-4 italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Discover the Popular Products
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        {popular.map((p) => (
          <span key={p.tag} className="px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium bg-secondary rounded-full text-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            {p.tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {popular.map((p, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-secondary group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={p.img} alt={p.tag} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
