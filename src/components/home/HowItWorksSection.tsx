import { Download, Sunrise, TrendingUp, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description: "Get Dawn Bloom from the App Store or Google Play. Setup takes less than a minute.",
  },
  {
    number: "02",
    icon: Sunrise,
    title: "Start Your Morning",
    description: "Open the app each morning to receive your personalized daily affirmation.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Log Your Mood",
    description: "Take a moment to check in with yourself and record how you're feeling.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Your Growth",
    description: "Watch your emotional well-being improve over time with insights and trends.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple steps to a{" "}
            <span className="gradient-text">calmer you</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dawn Bloom is designed to fit seamlessly into your daily routine.
            No complicated setup, no learning curve—just pure emotional support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-dawn flex items-center justify-center shadow-soft">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  Step {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
