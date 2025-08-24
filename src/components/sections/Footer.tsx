import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/hyperrcompute", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/hyperrcompute", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/hyperrcompute", label: "GitHub" },
    { icon: Mail, href: "mailto:hackathon@hyperrcompute.com", label: "Email" }
  ];

  const quickLinks = [
    { title: "About", href: "#about" },
    { title: "Timeline", href: "#timeline" },
    { title: "Tracks", href: "#tracks" },
    { title: "Prizes", href: "#prizes" },
    { title: "FAQ", href: "#faq" }
  ];

  const resources = [
    { title: "Code of Conduct", href: "#" },
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Sponsor Kit", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-orbitron font-bold text-2xl mb-4">
              <span className="text-gradient">Hyperrcompute</span> Hackathon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Pushing the boundaries of computing innovation. Join the most ambitious 
              hackathon of 2025 and build the future of AI, Cloud, and GPU technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:shadow-glow-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <a 
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {resource.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="font-semibold mb-2">General Inquiries</h5>
              <a 
                href="mailto:hackathon@hyperrcompute.com"
                className="text-primary hover:text-primary-glow transition-colors text-sm"
              >
                hackathon@hyperrcompute.com
              </a>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Sponsorship</h5>
              <a 
                href="mailto:sponsors@hyperrcompute.com"
                className="text-primary hover:text-primary-glow transition-colors text-sm"
              >
                sponsors@hyperrcompute.com
              </a>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Press & Media</h5>
              <a 
                href="mailto:press@hyperrcompute.com"
                className="text-primary hover:text-primary-glow transition-colors text-sm"
              >
                press@hyperrcompute.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Hyperrcompute. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made with ⚡ for innovators</span>
            <span>•</span>
            <span className="text-primary">San Francisco, CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};