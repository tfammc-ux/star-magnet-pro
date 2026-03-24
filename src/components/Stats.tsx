import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Eye } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "97%",
    label: "dos consumidores lêem reviews online antes de escolher um negócio local",
    source: "BrightLocal Local Consumer Review Survey, 2026",
  },
  {
    icon: TrendingUp,
    value: "+20%",
    label: "de aumento de receita por cada 0,5 estrelas a mais no Google Maps",
    source: "Harvard Business School & SocialPilot, 2025",
  },
  {
    icon: Star,
    value: "88%",
    label: "dos consumidores confiam nas reviews do Google tanto quanto numa recomendação pessoal",
    source: "Podium Consumer Reviews Report, 2025",
  },
  {
    icon: Eye,
    value: "270×",
    label: "mais probabilidade de venda em negócios com 5 ou mais reviews vs. negócios sem nenhuma",
    source: "Northwestern University Spiegel Research Center",
  },
];

const Stats = () => {
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
            Os Números Não Mentem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reviews positivas são o fator nº 1 de decisão para novos clientes.
            Veja o impacto comprovado no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-xl border border-border bg-card p-8 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-gold mb-5">
                <stat.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-4xl font-extrabold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {stat.label}
              </p>
              <span className="text-xs text-muted-foreground/60">Fonte: {stat.source}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
