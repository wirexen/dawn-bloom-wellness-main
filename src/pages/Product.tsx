import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Brain, Users } from "lucide-react";

const audiences = [
  {
    title: "Busy Professionals",
    description: "Find moments of calm in your hectic schedule with quick, meaningful check-ins.",
  },
  {
    title: "Students",
    description: "Build emotional resilience during challenging academic and personal growth periods.",
  },
  {
    title: "Parents",
    description: "Model healthy emotional habits and find space for self-care amidst caregiving.",
  },
  {
    title: "Anyone Seeking Growth",
    description: "Whether you're on a wellness journey or just starting, Dawn Bloom meets you where you are.",
  },
];

export default function Product() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Product Overview
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet <span className="gradient-text">Dawn Bloom</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A wellness mobile application designed to support your emotional
              well-being through daily affirmations, intuitive mood tracking, and
              thoughtful reflection tools.
            </p>
          </div>
        </div>
      </section>

      {/* What is Dawn Bloom */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your daily companion for emotional wellness
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dawn Bloom is more than an app—it's a gentle daily practice that
                helps you cultivate emotional awareness, build positive habits,
                and develop lasting well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through personalized affirmations and intuitive mood tracking,
                Dawn Bloom helps you start each day with intention and end it
                with insight. No complexity, no overwhelm—just simple, effective
                tools for emotional growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Daily Affirmations
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-5 h-5 text-primary" />
                  Mood Tracking
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Brain className="w-5 h-5 text-primary" />
                  Emotional Insights
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50">
                <div className="aspect-[4/5] bg-gradient-to-br from-dawn-cream to-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center shadow-soft mb-6">
                      <Sparkles className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="font-display text-xl text-foreground font-medium">
                      "Today, I choose peace over worry."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Who is Dawn Bloom for?
            </h2>
            <p className="text-lg text-muted-foreground">
              Dawn Bloom is designed for anyone who wants to build a healthier
              relationship with their emotions and cultivate daily well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Start your wellness journey today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download Dawn Bloom and discover the power of daily emotional wellness practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Get the App
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
