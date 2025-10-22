import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Gradient Tweet work with ChatGPT?",
    answer:
      "Gradient Tweet integrates seamlessly with ChatGPT as a ChatGPT App. Simply type your tweet text in the conversation, choose your gradient style, and get a beautiful tweet image instantly - all without leaving ChatGPT.",
  },
  {
    question: "Do I need design skills to use this?",
    answer:
      "Not at all! Gradient Tweet is designed for everyone. Just type your tweet text and pick a gradient background you like. We handle all the design work to make your tweets look professional and eye-catching.",
  },
  {
    question: "Can I customize the gradients and fonts?",
    answer:
      "Yes! You'll have access to a variety of beautiful gradient backgrounds and professional typography options. Pick what fits your brand and style - no design experience needed.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "Gradient Tweet generates high-quality PNG images optimized for social media platforms like Twitter/X, LinkedIn, and more. The images are ready to download and post immediately.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We're currently in beta and building our waitlist. Early users will get exclusive access and special pricing when we launch. Join the waitlist to be among the first to create stunning tweet images!",
  },
  {
    question: "Why use this instead of Canva or Figma?",
    answer:
      "Gradient Tweet saves you time by letting you create beautiful tweet images without switching apps. No need to open Canva, find templates, or fiddle with design tools. Create directly in ChatGPT where you're already working.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Everything you need to know about Gradient Tweet
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--color-text-heading)] hover:text-[var(--color-ghostteam-green)] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text-muted)] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
