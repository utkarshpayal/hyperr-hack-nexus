import { Brain, Cloud, Cpu, Zap } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Push the boundaries of AI with cutting-edge machine learning and neural networks"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Build scalable solutions leveraging modern cloud architectures and microservices"
    },
    {
      icon: Cpu,
      title: "GPU Optimization",
      description: "Harness the power of parallel processing and high-performance computing"
    },
    {
      icon: Zap,
      title: "Next-Gen Computing",
      description: "Explore quantum computing, edge computing, and revolutionary technologies"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            About the <span className="text-gradient">Hackathon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the most innovative hackathon of 2025, where brilliant minds converge to solve 
            tomorrow's computing challenges. Experience 72 hours of pure innovation, collaboration, 
            and technological breakthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="group">
                <div className="glass-card p-8 rounded-xl h-full hover:shadow-glow-primary transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary mb-6 mx-auto group-hover:animate-glow">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-gradient">
              Why Hyperrcompute?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hyperrcompute is at the forefront of computational innovation, providing the infrastructure 
              and tools that power tomorrow's applications. Our hackathon brings together the brightest 
              minds to explore the possibilities of advanced computing, from AI acceleration to quantum 
              algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};