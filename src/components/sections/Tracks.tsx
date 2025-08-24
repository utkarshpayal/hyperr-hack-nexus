import { Brain, Cloud, Cpu, Shield, Zap, Globe } from "lucide-react";

export const Tracks = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Build intelligent systems that learn, adapt, and revolutionize industries",
      challenges: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"],
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Create scalable, distributed solutions for the cloud-native era",
      challenges: ["Microservices", "Serverless", "Container Orchestration"],
      color: "accent"
    },
    {
      icon: Cpu,
      title: "GPU Optimization",
      description: "Harness parallel processing power for high-performance computing",
      challenges: ["CUDA Programming", "Parallel Algorithms", "Performance Tuning"],
      color: "accent-purple"
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Build secure, automated pipelines and robust infrastructure",
      challenges: ["CI/CD Automation", "Infrastructure as Code", "Security Monitoring"],
      color: "success"
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description: "Develop solutions that bring computation closer to data sources",
      challenges: ["IoT Integration", "Real-time Processing", "Distributed Systems"],
      color: "warning"
    },
    {
      icon: Globe,
      title: "Quantum Computing",
      description: "Explore the frontier of quantum algorithms and applications",
      challenges: ["Quantum Algorithms", "Quantum Simulation", "Hybrid Systems"],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary border-primary/30 hover:shadow-glow-primary",
      accent: "text-accent border-accent/30 hover:shadow-glow-accent",
      "accent-purple": "text-accent-purple border-accent-purple/30 hover:shadow-glow-purple",
      success: "text-success border-success/30",
      warning: "text-warning border-warning/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Challenge <span className="text-gradient">Tracks</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Choose your battlefield and tackle cutting-edge problems across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            const colorClasses = getColorClasses(track.color);
            
            return (
              <div key={track.title} className="group">
                <div className={`
                  glass-card p-8 rounded-xl h-full border transition-all duration-300 
                  group-hover:scale-105 ${colorClasses}
                `}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center 
                      bg-gradient-to-br from-current/20 to-current/10
                    `}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron font-bold text-xl">
                      {track.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {track.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide opacity-80">
                      Key Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {track.challenges.map((challenge) => (
                        <span 
                          key={challenge}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-current/10 border border-current/20"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl mb-4">
              Can't Decide? <span className="text-gradient">Mix & Match!</span>
            </h3>
            <p className="text-muted-foreground">
              Feel free to combine elements from multiple tracks to create innovative 
              cross-domain solutions. The most creative approaches often win!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};