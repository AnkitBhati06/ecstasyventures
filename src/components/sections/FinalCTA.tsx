import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container-content relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-6">
            Stop Waiting.{" "}
            <span className="text-primary">Start Building.</span>
          </h2>
          <p className="body-large mb-10">
            Your idea deserves the right infrastructure. Let's build it together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToApply} className="btn-primary group">
              Apply for Partnership
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-8">
            <a 
              href="mailto:hello@ecstasyventure.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="link-underline">Have questions? Email us at hello@ecstasyventure.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
