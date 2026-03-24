import { motion } from "framer-motion";
import { Clock, ArrowRight, Zap } from "lucide-react";

const packs = [
  {
    name: "Starter",
    monthly: "300€/mês",
    pack: "1.200€",
    saving: "Poupa 600€",
    featured: false,
  },
  {
    name: "Profissional",
    monthly: "500€/mês",
    pack: "2.000€",
    saving: "Poupa 1.000€",
    featured: true,
  },
  {
    name: "Premium",
    monthly: "750€/mês",
    pack: "3.000€",
    saving: "Poupa 1.500€",
    featured: false,
  },
];

const SpecialOffer = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Oferta Limitada</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Oferta Especial —{" "}
            <span className="text-gradient-gold">Pack 6 Meses</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Pague 6 meses de uma vez e poupe o equivalente a 2 meses grátis.
            Sem renovação automática.
          </p>
        </motion.div>

        {/* Why 6 months */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="rounded-xl border border-gold/30 bg-gold/5 px-6 py-5 text-center">
            <p className="text-sm font-semibold text-primary-foreground mb-2">
              Porquê o Pack 6 Meses?
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              O Google privilegia negócios com reviews consistentes ao longo do tempo.
              6 meses é o período ideal para o algoritmo reconhecer a sua autoridade
              e o cliente sentir o verdadeiro ROI.
            </p>
          </div>
        </motion.div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 text-center ${
                pack.featured
                  ? "border-2 border-gold bg-white/10 scale-105 z-10"
                  : "border border-primary-foreground/20 bg-white/5"
              }`}
            >
              {pack.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{pack.name}</h3>
              <span className="block text-sm text-primary-foreground/40 line-through">{pack.monthly} × 6 = {
                pack.name === "Starter" ? "1.800€" : pack.name === "Profissional" ? "3.000€" : "4.500€"
              }</span>
              <span className="block text-4xl font-extrabold text-gradient-gold my-2">{pack.pack}</span>
              <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-success/20 text-success mb-4">
                {pack.saving}
              </span>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 ${
                  pack.featured
                    ? "bg-gradient-gold text-accent-foreground shadow-gold"
                    : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
                }`}
              >
                Quero Este Pack
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
