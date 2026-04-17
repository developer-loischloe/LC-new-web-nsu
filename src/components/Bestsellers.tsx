import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { img: product1, name: "SKIN RECOVERY GEL", desc: "Collaboration with Charlap Hyman & Herrero", price: "$48.00" },
  { img: product2, name: "DAILY SKINCARE GEL", desc: "A daily routine for oily, blemish-prone skin", price: "$62.00" },
  { img: product3, name: "CREAM WITH CENTELLA ASIATICA", desc: "A natural formula to help calm and soothe the skin", price: "$55.00" },
  { img: product4, name: "100% SQUALANE SERUM", desc: "Custom-blended moisturizing serum for dry skin", price: "$39.00" },
];

export function Bestsellers() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-foreground mb-10 sm:mb-14 md:mb-16"
        style={{ fontStyle: "normal" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Bestsellers
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="relative aspect-[4/5] bg-secondary rounded-2xl sm:rounded-3xl overflow-hidden mb-4">
              <motion.img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.08 }}
              />
              {/* ADD TO BAG button overlaid at bottom */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
                <button className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-foreground text-background text-xs sm:text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap">
                  ADD TO BAG <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground text-center">{p.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 text-center">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
