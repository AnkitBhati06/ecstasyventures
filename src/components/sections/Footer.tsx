import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-content">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              Ecstasy Venture
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Venture studio partnering with high-potential founders through equity deals. 
              Complete startup infrastructure from day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("apply")}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Apply Now
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight - 1000, behavior: "smooth" })}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@ecstasyventure.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@ecstasyventure.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Bangalore, India
                </div>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-primary hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © 2025 Ecstasy Venture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
