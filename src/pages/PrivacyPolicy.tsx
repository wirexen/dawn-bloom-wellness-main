import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: January 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Our Commitment to Privacy
                  </h2>
                  <p className="leading-relaxed">
                    At Dawn Bloom Technologies, your privacy is not just a feature—it's our
                    foundation. We believe that emotional well-being data is deeply personal
                    and should remain entirely under your control.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Data Collection
                  </h2>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">We do not collect your personal data.</strong>{" "}
                    All information you enter into Dawn Bloom—including your moods, reflections,
                    and preferences—is stored locally on your device and never transmitted to
                    our servers.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    What We Don't Do
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We don't collect personal information</li>
                    <li>We don't use analytics or tracking tools</li>
                    <li>We don't use cookies for tracking purposes</li>
                    <li>We don't show targeted advertisements</li>
                    <li>We don't sell or share data with third parties</li>
                    <li>We don't require account creation or login</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Local Storage
                  </h2>
                  <p className="leading-relaxed">
                    All your data is stored locally on your device using secure storage
                    mechanisms provided by your operating system. This means your data
                    never leaves your phone unless you explicitly choose to export it.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <p className="leading-relaxed mb-4">You have complete control over your data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your data at any time within the app</li>
                    <li>Delete individual entries or all data</li>
                    <li>Export your data for personal use</li>
                    <li>Uninstall the app to remove all data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Third-Party Services
                  </h2>
                  <p className="leading-relaxed">
                    Dawn Bloom does not integrate with any third-party analytics, advertising,
                    or tracking services. The app functions entirely offline once downloaded.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Children's Privacy
                  </h2>
                  <p className="leading-relaxed">
                    Dawn Bloom is designed for users of all ages. Since we don't collect any
                    personal information, there are no special concerns regarding children's
                    privacy.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="leading-relaxed">
                    If we ever change our privacy practices, we will update this policy and
                    notify users through the app. Our commitment to not collecting personal
                    data will remain unchanged.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at:{" "}
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
