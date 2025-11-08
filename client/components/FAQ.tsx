import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "When will Sentra launch?",
    answer:
      "We're entering our testing phase soon. Early waitlist members will receive invites first.",
  },
  {
    id: 2,
    question: "Is Sentra a browser extension or mobile app?",
    answer:
      "Sentra launches as a browser extension first, with mobile apps coming later.",
  },
  {
    id: 3,
    question: "How does Sentra's AI detect scams?",
    answer:
      "The AI scans contract code and permissions in real time, detecting risky patterns before confirmation.",
  },
  {
    id: 4,
    question: "Do you store user data or private keys?",
    answer:
      "No. Sentra is fully local — your keys and wallet data never leave your device.",
  },
  {
    id: 5,
    question: "Will Sentra be free?",
    answer:
      "Yes. Core wallet features are free; advanced AI analytics may become premium later.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70">
            Everything you need to know about Sentra Wallet
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-accent transition-transform flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-4 pt-0 border-t border-border/50 animate-slide-up">
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
