import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import blogHero from "@/assets/blog-hero.jpg";

export function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        <motion.img
          src={blogHero}
          alt="Beauty editorial"
          loading="lazy"
          width={1920}
          height={1080}
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/40" />
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6" style={{ fontStyle: "normal" }}>
            Discover Our Woman's Blog
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Dive into a world of beauty, wellness, and self-care with expert tips, in-depth skincare advice, makeup trends, and holistic health insights designed to help you look and feel your best every day
          </p>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/30 transition-colors">
            DISCOVER
          </button>
        </motion.div>
      </div>
    </section>
  );
}
