import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export const Registration = () => {
  return (
    <section className="py-24 bg-gradient-glow">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Ready to <span className="text-gradient">Innovate?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join hundreds of brilliant minds in building the future of computing. 
            Registration closes March 10th - secure your spot now!
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">When</h3>
              <p className="text-muted-foreground">March 15-17, 2025</p>
              <p className="text-sm text-muted-foreground">72 hours of innovation</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Where</h3>
              <p className="text-muted-foreground">Hyperrcompute HQ</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <Users className="w-8 h-8 text-accent-purple mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Teams</h3>
              <p className="text-muted-foreground">1-4 members</p>
              <p className="text-sm text-muted-foreground">Solo or group entry</p>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="glass-card p-8 rounded-2xl glow-primary">
            <h3 className="font-orbitron font-bold text-2xl mb-4">
              Registration is <span className="text-gradient">Live!</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Don't miss your chance to be part of the most innovative hackathon of 2025. 
              Spots are limited and filling up fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-6">
                Register Your Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost-glow" size="lg" className="text-lg px-8 py-6">
                Download Info Pack
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>245 teams registered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>55 spots remaining</span>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-16">
            <h3 className="font-orbitron font-bold text-xl mb-8">
              What's <span className="text-gradient">Included</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                "All Meals & Snacks",
                "Development Resources", 
                "Mentorship Access",
                "Swag Package",
                "Cloud Computing Credits",
                "GPU Cluster Access",
                "Networking Events",
                "Certificate of Participation"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};