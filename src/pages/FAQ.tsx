import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "About Affirmations",
    questions: [
      {
        question: "What are daily affirmations?",
        answer: "Daily affirmations are positive statements that help you challenge and overcome negative thoughts. When practiced consistently, they can help reprogram your mindset, boost self-esteem, and promote a more positive outlook on life.",
      },
      {
        question: "How do I use the daily affirmations?",
        answer: "Each morning, open Dawn Bloom to receive your personalized affirmation. Read it slowly, take a deep breath, and let the words resonate with you. Many users find it helpful to repeat the affirmation several times throughout the day.",
      },
      {
        question: "Are the affirmations personalized?",
        answer: "Yes! Dawn Bloom tailors affirmations based on your preferences and emotional needs. You can customize categories and themes to receive affirmations that resonate most with your personal growth journey.",
      },
    ],
  },
  {
    category: "Mood Tracking",
    questions: [
      {
        question: "How does mood tracking work?",
        answer: "Mood tracking in Dawn Bloom is simple and quick. You'll select an emoji or mood level that reflects how you're feeling, optionally add notes, and the app tracks this over time to reveal patterns and insights.",
      },
      {
        question: "How often should I log my mood?",
        answer: "We recommend logging at least once a day, but you can check in as often as you like. Many users find it helpful to log in the morning, afternoon, and evening to get a fuller picture of their emotional patterns.",
      },
      {
        question: "What can I learn from my mood data?",
        answer: "Over time, you'll discover patterns in your emotional life—such as what days of the week tend to be more challenging, how your mood changes throughout the day, and what activities or circumstances affect your well-being.",
      },
    ],
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        question: "Is my data private?",
        answer: "Absolutely. All your personal data stays on your device and is never uploaded to our servers. We don't track, analyze, or share any of your information. Your privacy is our top priority.",
      },
      {
        question: "Can I delete my data?",
        answer: "Yes, you have full control over your data. You can delete individual entries or all your data at any time directly within the app. When you delete it, it's truly gone—no hidden backups.",
      },
      {
        question: "Do you sell my data to third parties?",
        answer: "Never. We don't collect your data, so there's nothing to sell. Our business model doesn't rely on advertising or data monetization. We make money through the app, not through your personal information.",
      },
    ],
  },
  {
    category: "App Usage",
    questions: [
      {
        question: "Is Dawn Bloom free?",
        answer: "Dawn Bloom offers a generous free tier with core features. Premium features are available through a subscription that helps support ongoing development and keeps the app ad-free.",
      },
      {
        question: "What devices is Dawn Bloom available on?",
        answer: "Dawn Bloom is available for iOS and Android devices. You can download it from the App Store or Google Play Store.",
      },
      {
        question: "How do I get support?",
        answer: "For any questions or issues, you can reach us at xiangdee2705@gmail.com or through the Contact page on our website. We typically respond within 24-48 hours.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center mb-8 shadow-soft">
              <HelpCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <span className="inline-block text-sm font-medium text-primary mb-4">
              FAQs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about Dawn Bloom, affirmations,
              mood tracking, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
