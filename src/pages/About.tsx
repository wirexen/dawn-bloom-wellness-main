import { Layout } from "@/components/layout/Layout";
import { Sparkles, Heart, Shield, Users, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We design every feature with your emotional well-being as the primary focus.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your data is yours. We never collect, track, or sell personal information.",
  },
  {
    icon: Users,
    title: "Inclusive Wellness",
    description: "Mental health support should be accessible to everyone, regardless of background.",
  },
  {
    icon: Sparkles,
    title: "Ethical Technology",
    description: "We build technology that genuinely helps, not technology that exploits attention.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building technology for{" "}
              <span className="gradient-text">human flourishing</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dawn Bloom Technologies is a wellness technology company dedicated
              to supporting emotional well-being through thoughtful, ethical, and
              privacy-focused digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-dawn-peach/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-dawn-coral" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals to take control of their emotional health
                through simple, effective, and private digital wellness tools.
                We believe that small daily practices can lead to profound,
                lasting change in how people experience their lives.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-dawn-lavender/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-dawn-lavender" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where technology serves human well-being rather than
                competing for attention. We envision digital tools that respect
                privacy, promote mental health, and help people build meaningful
                daily practices that support their growth and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make, from product design
              to company culture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-dawn flex items-center justify-center mb-6 shadow-soft">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Dawn Bloom Technologies was founded with a simple observation:
                the apps that dominate our phones are often designed to capture
                our attention rather than genuinely improve our lives. We wanted
                to build something different.
              </p>
              <p className="leading-relaxed mb-6">
                The Dawn Bloom app was born from personal experience with the
                power of daily affirmations and emotional awareness. We saw how
                small, consistent practices could transform mental well-being—and
                we wanted to make that accessible to everyone.
              </p>
              <p className="leading-relaxed">
                Today, we're committed to building wellness technology that
                respects your privacy, values your time, and genuinely supports
                your journey toward emotional well-being. Every feature we build
                is measured not by engagement metrics, but by whether it truly
                helps our users live better lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
