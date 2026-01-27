import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Smartphone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dawn opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Ready to start your journey to{" "}
            <span className="gradient-text">emotional well-being</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of users who have transformed their daily lives with
            Dawn Bloom. Download now and take the first step toward a calmer,
            more centered you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/download">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                <Apple className="w-5 h-5" />
                Download for iOS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/download">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                <Smartphone className="w-5 h-5" />
                Download for Android
              </Button>
            </Link>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs"
                  >
                    {['😊', '🥰', '😌', '✨'][i - 1]}
                  </div>
                ))}
              </div>
              <span>50,000+ happy users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span>4.9 rating on App Store</span>
            </div>
            <div>Free to download</div>
          </div>
        </div>
      </div>
    </section>
  );
}
