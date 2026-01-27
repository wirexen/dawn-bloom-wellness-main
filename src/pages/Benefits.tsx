import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Brain, Heart, Shield, Zap, Moon, Smile } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Improved Self-Awareness",
    description: "Regular mood tracking helps you understand your emotional patterns, triggers, and responses. This awareness is the foundation of emotional intelligence.",
  },
  {
    icon: Heart,
    title: "Reduced Daily Stress",
    description: "Daily affirmations and mindful check-ins help regulate your nervous system, reducing anxiety and promoting calm throughout your day.",
  },
  {
    icon: Zap,
    title: "Positive Habit Formation",
    description: "Build a sustainable morning routine that sets a positive tone for your entire day. Small consistent actions lead to lasting change.",
  },
  {
    icon: Shield,
    title: "Emotional Resilience",
    description: "Develop the mental strength to navigate life's challenges with greater ease and bounce back from setbacks more quickly.",
  },
  {
    icon: Moon,
    title: "Better Sleep Quality",
    description: "Evening reflection and reduced stress levels contribute to more restful sleep and improved overall well-being.",
  },
  {
    icon: Smile,
    title: "Increased Life Satisfaction",
    description: "Users report feeling more content, grateful, and optimistic about their lives after consistent use of Dawn Bloom.",
  },
];

const stats = [
  { value: "87%", label: "feel calmer within 2 weeks" },
  { value: "92%", label: "report better self-awareness" },
  { value: "78%", label: "experience reduced anxiety" },
  { value: "95%", label: "recommend to friends" },
];

export default function Benefits() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Benefits
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transform your{" "}
              <span className="gradient-text">emotional life</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the science-backed benefits of daily affirmations and mood
              tracking. Small daily practices lead to profound, lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl gradient-dawn flex items-center justify-center mb-6 shadow-soft">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Backed by research
              </h2>
              <p className="text-lg text-muted-foreground">
                The practices in Dawn Bloom are grounded in positive psychology
                and emotional wellness research.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Daily affirmations have been shown to reduce stress and improve self-esteem",
                "Mood tracking increases emotional awareness and self-regulation",
                "Consistent morning routines improve focus and productivity",
                "Gratitude practices enhance overall life satisfaction",
                "Mindful reflection reduces anxiety and promotes mental clarity",
              ].map((fact) => (
                <div key={fact} className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Experience the benefits yourself
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands who have transformed their emotional well-being with Dawn Bloom.
            </p>
            <Link to="/download">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
