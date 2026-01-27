import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  BarChart3, 
  Heart, 
  Lightbulb, 
  Shield, 
  Bell,
  Palette,
  Calendar,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Daily Affirmations",
    description: "Receive personalized, uplifting affirmations every morning to set a positive tone for your day. Our affirmations are thoughtfully crafted to resonate with your personal goals and emotional needs.",
    highlights: ["Personalized to your goals", "Fresh daily content", "Science-backed positivity"],
  },
  {
    icon: BarChart3,
    title: "Mood Tracking",
    description: "Log your emotions with our intuitive mood tracker. Over time, discover patterns in your emotional life and gain insights that help you understand yourself better.",
    highlights: ["Simple one-tap logging", "Visual trend analysis", "Historical insights"],
  },
  {
    icon: Heart,
    title: "Emotional Insights",
    description: "Go beyond simple tracking with deep emotional insights. Understand your triggers, identify patterns, and learn what helps you feel your best.",
    highlights: ["Pattern recognition", "Trigger identification", "Personalized tips"],
  },
  {
    icon: Lightbulb,
    title: "Reflection Prompts",
    description: "Engage with thoughtful prompts designed to deepen your self-awareness and encourage meaningful introspection throughout your day.",
    highlights: ["Daily prompts", "Journal integration", "Growth-focused"],
  },
  {
    icon: Bell,
    title: "Gentle Reminders",
    description: "Set customizable reminders that gently encourage you to check in with yourself. Never intrusive, always supportive.",
    highlights: ["Customizable timing", "Non-intrusive design", "Flexible scheduling"],
  },
  {
    icon: Palette,
    title: "Calming Interface",
    description: "Experience a beautifully designed, distraction-free environment that promotes calm and focus. No ads, no clutter—just peace.",
    highlights: ["Minimal design", "Soothing colors", "Zero distractions"],
  },
  {
    icon: Calendar,
    title: "Progress Tracking",
    description: "Celebrate your consistency with streak tracking and progress visualizations. Watch your emotional wellness journey unfold over time.",
    highlights: ["Streak tracking", "Progress charts", "Milestone celebrations"],
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your emotional data is sacred. Everything stays on your device—we never access, analyze, or share your personal information.",
    highlights: ["Local-only storage", "No tracking", "No third-party sharing"],
  },
];

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Features
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need for{" "}
              <span className="gradient-text">emotional wellness</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dawn Bloom combines powerful wellness tools with a serene,
              distraction-free experience designed to support your daily
              emotional well-being practice.
            </p>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-dawn flex items-center justify-center mb-6 shadow-soft">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-muted/50 rounded-2xl aspect-square flex items-center justify-center border border-border/50">
                    <feature.icon className="w-24 h-24 text-muted-foreground/30" />
                  </div>
                </div>
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
              Ready to experience these features?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download Dawn Bloom today and start your journey to better emotional well-being.
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
