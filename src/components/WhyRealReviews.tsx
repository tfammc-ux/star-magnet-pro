import { motion } from "framer-motion";
import { Shield, AlertTriangle, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Contas Portuguesas Reais",
    text: "Todas as reviews são feitas por perfis reais de utilizadores portugueses. O Google reconhece a autenticidade e valoriza o seu negócio no ranking local.",
  },
  {
    icon: AlertTriangle,
    title: "Reviews Falsas Penalizam",
    text: "O Google removeu mais de 240 milhões de reviews falsas em 2024. Negócios apanhados são penalizados ou removidos dos resultados. Nós eliminamos esse risco.",
  },
  {
    icon: TrendingUp,
    title: "Algoritmo + Cliente Final",
    text: "Reviews reais e recentes ativam dois motores: o algoritmo do Google que lhe mostra mais vezes, e o cliente final que confia mais e decide comprar.",
  },
];

const WhyRealReviews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Por que Reviews Reais Fazem a Diferença?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não somos uma fábrica de reviews falsas. E isso protege o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-gold mb-5">
                <card.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRealReviews;
