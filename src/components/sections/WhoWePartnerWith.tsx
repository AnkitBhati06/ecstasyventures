import { Check, ArrowRight } from "lucide-react";

const criteria = [
  "Solving real problems (not just chasing trends)",
  "Building for scale (not lifestyle businesses)",
  "Coachable and collaborative (not solo heroes)",
  "Committed long-term (not looking for quick exits)",
  "Ready to execute (not just validate endlessly)",
];

const WhoWePartnerWith = () => {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              We're Selective.{" "}
              <span className="text-primary">Here's Why.</span>
            </h2>
            <p className="body-large">
              We only work with founders who are:
            </p>
          </div>

          {/* Criteria List */}
          <div className="space-y-4 mb-12">
            {criteria.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-foreground font-medium pt-0.5">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Message & CTA */}
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground mb-6">
              If this is you, we should talk.
            </p>
            <button onClick={scrollToApply} className="btn-primary group">
              Start Your Application
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWePartnerWith;
