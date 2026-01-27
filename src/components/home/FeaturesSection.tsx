import { Sparkles, BarChart3, Heart, Lightbulb, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Daily Affirmations",
    description: "Start each morning with personalized, uplifting affirmations tailored to your goals and emotional needs.",
    color: "bg-dawn-peach/20 text-dawn-coral",
  },
  {
    icon: BarChart3,
    title: "Mood Tracking",
    description: "Track your emotional patterns over time with our intuitive mood logging and insightful analytics.",
    color: "bg-dawn-lavender/20 text-dawn-lavender",
  },
  {
    icon: Heart,
    title: "Emotional Insights",
    description: "Gain deeper understanding of your emotional well-being with personalized insights and trends.",
    color: "bg-dawn-sage/20 text-dawn-sage",
  },
  {
    icon: Lightbulb,
    title: "Growth Tools",
    description: "Access reflection prompts and journaling tools designed to support your personal development journey.",
    color: "bg-dawn-amber/20 text-dawn-amber",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description: "Your data stays on your device. We never track, analyze, or share your personal information.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Smartphone,
    title: "Distraction-Free",
    description: "A calm, minimal interface designed to help you focus on what matters—your well-being.",
    color: "bg-dawn-cream text-foreground",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="gradient-text">thrive emotionally</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dawn Bloom combines powerful wellness tools with a serene,
            distraction-free experience to help you cultivate lasting emotional
            well-being.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
