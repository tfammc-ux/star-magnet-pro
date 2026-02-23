import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Star,
    description: "Ideal para pequenos negócios que querem começar",
    originalPrice: "2.000€",
    campaignPrice: "1.200€",
    period: "10 meses",
    perMonth: "120€/mês",
    reviews: "4 reviews/semana",
    featured: false,
    features: [
      "4 avaliações Google por semana",
      "Reviews 100% reais e orgânicas",
      "Relatório mensal de progresso",
      "Suporte por email",
      "Perfil Google otimizado",
    ],
  },
  {
    name: "Profissional",
    icon: Zap,
    description: "O mais popular — máximo impacto no Google",
    originalPrice: "3.500€",
    campaignPrice: "2.100€",
    period: "10 meses",
    perMonth: "210€/mês",
    reviews: "8 reviews/semana",
    featured: true,
    features: [
      "8 avaliações Google por semana",
      "Reviews 100% reais e orgânicas",
      "Gestão de respostas às reviews",
      "Relatório semanal detalhado",
      "Suporte prioritário",
      "Perfil Google otimizado",
      "Estratégia de palavras-chave",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    description: "Google + TripAdvisor — cobertura total",
    originalPrice: "5.000€",
    campaignPrice: "3.000€",
    period: "10 meses",
    perMonth: "300€/mês",
    reviews: "12 reviews/semana",
    featured: false,
    features: [
      "8 avaliações Google por semana",
      "4 avaliações TripAdvisor por semana",
      "Reviews 100% reais e orgânicas",
      "Gestão completa de reputação",
      "Relatório semanal detalhado",
      "Gestor de conta dedicado",
      "Suporte 24/7",
      "Estratégia de palavras-chave",
      "Remoção de reviews negativas*",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-destructive">🔥 Campanha válida até ao final do ano</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preço único por 10 meses. Sem surpresas, sem contratos longos.
            Comece a receber reviews reais esta semana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-gradient-navy text-primary-foreground border-2 border-gold shadow-gold scale-105 z-10"
                  : "bg-card text-card-foreground border border-border shadow-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground text-sm font-bold px-6 py-1.5 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  plan.featured ? "bg-gold/20" : "bg-gradient-gold"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.featured ? "text-gold" : "text-accent-foreground"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-sm line-through ${plan.featured ? "text-primary-foreground/40" : "text-muted-foreground/60"}`}>
                  {plan.originalPrice}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-extrabold ${plan.featured ? "text-gradient-gold" : ""}`}>
                    {plan.campaignPrice}
                  </span>
                </div>
                <div className={`text-sm mt-1 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.perMonth} × {plan.period}
                </div>
                <div className={`inline-block mt-3 text-sm font-semibold px-3 py-1 rounded-full ${
                  plan.featured
                    ? "bg-gold/20 text-gold"
                    : "bg-accent/10 text-accent-foreground"
                }`}>
                  {plan.reviews}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.featured ? "text-gold" : "text-success"}`} />
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center font-bold py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 ${
                  plan.featured
                    ? "bg-gradient-gold text-accent-foreground shadow-gold"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Começar Agora
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * A remoção de reviews negativas está sujeita às políticas do Google/TripAdvisor.
          Pagamento pode ser fracionado.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
