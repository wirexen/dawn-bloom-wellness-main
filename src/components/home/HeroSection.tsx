import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Brain, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dawn-peach/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dawn-lavender/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-dawn-amber/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              Your daily companion for emotional wellness
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Bloom into your{" "}
              <span className="gradient-text">best self</span>
              <br />
              every single day
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up stagger-2 leading-relaxed">
              Dawn Bloom helps you cultivate emotional well-being through
              personalized daily affirmations and intuitive mood tracking.
              Start each day with intention and clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Link to="/download">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Download the App
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                Privacy-First
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                No Ads Ever
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Brain className="w-5 h-5 text-primary" />
                Science-Based
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Phone Mockup */}
              <div className="relative bg-card rounded-[3rem] p-3 shadow-elevated border border-border/50">
                <div className="bg-gradient-to-br from-dawn-cream to-secondary rounded-[2.5rem] aspect-[9/19] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  {/* App Screen Content */}
                  <div className="absolute top-6 left-0 right-0 flex justify-center">
                    <div className="w-24 h-6 bg-foreground/10 rounded-full" />
                  </div>
                  
                  <div className="text-center space-y-6 z-10">
                    <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center shadow-soft">
                      <Sparkles className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Today's Affirmation</p>
                      <p className="font-display text-lg text-foreground font-medium px-4 leading-relaxed">
                        "I embrace this new day with an open heart and a peaceful mind."
                      </p>
                    </div>
                    <div className="flex justify-center gap-2 pt-4">
                      {['😌', '😊', '😃', '🥰', '✨'].map((emoji, i) => (
                        <button key={i} className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center text-lg hover:scale-110 transition-transform">
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dawn-peach/30 rounded-full blur-2xl" />
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-dawn-lavender/30 rounded-full blur-2xl" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dawn-sage/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-dawn-sage" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Mood Streak</p>
                    <p className="text-sm font-semibold text-foreground">7 days</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dawn-amber/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-dawn-amber" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Affirmations</p>
                    <p className="text-sm font-semibold text-foreground">234 read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
