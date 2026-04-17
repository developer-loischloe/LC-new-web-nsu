import { motion } from "framer-motion";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import catParfumsSub from "@/assets/cat-parfums-sub.jpg";
import catForbody from "@/assets/cat-forbody.jpg";
import catCatalog from "@/assets/cat-catalog.jpg";
import catForface from "@/assets/cat-forface.jpg";

const subCategories = [
  { img: catParfumsSub },
  { img: catForbody },
  { img: catCatalog },
  { img: catForface },
];

export function FeaturedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground" style={{ fontStyle: "normal" }}>It's Back!</h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mt-3">[ FOR LIMITED TIME ONLY ]</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Top large card - Magic timeless */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={featured1} alt="Magic timeless" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-transparent to-warm-black/30" />
            <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight" style={{ fontStyle: "normal" }}>
                Magic timeless<br />by nature, always
              </h3>
            </div>
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 flex items-center gap-3">
                <img src={featured1} alt="Product" width={48} height={48} className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">Gentleman Givenchy</h4>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground line-clamp-1">The latest addition to the collection</p>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">$130.00</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom 2x2 sub-category grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {subCategories.map((cat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden aspect-square group cursor-pointer rounded-xl sm:rounded-2xl hover:rounded-full transition-all duration-500 ease-out"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img src={cat.img} alt="" loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Circular "View More" card */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square group cursor-pointer bg-cream-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-slate-50">
              <div className="w-full aspect-square rounded-full overflow-hidden relative">
                <img src={featured2} alt="Water splash" loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-white uppercase tracking-[0.2em] font-medium text-center leading-relaxed">
                    VIEW MORE<br />LIMITED EDITION<br />PRODUCTS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tall Oriental trail card */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={featured3} alt="Oriental fragrance" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-transparent to-warm-black/30" />
            <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight" style={{ fontStyle: "normal" }}>
                Amazing wrapped<br />in an oriental trail
              </h3>
            </div>
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 flex items-center gap-3">
                <img src={featured3} alt="Product" width={48} height={48} className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">Les Benjamins</h4>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground line-clamp-1">Notes of lychee, sweet amber</p>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">$130.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
