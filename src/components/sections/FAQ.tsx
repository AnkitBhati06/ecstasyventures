import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does equity partnership mean?",
    answer: "We become co-founders by taking an equity stake in exchange for providing complete infrastructure. We succeed only when you succeed. This alignment ensures we're fully invested in your growth.",
  },
  {
    question: "Do you work with every startup that applies?",
    answer: "No. We're highly selective and partner with 5-10 startups per year that show high growth potential and founder-market fit. Quality over quantity is our approach.",
  },
  {
    question: "How much equity do you typically take?",
    answer: "It varies based on stage and needs, typically 15-30%. We discuss this transparently during discovery calls. The structure is designed to be fair and aligned with the value we bring.",
  },
  {
    question: "Do I need to be in India?",
    answer: "While we focus on Indian startups, we consider exceptional founders globally who are solving India-relevant problems or building for the Indian market.",
  },
  {
    question: "How long does the application process take?",
    answer: "We review applications within 3 business days. Full partnership process from application to onboarding takes 2-4 weeks, depending on due diligence and alignment discussions.",
  },
  {
    question: "What if I'm still validating my idea?",
    answer: "Perfect! We help with validation. But we look for founders who are action-oriented, not stuck in analysis paralysis. We want partners who can move fast once validated.",
  },
  {
    question: "Can I apply if I already have a co-founder?",
    answer: "Absolutely! We partner with solo founders and founding teams alike. We complement your existing team with the skills and resources you're missing.",
  },
  {
    question: "What happens after I submit the application?",
    answer: "We review your submission, then reach out via email within 3 business days to either schedule a discovery call or provide constructive feedback on your application.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Common Questions
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-[var(--shadow-sm)]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
