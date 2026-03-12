import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Eye } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "54%",
    label: "Empresas com mais avaliações (do que a média) em todos os sites geram 54% mais receita",
    source: "Google 2025 Consumer Review Survey",
  },
  {
    icon: TrendingUp,
    value: "+108%",
    label: "Se as avaliações forem recentes nas ultimas semanas a faturação pode ser 108% maior",
    source: "Google 2025 Consumer Review Survey",
  },
  {
    icon: Users,
    value: "87%",
    label: "confiam mais em reviews online do que recomendações pessoais",
    source: "Google 2025 Consumer Review Survey",
  },
  {
    icon: Eye,
    value: "+105%",
    label: "Contas de instagram com mais comentários geram mais engagement no Instagram em 105%",
    source: "Meta 2025 Consumer Review Survey",
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
            Reviews positivas são o fator #1 de decisão para novos clientes.
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
