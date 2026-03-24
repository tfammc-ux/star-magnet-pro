import { motion } from "framer-motion";
import { MessageSquare, Users, TrendingUp, Shield } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Contacte-nos",
    description: "Entre em contacto connosco para analisarmos o seu negócio e identificarmos as suas necessidades de reputação online.",
  },
  {
    icon: Shield,
    title: "Escolha o Plano",
    description: "Selecione o plano ideal de Google Reviews para o seu negócio — Starter, Profissional ou Premium.",
  },
  {
    icon: Users,
    title: "Efetue o Pagamento",
    description: "Após a escolha do plano, efetue o pagamento por transferência bancária ou MBWay e comece de imediato.",
  },
  {
    icon: TrendingUp,
    title: "Receba Reviews",
    description: "Receba avaliações reais no Google de forma consistente todos os meses, consoante o plano que aderiu.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Como Funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo simples e transparente em 4 passos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold to-gold/20" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gold mb-6 shadow-gold">
                <step.icon className="w-9 h-9 text-accent-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
