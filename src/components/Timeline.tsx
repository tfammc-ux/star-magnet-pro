import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Trophy } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    period: "Mês 1",
    title: "Arranque",
    text: "As primeiras reviews chegam. O Google começa a indexar o novo padrão de atividade do seu perfil.",
  },
  {
    icon: TrendingUp,
    period: "Mês 2-3",
    title: "Subida no Ranking",
    text: "O seu negócio começa a aparecer em pesquisas locais onde antes era invisível. Mais cliques, mais chamadas, mais visitas.",
  },
  {
    icon: Users,
    period: "Mês 4-5",
    title: "Autoridade Visível",
    text: "Clientes novos mencionam espontaneamente 'vi as vossas avaliações'. O ROI começa a ser mensurável.",
  },
  {
    icon: Trophy,
    period: "Mês 6",
    title: "Pico de ROI",
    text: "Posição consolidada no Google Maps local. A maioria dos clientes sente o impacto máximo neste período.",
  },
];

const Timeline = () => {
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
            O Que Acontece nos Seus 6 Meses de Serviço?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A progressão típica de um negócio que começa do zero.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-8">
          {/* Line */}
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
            <div className="grid grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center pt-0"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gold mb-6 shadow-gold z-10">
                    <m.icon className="w-9 h-9 text-accent-foreground" />
                  </div>
                  <span className="block text-xs font-semibold text-gold mb-1">{m.period}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden space-y-6 max-w-md mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-gold shadow-gold">
                <m.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <span className="text-xs font-semibold text-gold">{m.period}</span>
                <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground/60 mt-8 max-w-2xl mx-auto"
        >
          Os tempos são indicativos e variam com o setor, localização e ponto de partida.
          Negócios com menos de 30 reviews iniciais tendem a ver resultados mais rápidos.
        </motion.p>
      </div>
    </section>
  );
};

export default Timeline;
