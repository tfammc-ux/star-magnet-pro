import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As reviews e comentários são reais?",
    answer: "Sim, absolutamente. Todas as avaliações no Google e comentários no Instagram são feitos por pessoas reais que interagem genuinamente com o seu negócio. Não utilizamos bots ou reviews falsas, garantindo total conformidade com as políticas das plataformas.",
  },
  {
    question: "Quanto tempo demora a ver resultados?",
    answer: "Os resultados começam a ser visíveis logo na primeira semana. Em média, os nossos clientes veem um aumento significativo no ranking do Google e no engagement do Instagram em 4 a 6 semanas.",
  },
  {
    question: "O que acontece depois dos 10 meses?",
    answer: "Após os 10 meses da campanha, pode renovar ao preço regular ou simplesmente continuar a beneficiar das centenas de reviews e comentários acumulados. Sem obrigações nem renovações automáticas.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer: "Sim! Restaurantes, hotéis, clínicas, lojas, escritórios de serviços — qualquer negócio com presença no Google beneficia de mais avaliações positivas. Para negócios com forte presença visual, os comentários no Instagram são especialmente eficazes.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "O nosso compromisso é de transparência total. Embora o pagamento seja único para os 10 meses (com possibilidade de fracionamento), garantimos resultados desde a primeira semana.",
  },
  {
    question: "Como é feito o pagamento?",
    answer: "O pagamento pode ser feito por transferência bancária ou MBWay. Oferecemos a possibilidade de fracionamento em até 3 vezes sem juros para a sua conveniência.",
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
          <p className="text-muted-foreground text-lg">
            Tudo o que precisa de saber antes de começar
          </p>
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
      </div>
    </section>
  );
};

export default FAQ;
