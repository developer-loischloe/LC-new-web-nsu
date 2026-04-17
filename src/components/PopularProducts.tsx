import { motion } from "framer-motion";
import popular1 from "@/assets/popular-1.jpg";
import popular2 from "@/assets/popular-2.jpg";
import popular3 from "@/assets/popular-3.jpg";
import popular4 from "@/assets/popular-4.jpg";

const popular = [
  { img: popular1 },
  { img: popular2 },
  { img: popular3 },
  { img: popular4 },
];

const filters = ["PARFUMS", "SKIN CARE", "MEDICAL COSMETIC"];

export function PopularProducts() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.h2
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-foreground mb-4 sm:mb-6"
        style={{ fontStyle: "normal" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Discover the Popular Products
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {filters.map((f, i) => (
          <span
            key={f}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold rounded-full cursor-pointer transition-colors uppercase tracking-wider ${
              i === 0
                ? "bg-foreground text-background"
                : "bg-cream-dark/60 text-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Capsule / pill-shaped images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {popular.map((p, i) => (
          <motion.div
            key={i}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="aspect-[1/2] overflow-hidden bg-secondary rounded-full border border-foreground/20">
              <motion.img
                src={p.img}
                alt={`Popular product ${i + 1}`}
                loading="lazy"
                width={512}
                height={800}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                whileHover={{ scale: 1.06 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
