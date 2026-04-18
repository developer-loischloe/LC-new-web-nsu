import { useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";
import insta1 from "@/assets/popular-1.jpg";
import insta2 from "@/assets/popular-2.jpg";
import insta3 from "@/assets/popular-3.jpg";
import insta4 from "@/assets/popular-4.jpg";
import insta5 from "@/assets/foryou-1.jpg";
import insta6 from "@/assets/foryou-2.jpg";

const HANDLE = "@loischloe_bangladesh";
const PROFILE_URL = "https://www.instagram.com/loischloe_bangladesh/";

const posts = [
  { img: insta1, likes: "2.4k", handle: HANDLE },
  { img: insta2, likes: "1.8k", handle: HANDLE },
  { img: insta3, likes: "3.1k", handle: HANDLE },
  { img: insta4, likes: "967", handle: HANDLE },
  { img: insta5, likes: "4.2k", handle: HANDLE },
  { img: insta6, likes: "2.0k", handle: HANDLE },
];

export function InstagramFeed() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/60 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Instagram className="w-3.5 h-3.5 text-foreground" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground font-medium">
            Follow us {HANDLE}
          </span>
        </motion.div>
        <h2
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
          style={{ fontStyle: "normal" }}
        >
          What's Trending on Instagram
        </h2>
      </motion.div>

      {/* Responsive grid */}
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href="#"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary cursor-pointer"
            initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={post.img}
              alt={`Instagram post ${i + 1}`}
              loading="lazy"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              whileHover={{ scale: 1.12 }}
            />
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-warm-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4"
            >
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span className="text-xs font-semibold">{post.likes}</span>
              </div>
              <span className="text-[10px] text-white/80 mt-0.5">{post.handle}</span>
            </motion.div>
            {/* Instagram corner icon */}
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="w-3.5 h-3.5 text-foreground" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-10 sm:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-foreground text-background text-xs sm:text-sm font-semibold uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </motion.a>
      </motion.div>
    </section>
  );
}
