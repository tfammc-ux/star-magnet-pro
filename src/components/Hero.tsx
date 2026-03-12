import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Gestão de reputação online" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-8"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-gold-light">Gestão de Reputação Digital</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-primary-foreground mb-6"
          >
            Mais Reviews.{" "}
            <span className="text-gradient-gold">Mais Clientes.</span>{" "}
            Mais Lucro.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gold-light/70 mb-10 max-w-2xl mx-auto"
          >
            Avaliações reais no Google e comentários no Instagram, entregues mensalmente.
            Aumente a sua reputação online e atraia mais clientes para o seu negócio.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#precos"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-8 py-4 rounded-lg text-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold"
            >
              Ver Planos — Desde 200€/mês
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold-light font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gold/10 transition-colors duration-300"
            >
              Como Funciona?
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gold-light/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <span>Reviews 100% Reais</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Google & Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Sem Contratos Longos</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
