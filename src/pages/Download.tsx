import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Sparkles, Check, Shield, Heart, Zap } from "lucide-react";

const features = [
  "Daily personalized affirmations",
  "Intuitive mood tracking",
  "Emotional insights & patterns",
  "Completely private & secure",
  "Beautiful, ad-free interface",
  "Works offline",
];

export default function Download() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dawn-peach/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dawn-lavender/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                Available now
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Download <span className="gradient-text">Dawn Bloom</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Start your journey to emotional well-being today. Dawn Bloom is
                free to download with no account required.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button variant="hero" size="xl" className="group">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <span className="text-xs opacity-80 block">Download on the</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </Button>
                <Button variant="heroOutline" size="xl" className="group">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <span className="text-xs opacity-80 block">Get it on</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </Button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative animate-fade-up">
              <div className="relative mx-auto max-w-sm">
                <div className="relative bg-card rounded-[3rem] p-3 shadow-elevated border border-border/50">
                  <div className="bg-gradient-to-br from-dawn-cream to-secondary rounded-[2.5rem] aspect-[9/19] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute top-6 left-0 right-0 flex justify-center">
                      <div className="w-24 h-6 bg-foreground/10 rounded-full" />
                    </div>
                    
                    <div className="text-center space-y-6 z-10">
                      <div className="w-20 h-20 mx-auto rounded-2xl gradient-dawn flex items-center justify-center shadow-soft">
                        <Sparkles className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Good Morning</p>
                        <p className="font-display text-lg text-foreground font-medium px-4 leading-relaxed">
                          "I am worthy of love, happiness, and peace."
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

                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dawn-peach/30 rounded-full blur-2xl" />
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-dawn-lavender/30 rounded-full blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why choose Dawn Bloom?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-dawn-peach/20 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-dawn-coral" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Designed for You</h3>
              <p className="text-sm text-muted-foreground">
                Personalized affirmations that resonate with your unique journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-dawn-lavender/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-dawn-lavender" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Private</h3>
              <p className="text-sm text-muted-foreground">
                Your data never leaves your device. We promise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-dawn-amber/20 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-dawn-amber" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick & Easy</h3>
              <p className="text-sm text-muted-foreground">
                Less than 5 minutes a day for lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
