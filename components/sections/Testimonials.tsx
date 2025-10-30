import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Gradient Tweet is a game-changer! I create stunning tweet images in seconds without ever leaving ChatGPT. My engagement has gone up significantly.",
    author: "Sarah Chen",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?img=47",
    fallback: "SC",
  },
  {
    quote:
      "Finally, a tool that makes beautiful social media graphics without the complexity of Canva. The gradients are gorgeous and it's so fast!",
    author: "Marcus Rodriguez",
    role: "Social Media Manager",
    avatar: "https://i.pravatar.cc/150?img=33",
    fallback: "MR",
  },
  {
    quote:
      "As a creator, time is everything. Gradient Tweet lets me focus on my message while it handles the design. Absolutely love it!",
    author: "Jamie Lin",
    role: "Digital Marketer",
    avatar: "https://i.pravatar.cc/150?img=20",
    fallback: "JL",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-green-ultralight)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
            Loved by content creators
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            See what early users are saying about Gradient Tweet
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <svg
                  className="w-10 h-10 text-[var(--color-ghostteam-green)]/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote */}
                <p className="text-[var(--color-text-default)] mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-[var(--color-ghostteam-green)] text-white">
                      {testimonial.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-[var(--color-text-heading)]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
