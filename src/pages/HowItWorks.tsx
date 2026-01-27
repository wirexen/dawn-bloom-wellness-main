import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Sunrise, TrendingUp, Sparkles, ArrowRight, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Setup",
    description: "Get Dawn Bloom from the App Store or Google Play. Create your profile in under a minute—no account required, just choose your preferences.",
    time: "< 1 minute",
  },
  {
    number: "02",
    icon: Sunrise,
    title: "Morning Affirmation",
    description: "Each morning, open Dawn Bloom to receive your personalized daily affirmation. Take a moment to reflect and set your intention for the day.",
    time: "1-2 minutes",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Mood Check-In",
    description: "Throughout the day, log how you're feeling with our simple mood tracker. It takes just a few taps and helps you stay connected to your emotional state.",
    time: "30 seconds",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Over time, view your emotional trends and insights. Celebrate your streaks and discover patterns that help you understand yourself better.",
    time: "Ongoing",
  },
];

const dailyRoutine = [
  { time: "Morning", action: "Read your daily affirmation", duration: "1 min" },
  { time: "Midday", action: "Quick mood check-in", duration: "30 sec" },
  { time: "Evening", action: "Reflect on your day", duration: "2 min" },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              How It Works
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple steps to{" "}
              <span className="gradient-text">emotional wellness</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dawn Bloom fits seamlessly into your daily routine. No complicated
              setup, no learning curve—just pure emotional support when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl gradient-dawn flex items-center justify-center shadow-soft">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Step {step.number}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your daily wellness routine
              </h2>
              <p className="text-lg text-muted-foreground">
                Less than 5 minutes a day to transform your emotional well-being.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="space-y-6">
                {dailyRoutine.map((item, index) => (
                  <div key={item.time} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{item.time}</p>
                          <p className="text-sm text-muted-foreground">{item.action}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-1">Total daily time</p>
                <p className="font-display text-2xl font-bold gradient-text">~3.5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download Dawn Bloom today and begin your journey to emotional well-being.
            </p>
            <Link to="/download">
              <Button variant="hero" size="xl" className="group">
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
