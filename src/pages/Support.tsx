import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Mail, HelpCircle, ArrowRight } from "lucide-react";

const supportCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "New to Dawn Bloom? Learn how to set up the app and make the most of your daily practice.",
    articles: ["How to download and install", "Setting up your profile", "Your first affirmation"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Having issues? Find solutions to common problems and technical questions.",
    articles: ["App not loading", "Notifications not working", "Syncing issues"],
  },
  {
    icon: MessageCircle,
    title: "Using Features",
    description: "Learn how to use all of Dawn Bloom's features to support your well-being.",
    articles: ["Using mood tracking", "Customizing affirmations", "Viewing your progress"],
  },
];

export default function Support() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Help Center
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How can we <span className="gradient-text">help you</span>?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers, guides, and support resources to help you get the
              most out of Dawn Bloom.
            </p>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl gradient-dawn flex items-center justify-center mb-6 shadow-soft">
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article} className="text-sm text-primary hover:underline cursor-pointer flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/faq" className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover-lift flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">FAQs</h3>
                  <p className="text-sm text-muted-foreground">Common questions answered</p>
                </div>
              </Link>
              <Link to="/contact" className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover-lift flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">Get in touch with our team</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Still need help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here for you. Reach out and we'll respond within 24-48 hours.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
