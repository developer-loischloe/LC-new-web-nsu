import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

export function BlogSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-medium text-primary-foreground italic">
            Discover Our Woman's Blog
          </h2>
          <p className="text-sm text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Discover natural beauty wellness and embrace our latest research. Tips on maintaining radiant, healthy skin through blog posts and influencer partnership.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[3/2] group cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={blog1} alt="Beauty editorial" loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[3/2] group cursor-pointer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={blog2} alt="Product collection" loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
