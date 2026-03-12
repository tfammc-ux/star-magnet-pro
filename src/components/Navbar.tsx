import { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-gold/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Star className="w-5 h-5 text-gold fill-gold" />
          <span className="text-lg font-bold text-primary-foreground">
            thebestreview<span className="text-gold">.pt</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/70">
          <a href="#precos" className="hover:text-gold transition-colors">Planos</a>
          <a href="#como-funciona" className="hover:text-gold transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          <a
            href="#precos"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <span className="text-xs">🔥</span>
            <span>Oferta Limitada desde 100€/mês</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark/95 backdrop-blur-lg border-t border-gold/10"
          >
            <nav className="container flex flex-col gap-4 py-6 text-primary-foreground/70">
              <a href="#precos" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Planos</a>
              <a href="#como-funciona" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Como Funciona</a>
              <a href="#faq" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">FAQ</a>
              <a
                href="#precos"
                onClick={() => setOpen(false)}
                className="bg-gradient-gold text-accent-foreground font-semibold px-5 py-2 rounded-lg text-center"
              >
                Começar Agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
