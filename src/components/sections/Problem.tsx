import { Target, Wallet, Users } from "lucide-react";

const stats = [
  {
    percentage: "42%",
    label: "Poor Product-Market Fit",
    icon: Target,
    description: "Startups fail because they build what nobody wants",
  },
  {
    percentage: "29%",
    label: "Ran Out of Cash",
    icon: Wallet,
    description: "Poor financial planning and runway management",
  },
  {
    percentage: "23%",
    label: "Wrong Team",
    icon: Users,
    description: "Lacking the right skills and expertise",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Why <span className="text-primary">78%</span> of Startups Fail in 3 Years
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            These aren't just statistics—they're preventable tragedies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="card-stat group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="icon-box shrink-0">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.percentage}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-xl font-semibold text-foreground">
            We solve all three.{" "}
            <span className="text-primary">Before you even launch.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
