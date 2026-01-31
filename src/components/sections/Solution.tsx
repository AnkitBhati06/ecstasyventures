import { 
  Code2, 
  Megaphone, 
  Scale, 
  Handshake, 
  TrendingUp, 
  Compass,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Product Development",
    description: "From idea to MVP to scale-ready tech. We build products that users love.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Branding",
    description: "Go-to-market strategy that converts. Build a brand that stands out.",
  },
  {
    icon: Scale,
    title: "Legal Infrastructure",
    description: "Compliance, IP, contracts, cap tables. We handle the boring but essential.",
  },
  {
    icon: Handshake,
    title: "Business Development",
    description: "Partnerships, networking, market access. Open doors that matter.",
  },
  {
    icon: TrendingUp,
    title: "Fundraising Support",
    description: "Investor connections, pitch prep, term sheets. Get funded faster.",
  },
  {
    icon: Compass,
    title: "Strategic Consulting",
    description: "Ongoing guidance at every growth stage. Never feel lost again.",
  },
];

const Solution = () => {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Everything Your Startup Needs.{" "}
            <span className="text-primary">One Partnership.</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Stop juggling freelancers, agencies, and consultants. 
            Get a complete founding team from day one.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-elevated group cursor-default"
            >
              <div className="icon-box mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {service.title}
              </h3>
              <p className="body-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={scrollToApply} className="btn-primary group">
            Get Complete Infrastructure
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
