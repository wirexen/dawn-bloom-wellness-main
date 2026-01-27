import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Science Behind Daily Affirmations",
    excerpt: "Discover how positive self-talk can rewire your brain and improve your mental well-being through the lens of neuroscience.",
    category: "Wellness",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "science-behind-affirmations",
  },
  {
    title: "5 Morning Rituals for Better Mental Health",
    excerpt: "Simple practices you can incorporate into your morning routine to set a positive tone for the entire day.",
    category: "Tips",
    date: "Jan 10, 2025",
    readTime: "4 min read",
    slug: "morning-rituals-mental-health",
  },
  {
    title: "Understanding Your Emotional Patterns",
    excerpt: "How mood tracking can help you identify triggers, understand yourself better, and make positive changes.",
    category: "Insights",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    slug: "understanding-emotional-patterns",
  },
  {
    title: "Building Emotional Resilience in Challenging Times",
    excerpt: "Practical strategies for developing the mental strength to navigate life's ups and downs with greater ease.",
    category: "Growth",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    slug: "building-emotional-resilience",
  },
  {
    title: "The Power of Consistency in Self-Care",
    excerpt: "Why small daily practices matter more than occasional grand gestures when it comes to emotional well-being.",
    category: "Wellness",
    date: "Dec 20, 2024",
    readTime: "4 min read",
    slug: "power-of-consistency",
  },
  {
    title: "Privacy-First Technology: Why It Matters",
    excerpt: "Our philosophy on building wellness technology that respects your privacy and puts your well-being first.",
    category: "Company",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    slug: "privacy-first-technology",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Blog & Resources
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights for your{" "}
              <span className="gradient-text">wellness journey</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore articles on mental wellness, affirmation tips, emotional
              health education, and product updates.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover-lift"
              >
                <div className="aspect-video bg-gradient-to-br from-dawn-cream to-secondary flex items-center justify-center">
                  <span className="text-4xl">{post.category === "Wellness" ? "🧘" : post.category === "Tips" ? "💡" : post.category === "Insights" ? "📊" : post.category === "Growth" ? "🌱" : "✨"}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Stay inspired
            </h2>
            <p className="text-muted-foreground mb-8">
              Get wellness tips, affirmations, and updates delivered to your inbox.
            </p>
            <p className="text-sm text-muted-foreground">
              Newsletter coming soon. Follow us for updates!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
