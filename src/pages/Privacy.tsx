import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Eye, Server, Trash2, CheckCircle } from "lucide-react";

const privacyPrinciples = [
  {
    icon: Lock,
    title: "Local-Only Storage",
    description: "All your personal data—moods, reflections, and preferences—stays exclusively on your device. We never upload it to our servers.",
  },
  {
    icon: Eye,
    title: "No Tracking",
    description: "We don't use analytics, cookies, or any form of user tracking. Your usage patterns remain completely private.",
  },
  {
    icon: Server,
    title: "No Third-Party Sharing",
    description: "We never sell, share, or transfer your data to third parties. Your emotional well-being data is yours alone.",
  },
  {
    icon: Trash2,
    title: "Full Data Control",
    description: "Delete your data anytime directly from the app. When you delete it, it's truly gone—no hidden backups.",
  },
];

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center mb-8 shadow-soft">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Privacy & Security
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your privacy is{" "}
              <span className="gradient-text">non-negotiable</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dawn Bloom Technologies, we believe your emotional data is
              sacred. That's why we've built our app with privacy as the
              foundation, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {privacyPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              What we <span className="text-destructive">don't</span> do
            </h2>
            <div className="space-y-4">
              {[
                "We don't collect your personal information",
                "We don't track your location",
                "We don't analyze your usage patterns",
                "We don't show targeted advertisements",
                "We don't sell data to third parties",
                "We don't require account creation",
                "We don't store data on external servers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-muted/50 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-sm">✕</span>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              What we <span className="text-primary">do</span> promise
            </h2>
            <div className="space-y-4">
              {[
                "Your data stays on your device",
                "You have full control over your information",
                "You can delete everything at any time",
                "We're transparent about our practices",
                "We prioritize your well-being over metrics",
                "We build features that genuinely help you",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Your trust is our foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand that emotional well-being data is deeply personal.
              That's why we've made the conscious choice to build a business
              model that doesn't rely on exploiting your data. Your privacy
              isn't just a feature—it's our commitment to you.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
