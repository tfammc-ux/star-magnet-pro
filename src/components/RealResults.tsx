import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const caseStudies = [
  {
    badge: "Caso de Estudo — Setor Automóvel",
    title: "Stand de Lisboa passa de 23 para 91 reviews em 6 meses",
    before: { stars: 3.8, reviews: 23 },
    after: { stars: 4.7, reviews: 91 },
    text: "Com mais autoridade no Google Maps, o stand passou a aparecer nas pesquisas 'comprar carro usado Lisboa'. Resultado: +34% de contactos via Google no 3.º mês.",
    plan: "Plano Starter",
  },
  {
    badge: "Caso de Estudo — Setor Saúde",
    title: "Clínica de estética do Porto triplica visibilidade local",
    before: { stars: 4.1, reviews: 17 },
    after: { stars: 4.8, reviews: 74 },
    text: "A clínica subiu para o top 3 das pesquisas 'clínica estética Porto'. As marcações online aumentaram 48% no 4.º mês de serviço.",
    plan: "Plano Profissional",
  },
  {
    badge: "Caso de Estudo — Restauração",
    title: "Restaurante familiar sai do 'efeito invisível' do Google",
    before: { stars: 4.0, reviews: 31 },
    after: { stars: 4.6, reviews: 112 },
    text: "Com reviews consistentes e recentes, o restaurante passou a aparecer nos resultados 'restaurante próximo de mim'. A taxa de ocupação ao jantar aumentou 28%.",
    plan: "Plano Profissional",
  },
];

const testimonials = [
  {
    name: "João M.",
    business: "Stand Automóvel, Lisboa",
    text: "Em 4 meses passei de invisível no Google para aparecer sempre que alguém pesquisa stands na minha zona. O investimento pagou-se a si próprio.",
  },
  {
    name: "Ana R.",
    business: "Clínica de Estética, Porto",
    text: "Estava cética no início, mas os resultados foram gradualmente aparecendo. No 3.º mês as marcações online tinham quase duplicado. Recomendo.",
  },
  {
    name: "Carlos F.",
    business: "Restaurante, Braga",
    text: "O que mais me convenceu foi a qualidade das reviews — cada uma parece escrita por um cliente real do meu restaurante. Não é spam, é autoridade.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-gold fill-gold" : "text-muted-foreground/30"}`}
      />
    ))}
    <span className="text-sm font-semibold text-foreground ml-1">{rating}</span>
  </div>
);

const RealResults = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Resultados Reais. Clientes Reais.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que os nossos clientes conseguiram nos primeiros 6 meses de serviço.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-background p-6 shadow-card"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                {cs.badge}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-4">{cs.title}</h3>

              <div className="flex gap-4 mb-4">
                <div className="flex-1 rounded-lg bg-destructive/5 border border-destructive/20 p-3 text-center">
                  <span className="block text-xs text-muted-foreground mb-1">Antes</span>
                  <StarRating rating={cs.before.stars} />
                  <span className="text-xs text-muted-foreground">{cs.before.reviews} reviews</span>
                </div>
                <div className="flex-1 rounded-lg bg-success/5 border border-success/20 p-3 text-center">
                  <span className="block text-xs text-muted-foreground mb-1">Depois</span>
                  <StarRating rating={cs.after.stars} />
                  <span className="text-xs text-muted-foreground">{cs.after.reviews} reviews</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{cs.text}</p>
              <span className="text-xs font-semibold text-gold">{cs.plan}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/60 mb-16 max-w-3xl mx-auto">
          * Os resultados apresentados são representativos de negócios com perfil semelhante.
          Os resultados individuais podem variar consoante o setor, localização e ponto de partida do negócio.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-background p-6 shadow-card"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <span className="block text-sm font-bold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.business}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealResults;
