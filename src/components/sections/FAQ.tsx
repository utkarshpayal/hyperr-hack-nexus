import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to developers, designers, entrepreneurs, and tech enthusiasts of all skill levels. You can participate as an individual or form teams of up to 4 members."
    },
    {
      question: "What are the requirements to join?",
      answer: "You need a laptop, basic programming knowledge, and enthusiasm for innovation. We'll provide development environments, APIs, and mentorship to help you succeed."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! The hackathon is completely free to participate. We provide meals, snacks, swag, and all the resources you need during the event."
    },
    {
      question: "Can I work on an existing project?",
      answer: "No, all projects must be started from scratch during the hackathon period. However, you can use existing libraries, frameworks, and APIs in your solution."
    },
    {
      question: "What technology stacks can I use?",
      answer: "You're free to use any programming languages, frameworks, or tools you're comfortable with. We'll provide access to cloud computing resources and GPU clusters."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, business potential, presentation quality, and alignment with the hackathon themes."
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! We'll have team formation sessions at the beginning of the event. You can also participate as a solo developer if you prefer."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes! Industry experts and Hyperrcompute engineers will be available throughout the event to provide guidance, answer questions, and help with technical challenges."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Got questions? We've got answers to help you prepare for the hackathon
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-border/30 hover:shadow-glow-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl mb-4">
              Still Have <span className="text-gradient">Questions?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Reach out through any of our channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hackathon@hyperrcompute.com" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                hackathon@hyperrcompute.com
              </a>
              <span className="hidden sm:block">•</span>
              <a 
                href="#" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Discord Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};