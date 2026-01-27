import { Check } from "lucide-react";

const benefits = [
  {
    title: "Reduced Daily Stress",
    description: "Regular affirmations and mood tracking help regulate your nervous system and reduce anxiety.",
  },
  {
    title: "Improved Self-Awareness",
    description: "Understand your emotional patterns and triggers through consistent reflection and tracking.",
  },
  {
    title: "Positive Habit Building",
    description: "Establish a morning routine that sets a positive tone for your entire day.",
  },
  {
    title: "Better Emotional Regulation",
    description: "Learn to recognize and respond to your emotions in healthier, more constructive ways.",
  },
  {
    title: "Increased Resilience",
    description: "Build mental and emotional strength to navigate life's challenges with greater ease.",
  },
  {
    title: "Enhanced Well-Being",
    description: "Experience a deeper sense of peace, contentment, and overall life satisfaction.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dawn-lavender/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Benefits
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transform your emotional{" "}
              <span className="gradient-text">well-being</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Consistent use of Dawn Bloom can lead to profound changes in how you
              experience and navigate your daily life. Here's what our users
              experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl p-8 shadow-elevated border border-border/50">
              {/* Stats Card */}
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Average user experience</p>
                  <h3 className="font-display text-4xl font-bold gradient-text">87%</h3>
                  <p className="text-muted-foreground">feel calmer within 2 weeks</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">4.9</p>
                    <p className="text-xs text-muted-foreground">App Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-xs text-muted-foreground">Active Users</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">1M+</p>
                    <p className="text-xs text-muted-foreground">Affirmations</p>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-dawn-amber/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-dawn-lavender/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
