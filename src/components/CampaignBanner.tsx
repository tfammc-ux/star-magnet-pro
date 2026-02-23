import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const CampaignBanner = () => {
  return (
    <section className="py-16 bg-gradient-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Oferta válida até ao final de 2026</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Poupe até{" "}
            <span className="text-gradient-gold">40%</span>{" "}
            na Sua Reputação Online
          </h2>

          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Campanha especial: 10 meses de serviço por um preço único.
            Sem renovações automáticas. Resultados garantidos desde a primeira semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="text-center">
              <span className="block text-primary-foreground/40 text-sm line-through">A partir de 2.000€</span>
              <span className="block text-4xl font-extrabold text-gradient-gold">1.200€</span>
              <span className="block text-primary-foreground/60 text-sm">Preço de campanha</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gold hidden sm:block" />
            <div className="text-center">
              <span className="block text-primary-foreground/60 text-sm">Apenas</span>
              <span className="block text-4xl font-extrabold text-primary-foreground">120€</span>
              <span className="block text-primary-foreground/60 text-sm">por mês</span>
            </div>
          </div>

          <a
            href="#precos"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-10 py-4 rounded-lg text-lg shadow-gold hover:scale-105 transition-transform duration-300"
          >
            Aproveitar Oferta
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignBanner;
