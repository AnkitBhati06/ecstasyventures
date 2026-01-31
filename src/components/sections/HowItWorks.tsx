const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your startup idea via our form. We review for fit and potential within 3 business days.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description: "30-minute conversation about your vision, market, and goals. Mutual evaluation of partnership fit.",
  },
  {
    number: "03",
    title: "Partnership Agreement",
    description: "Equity structure discussion, legal documentation, and team alignment. Transparency at every step.",
  },
  {
    number: "04",
    title: "Execute",
    description: "Complete team onboarded day one. Sprint planning, roadmap creation, build, launch, iterate, scale.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            From Application to Launch in{" "}
            <span className="text-primary">Weeks, Not Months</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            A streamlined process designed for founders who are ready to move fast.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl z-10 shadow-orange">
                  {step.number}
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-24 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                    index % 2 === 1 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <div className="card-elevated">
                    <h3 className="heading-card text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="body-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
