import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As reviews são reais ou podem ser removidas pelo Google?",
    answer: "Todas as reviews são feitas por perfis reais de utilizadores portugueses com histórico de atividade. Não usamos bots nem contas falsas. Isso reduz significativamente o risco de remoção. Em casos excecionais, substituímos gratuitamente qualquer review removida durante o período de serviço.",
  },
  {
    question: "Quanto tempo demora a ver resultados?",
    answer: "A maioria dos clientes começa a notar diferença a partir do 2.º mês. O pico de impacto acontece geralmente entre o 4.º e o 6.º mês, quando o Google consolida a nova autoridade do perfil. Negócios que partem de menos de 30 reviews tendem a ver resultados mais rápidos.",
  },
  {
    question: "Isto é legal?",
    answer: "O nosso serviço baseia-se em reviews de pessoas reais que partilham a sua opinião genuína. Trabalhamos dentro dos princípios de marketing de reputação. Não garantimos nem incentivamos avaliações falsas — o que nos diferencia de 90% da concorrência.",
  },
  {
    question: "Tenho de assinar um contrato longo?",
    answer: "Não. O plano mensal não tem compromisso de longo prazo. O pack de 6 meses é pago de uma vez com desconto mas não tem renovação automática. Você controla sempre.",
  },
  {
    question: "As reviews são adaptadas ao meu tipo de negócio?",
    answer: "Sim. Antes de iniciar o serviço, fazemos um briefing do seu negócio — setor, localização, pontos fortes, serviços principais. As reviews são escritas com linguagem natural e específica para o seu caso, não textos genéricos.",
  },
  {
    question: "Qual é a diferença entre 'classificação' e 'avaliação escrita'?",
    answer: "Uma classificação é apenas a atribuição de estrelas (1 a 5) sem texto. Uma avaliação escrita inclui estrelas e um comentário descritivo. As avaliações escritas têm mais peso no algoritmo do Google e mais impacto na decisão do cliente final.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground/60 mt-6"
        >
          Aos valores apresentados acresce IVA à taxa legal em vigor.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
