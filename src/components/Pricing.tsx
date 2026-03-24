import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Star,
    description: "Ideal para pequenos negócios que querem começar a construir autoridade no Google",
    price: "300€",
    period: "/mês",
    featured: false,
    packNote: "Pack 6 meses: 1.200€ — poupa 600€",
    cta: "Começar Agora",
    features: [
      "40 classificações Google por mês",
      "20 avaliações escritas Google por mês",
      "Reviews 100% reais de contas portuguesas",
      "Linguagem adaptada ao seu setor",
      "Suporte por email e WhatsApp",
    ],
  },
  {
    name: "Profissional",
    icon: Zap,
    description: "O mais escolhido — impacto máximo no Google e aceleração do ranking local",
    price: "500€",
    period: "/mês",
    featured: true,
    packNote: "Pack 6 meses: 2.000€ — poupa 1.000€",
    cta: "Escolher Profissional",
    features: [
      "80 classificações Google por mês",
      "40 avaliações escritas Google por mês",
      "Reviews 100% reais de contas portuguesas",
      "Linguagem adaptada ao seu setor",
      "Relatório mensal de progresso",
      "Suporte prioritário por email e WhatsApp",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    description: "Para negócios que querem dominar o Google Maps na sua zona e não dar hipótese à concorrência",
    price: "750€",
    period: "/mês",
    featured: false,
    packNote: "Pack 6 meses: 3.000€ — poupa 1.500€",
    cta: "Escolher Premium",
    features: [
      "120 classificações Google por mês",
      "100 avaliações escritas Google por mês",
      "Reviews 100% reais de contas portuguesas",
      "Linguagem adaptada ao seu setor",
      "Relatório mensal de progresso detalhado",
      "Gestor de conta dedicado",
      "Suporte prioritário 7 dias/semana",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="rounded-xl border border-gold/30 bg-gold/5 px-6 py-4 text-center">
            <p className="text-sm font-semibold text-foreground">
              ⚠️ Aos valores apresentados acresce IVA à taxa legal em vigor.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Escolha o Seu Plano Google Reviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reviews 100% reais de contas portuguesas. Entregues mensalmente.
            Sem contratos longos.
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
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.featured ? "text-gradient-gold" : ""}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
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
                {plan.cta}
              </a>

              <p className={`text-center text-xs mt-3 ${plan.featured ? "text-gold/80" : "text-muted-foreground/60"}`}>
                {plan.packNote}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Os preços apresentados não incluem IVA. Pagamento efetuado via Transferência ou MBWay.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
