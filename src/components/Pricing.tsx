import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Instagram } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Star,
    description: "Ideal para pequenos negócios que querem começar",
    originalPrice: "300€",
    campaignPrice: "200€",
    period: "/mês",
    reviews: "10 reviews/mês",
    featured: false,
    features: [
      "20 classificações Google por mês",
      "10 avaliações Google por mês",
      "Reviews 100% reais e orgânicas",
      "Suporte por email e WhatsApp",
      "Preço de desconto apenas para adesão de 3 meses de subscrição",
    ],
  },
  {
    name: "Profissional",
    icon: Zap,
    description: "O mais popular — máximo impacto no Google",
    originalPrice: "400€",
    campaignPrice: "300€",
    period: "/mês",
    reviews: "20 reviews/mês",
    featured: true,
    features: [
      "40 classificações Google por mês",
      "20 avaliações Google por mês",
      "Reviews 100% reais e orgânicas",
      "Suporte por email e WhatsApp",
      "Preço de desconto apenas para adesão de 3 meses de subscrição",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    description: "Google — Ultra alcance",
    originalPrice: "500€",
    campaignPrice: "400€",
    period: "/mês",
    reviews: "40 reviews/mês",
    featured: false,
    features: [
      "80 classificações Google por mês",
      "40 avaliações Google por mês",
      "Reviews 100% reais e orgânicas",
      "Suporte por email e WhatsApp",
      "Preço de desconto apenas para adesão de 3 meses de subscrição",
    ],
  },
];

const instagramPlans = [
  {
    name: "Instagram Basic",
    comments: "20 comentários/mês",
    price: "150€",
    originalPrice: "250€",
    features: [
      "20 comentários reais no Instagram",
      "Comentários relevantes e personalizados",
      "Aumento de engagement orgânico",
      "Suporte por email e WhatsApp",
    ],
  },
  {
    name: "Instagram Pro",
    comments: "50 comentários/mês",
    price: "300€",
    originalPrice: "450€",
    features: [
      "50 comentários reais no Instagram",
      "Comentários relevantes e personalizados",
      "Aumento de engagement e alcance",
      "Estratégia de hashtags e interação",
      "Suporte prioritário",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container">
        {/* IVA Notice - Prominent */}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-destructive">🔥 Oferta de Lançamento — Vagas Limitadas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Poupe na subscrição mensal. Sem surpresas, sem contratos longos.
            Comece a receber reviews reais esta semana.
          </p>
        </motion.div>

        {/* Google Reviews Plans */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          📍 Google Reviews
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.featured ? "text-gradient-gold" : ""}`}>
                    {plan.campaignPrice}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
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
                Aproveitar Oferta
              </a>
            </motion.div>
          ))}
        </div>

        {/* Instagram Comentários */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">
            📸 Instagram Comentários
          </h3>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Aumente o engagement do seu Instagram com comentários reais e relevantes. Combine com um plano Google para resultados máximos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {instagramPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl p-8 flex flex-col bg-card text-card-foreground border border-border shadow-card hover:border-gold/40 transition-colors"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-1">{plan.name}</h4>
                <div className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent-foreground">
                  {plan.comments}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm line-through text-muted-foreground/60">
                  {plan.originalPrice}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-success" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center font-bold py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground hover:opacity-90"
              >
                Aproveitar Oferta
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
          * O apoio na remoção de reviews negativas segue as diretrizes das plataformas.
          Os preços apresentados não incluem IVA. Pagamento efetuado via Transferência ou MBWay.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
