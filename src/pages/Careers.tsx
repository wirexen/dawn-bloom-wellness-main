import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy-Driven",
    description: "We build products that genuinely help people. Every decision starts with user well-being.",
  },
  {
    icon: Sparkles,
    title: "Privacy-First",
    description: "We prove that ethical technology can be successful. No compromises on user privacy.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "We value diverse perspectives and create a supportive environment for everyone.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We're always growing, learning, and improving—just like our users.",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Careers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join the <span className="gradient-text">Dawn Bloom</span> team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Help us build technology that genuinely improves lives. We're
              looking for passionate people who share our vision of ethical,
              privacy-focused wellness technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              What we believe in
            </h2>
            <p className="text-lg text-muted-foreground">
              Our values guide everything we do—from product design to team culture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-dawn flex items-center justify-center mb-6 shadow-soft">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Current Openings
            </h2>
            <div className="bg-card rounded-2xl p-12 shadow-card border border-border/50">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                No open positions right now
              </h3>
              <p className="text-muted-foreground mb-6">
                We're a small, focused team and don't have any open roles at the
                moment. However, we're always interested in hearing from talented
                people who share our mission.
              </p>
              <p className="text-muted-foreground">
                Feel free to reach out if you think you'd be a great fit:
              </p>
              <a
                href="mailto:xiangdee2705@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                xiangdee2705@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Want to stay connected?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow our journey and be the first to know about future opportunities.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
