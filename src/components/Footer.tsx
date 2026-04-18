import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="font-display text-lg sm:text-xl font-bold text-foreground"
          style={{ fontStyle: "normal" }}
          whileHover={{ scale: 1.05 }}
        >
          olivia shop
        </motion.span>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {["Skincare", "Body", "Shop", "Community", "Contacts"].map((item, i) => (
            <motion.span
              key={item}
              className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer uppercase tracking-wider relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.span>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[Instagram, Twitter, Facebook].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
          <span className="text-xs text-muted-foreground ml-2">EN · $</span>
        </div>
      </motion.div>
    </footer>
  );
}
