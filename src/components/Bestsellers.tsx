import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { img: product1, name: "Skin Recovery Gel", desc: "Cell Restoration and Cooling Formula & Vitamins", price: "$48.00" },
  { img: product2, name: "Daily Skincare Oil", desc: "A daily routine for your skin rejuvenation", price: "$62.00" },
  { img: product3, name: "Cream with Centella Asiatica", desc: "A natural formula to help calm and soothe the skin", price: "$55.00" },
  { img: product4, name: "100% Squalane Serum", desc: "Custom-blended moisturizing serum for dry skin", price: "$39.00" },
];

export function Bestsellers() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-5xl md:text-6xl font-medium text-center text-foreground mb-16 italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Bestsellers
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden mb-4">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <button className="w-full py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wide uppercase mb-3 hover:opacity-90 transition-opacity">
              Add to bag — {p.price}
            </button>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{p.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
