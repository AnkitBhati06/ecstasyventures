import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We wasted 7 months trying to assemble a team. Ecstasy gave us everything in week one. We launched in 2 months and now have 5,000+ users. Best decision we made.",
    name: "Priya Sharma",
    title: "Founder, TechFlow",
    avatar: "PS",
  },
  {
    quote: "The equity model seemed scary at first, but the alignment it creates is incredible. They're as invested in our success as we are. That changes everything.",
    name: "Rahul Mehta",
    title: "Founder, FinLeap",
    avatar: "RM",
  },
  {
    quote: "From legal setup to product launch, they handled it all. I could focus entirely on understanding our customers. That's the real unlock.",
    name: "Ananya Gupta",
    title: "Founder, EduSpark",
    avatar: "AG",
  },
  {
    quote: "Three agencies failed us before Ecstasy. The difference? They're not vendors—they're co-founders. They don't disappear after the invoice is paid.",
    name: "Vikram Singh",
    title: "Founder, HealthPulse",
    avatar: "VS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            What Founders Say About{" "}
            <span className="text-primary">Partnership</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-border/50">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].title}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
