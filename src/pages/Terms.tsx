import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 text-center">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: January 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">
                    By downloading, accessing, or using the Dawn Bloom application ("App"),
                    you agree to be bound by these Terms and Conditions ("Terms"). If you
                    do not agree to these Terms, please do not use the App.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. Description of Service
                  </h2>
                  <p className="leading-relaxed">
                    Dawn Bloom is a wellness application that provides daily affirmations,
                    mood tracking, and emotional well-being tools. The App is designed for
                    personal, non-commercial use.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="leading-relaxed mb-4">By using Dawn Bloom, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the App only for lawful purposes</li>
                    <li>Not attempt to reverse engineer, modify, or hack the App</li>
                    <li>Not use the App in any way that could harm others</li>
                    <li>Accept responsibility for all activity under your usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Medical Disclaimer
                  </h2>
                  <p className="leading-relaxed">
                    Dawn Bloom is not a substitute for professional medical advice, diagnosis,
                    or treatment. The App is designed to complement, not replace, professional
                    mental health care. If you are experiencing serious mental health issues,
                    please seek help from a qualified healthcare provider.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Intellectual Property
                  </h2>
                  <p className="leading-relaxed">
                    All content, features, and functionality of Dawn Bloom, including but not
                    limited to text, graphics, logos, and software, are owned by Dawn Bloom
                    Technologies and are protected by intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="leading-relaxed">
                    Dawn Bloom Technologies shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising from your use of the
                    App. The App is provided "as is" without warranties of any kind.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Changes to Terms
                  </h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these Terms at any time. Continued use of
                    the App after changes constitutes acceptance of the modified Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    For questions about these Terms, please contact us at:{" "}
                    <a href="mailto:xiangdee2705@gmail.com" className="text-primary hover:underline">
                      xiangdee2705@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
