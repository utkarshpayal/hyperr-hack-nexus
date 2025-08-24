import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float glow-primary" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-purple rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium">March 15-17, 2025</span>
          </div>

          {/* Main title */}
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="text-gradient">Hyperrcompute</span>
            <br />
            <span className="text-foreground">Hackathon</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Innovation in <span className="text-primary font-bold">AI</span>, 
            <span className="text-accent font-bold"> Cloud</span>, 
            <span className="text-accent-purple font-bold"> GPU</span>, and 
            <span className="text-primary-glow font-bold"> next-gen computing</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost-glow" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-xl border border-border/30 hover:shadow-glow-primary/30 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-foreground/70 font-medium">Total Prizes</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border/30 hover:shadow-glow-accent/30 transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">72H</div>
              <div className="text-foreground/70 font-medium">Non-stop Coding</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-border/30 hover:shadow-glow-purple/30 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-purple mb-2">500+</div>
              <div className="text-foreground/70 font-medium">Participants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};