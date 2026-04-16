import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import catParfumsSub from "@/assets/cat-parfums-sub.jpg";
import catForbody from "@/assets/cat-forbody.jpg";
import catCatalog from "@/assets/cat-catalog.jpg";
import catForface from "@/assets/cat-forface.jpg";

const subCategories = [
  { img: catParfumsSub, label: "PARFUMS", type: "pill" },
  { img: catForbody, label: "FOR BODY", type: "pill" },
  { img: catCatalog, label: "CATALOG", type: "bracket" },
  { img: catForface, label: "FOR FACE", type: "pill" },
];

export function FeaturedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground italic">It's Back!</h2>
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-3">[ FOR LIMITED TIME ONLY ]</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left: Tall featured card */}
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={featured1} alt="Featured collection" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 to-transparent" />
          <div className="absolute top-6 left-6 right-6">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground leading-tight">Magic timeless by nature, always</h3>
          </div>
          {/* Bottom product info card */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center gap-3">
              <img src={featured1} alt="Product" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="font-display text-sm sm:text-base font-bold text-foreground truncate" style={{ fontStyle: "normal" }}>Gentleman Givenchy</h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1">The latest addition to the collection</p>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">$130.00</span>
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Circle image with text */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square group cursor-pointer bg-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] aspect-square rounded-full overflow-hidden">
                <img src={featured2} alt="Water splash texture" loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs sm:text-sm text-primary-foreground uppercase tracking-[0.2em] font-medium text-center leading-relaxed px-8 py-3 border border-primary-foreground/40">
                VIEW MORE<br />LIMITED EDITION<br />PRODUCTS
              </span>
            </div>
          </motion.div>

          {/* Oriental trail card */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={featured3} alt="Oriental fragrance" loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-black/50 to-transparent" />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-foreground leading-tight">Amazing wrapped in an oriental trail</h3>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center gap-3">
                <img src={featured3} alt="Product" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm sm:text-base font-bold text-foreground truncate" style={{ fontStyle: "normal" }}>Les Benjamins</h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1">Notes of lychee, sweet amber</p>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">$130.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sub-category grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {subCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img src={cat.img} alt={cat.label} loading="lazy" width={640} height={640} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-warm-black/20" />
            <div className="absolute bottom-4 left-4">
              {cat.type === "bracket" ? (
                <span className="text-xs sm:text-sm font-medium text-primary-foreground tracking-wider">[ {cat.label} ]</span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm font-medium text-foreground">
                  {cat.label} <ChevronRight className="w-3 h-3" />
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
