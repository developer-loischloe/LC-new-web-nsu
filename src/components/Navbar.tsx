import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Skincare", "Body", "Shop", "Community", "Contacts"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link to="/" className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          oléo.shop
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <span key={item} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-foreground cursor-pointer" strokeWidth={1.5} />
          <ShoppingBag className="w-5 h-5 text-foreground cursor-pointer" strokeWidth={1.5} />
          <button
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <span
                  key={item}
                  className="py-3 text-base font-medium text-foreground border-b border-border/50 last:border-0 cursor-pointer hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </span>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
