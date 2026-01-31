import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  startupName: z.string().max(100).optional(),
  oneLineDescription: z.string().min(10, "Please describe your startup").max(150),
  industry: z.string().min(1, "Please select an industry"),
  stage: z.string().min(1, "Please select your stage"),
  problemSolving: z.string().min(20, "Please provide more detail").max(500),
  targetCustomer: z.string().min(10, "Please describe your target customer").max(300),
  supportNeeded: z.array(z.string()).min(1, "Please select at least one"),
  whyPartner: z.string().min(20, "Please tell us more").max(500),
  equityWilling: z.string().min(1, "Please select an option"),
  startTimeline: z.string().min(1, "Please select a timeline"),
  websiteOrDeck: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  additionalInfo: z.string().max(500).optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const industries = [
  "FinTech",
  "HealthTech",
  "EdTech",
  "SaaS",
  "E-commerce",
  "AI/ML",
  "Other",
];

const stages = [
  "Idea Stage",
  "MVP Built",
  "Early Traction",
  "Scaling",
];

const supportOptions = [
  "Product Development",
  "Marketing & Branding",
  "Legal Setup",
  "Business Development",
  "Fundraising",
  "Strategic Consulting",
  "Everything",
];

const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      supportNeeded: [],
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Application submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application Received!",
      description: "We'll review and reach out within 3 business days.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="section-padding bg-background">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="heading-section text-foreground mb-4">
              Application Received!
            </h2>
            <p className="body-large">
              Thank you for your interest in partnering with Ecstasy Venture. 
              We'll review your application and reach out within 3 business days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section-padding bg-background">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Ready to Build Together?{" "}
              <span className="text-primary">Apply Now.</span>
            </h2>
            <p className="body-large">
              We review every application. Serious founders only.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Your Details */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">Your Details</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    {...register("fullName")}
                    className="form-input"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-input"
                    placeholder="john@startup.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="form-label">LinkedIn Profile</label>
                  <input
                    {...register("linkedin")}
                    type="url"
                    className="form-input"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedin && (
                    <p className="text-sm text-destructive mt-1">{errors.linkedin.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Your Startup */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">Your Startup</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Startup Name</label>
                  <input
                    {...register("startupName")}
                    className="form-input"
                    placeholder="Unnamed Idea is fine"
                  />
                </div>
                
                <div>
                  <label className="form-label">Industry/Sector *</label>
                  <select {...register("industry")} className="form-input">
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-sm text-destructive mt-1">{errors.industry.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="form-label">One-line Description * (max 150 chars)</label>
                <input
                  {...register("oneLineDescription")}
                  className="form-input"
                  placeholder="We help X do Y by Z"
                  maxLength={150}
                />
                {errors.oneLineDescription && (
                  <p className="text-sm text-destructive mt-1">{errors.oneLineDescription.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Stage *</label>
                <select {...register("stage")} className="form-input">
                  <option value="">Select stage</option>
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
                {errors.stage && (
                  <p className="text-sm text-destructive mt-1">{errors.stage.message}</p>
                )}
              </div>
            </div>

            {/* The Problem */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">The Problem You're Solving</h3>
              
              <div>
                <label className="form-label">What problem are you solving? *</label>
                <textarea
                  {...register("problemSolving")}
                  className="form-input min-h-[120px]"
                  placeholder="Describe the problem in detail..."
                  maxLength={500}
                />
                {errors.problemSolving && (
                  <p className="text-sm text-destructive mt-1">{errors.problemSolving.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Who is your target customer? *</label>
                <textarea
                  {...register("targetCustomer")}
                  className="form-input min-h-[100px]"
                  placeholder="Describe your ideal customer..."
                  maxLength={300}
                />
                {errors.targetCustomer && (
                  <p className="text-sm text-destructive mt-1">{errors.targetCustomer.message}</p>
                )}
              </div>
            </div>

            {/* What You Need */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">What Support Do You Need? *</h3>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {supportOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      {...register("supportNeeded")}
                      value={option}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">{option}</span>
                  </label>
                ))}
              </div>
              {errors.supportNeeded && (
                <p className="text-sm text-destructive">{errors.supportNeeded.message}</p>
              )}
            </div>

            {/* Your Commitment */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">Your Commitment</h3>
              
              <div>
                <label className="form-label">Why do you want to partner with Ecstasy Venture? *</label>
                <textarea
                  {...register("whyPartner")}
                  className="form-input min-h-[120px]"
                  placeholder="Tell us what excites you about this partnership..."
                  maxLength={500}
                />
                {errors.whyPartner && (
                  <p className="text-sm text-destructive mt-1">{errors.whyPartner.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Willing to consider equity partnership? *</label>
                  <select {...register("equityWilling")} className="form-input">
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="discuss">Need to discuss</option>
                    <option value="no">No</option>
                  </select>
                  {errors.equityWilling && (
                    <p className="text-sm text-destructive mt-1">{errors.equityWilling.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">When do you want to start? *</label>
                  <select {...register("startTimeline")} className="form-input">
                    <option value="">Select timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {errors.startTimeline && (
                    <p className="text-sm text-destructive mt-1">{errors.startTimeline.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h3 className="heading-card text-foreground">Additional Information</h3>
              
              <div>
                <label className="form-label">Website/Deck/Demo URL</label>
                <input
                  {...register("websiteOrDeck")}
                  type="url"
                  className="form-input"
                  placeholder="https://your-deck-link.com"
                />
                {errors.websiteOrDeck && (
                  <p className="text-sm text-destructive mt-1">{errors.websiteOrDeck.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Anything else we should know?</label>
                <textarea
                  {...register("additionalInfo")}
                  className="form-input min-h-[100px]"
                  placeholder="Any additional context..."
                  maxLength={500}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Your information is confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
