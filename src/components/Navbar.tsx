import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, User, ShoppingCart, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import catParfums from "@/assets/cat-parfums.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catMedical from "@/assets/cat-medical.jpg";
import catMakeup from "@/assets/cat-makeup.jpg";
import catMens from "@/assets/cat-mens.jpg";
import catBodycare from "@/assets/cat-bodycare.jpg";

const categories = [
  { img: catParfums, label: "PARFUMS" },
  { img: catSkincare, label: "SKINCARE" },
  { img: catMedical, label: "MEDICAL COSMETIC" },
  { img: catMakeup, label: "MAKEUP" },
  { img: catMens, label: "MEN'S CARE" },
  { img: catBodycare, label: "BODY CARE" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground uppercase" style={{ fontStyle: "normal" }}>
            LOIS CHLOE
          </Link>
          <button
            className="absolute left-1/2 -translate-x-1/2 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block w-6 h-[1.5px] bg-foreground" />
              <span className="block w-6 h-[1.5px] bg-foreground" />
            </div>
          </button>
          <div className="flex items-center gap-3 sm:gap-4">
            <Search className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-foreground cursor-pointer" strokeWidth={1.5} />
            <User className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-foreground cursor-pointer" strokeWidth={1.5} />
            <ShoppingCart className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-foreground cursor-pointer" strokeWidth={1.5} />
          </div>
        </div>
      </header>

      {/* Fullscreen category overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex justify-center pt-6 sm:pt-8">
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" strokeWidth={1.5} />
              </button>
            </div>
            <div className="max-w-4xl mx-auto px-6 pt-8 sm:pt-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.label}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                      <img
                        src={cat.img}
                        alt={cat.label}
                        loading="lazy"
                        width={640}
                        height={640}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wider text-foreground uppercase">
                      {cat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
