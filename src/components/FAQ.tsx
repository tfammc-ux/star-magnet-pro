import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As reviews e comentários são de pessoas reais?",
    answer: "Sim, absolutamente. Todas as avaliações no Google e comentários no Instagram são feitos por pessoas reais que interagem genuinamente com o seu negócio. Não utilizamos bots ou reviews falsas, garantindo total conformidade com as políticas das plataformas.",
  },
  {
    question: "Em quanto tempo vejo os primeiros resultados?",
    answer: "Os resultados começam a aparecer logo na primeira semana. O seu perfil começa a receber novas avaliações de forma cadenciada para manter a naturalidade e relevância perante os algoritmos das plataformas.",
  },
  {
    question: "Como é feito o pagamento?",
    answer: "O pagamento pode ser feito por transferência bancária ou MBWay. Os preços indicados são mensais e não incluem IVA à taxa legal em vigor.",
  },
  {
    question: "O que acontece após os packs de campanha?",
    answer: "Após o período de campanha, pode renovar ao preço regular ou simplesmente continuar a beneficiar das reviews e comentários acumulados. Sem obrigações nem renovações automáticas.",
  },
  {
    question: "Posso cancelar o serviço a qualquer momento?",
    answer: "O nosso compromisso é de transparência total. Os planos mensais não têm fidelização nem renovação automática — pode cancelar quando quiser. O plano anual de 12 meses também não renova automaticamente: o compromisso é apenas para o período contratado, pago integralmente no início. Após esse período, fica livre para decidir se pretende continuar ou não.",
  },
  {
    question: "Posso combinar Google Reviews com Instagram?",
    answer: "Sim! Pode subscrever um plano de Google Reviews e adicionar um pack de Instagram Comentários para maximizar a sua presença online em ambas as plataformas. Contacte-nos para um pacote personalizado.",
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
            Tudo o que precisa de saber para elevar a reputação do seu negócio.
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
