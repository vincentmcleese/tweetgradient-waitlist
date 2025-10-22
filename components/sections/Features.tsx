import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Vibrant Gradient Backgrounds",
    description:
      "Choose from stunning, professionally designed gradient backgrounds that make your tweets stand out in any feed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Direct ChatGPT Integration",
    description:
      "Create beautiful tweet images without leaving ChatGPT. No need for Figma, Canva, or any external design tools.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Instant Export",
    description:
      "Generate and download your tweet images in seconds. Perfect for busy creators who need beautiful content fast.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Professional Typography",
    description:
      "Beautiful, readable fonts optimized for social media. Your tweets will look polished and professional every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
            Everything creators need for stunning tweets
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Powerful features that make creating beautiful tweet images effortless
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-ghostteam-green)]/10 flex items-center justify-center text-[var(--color-ghostteam-green)] group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-ghostteam-green)] to-[var(--color-ghostteam-green-dark)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
