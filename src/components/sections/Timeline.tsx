import { CheckCircle, Circle, Clock, Lightbulb, Code, Presentation, Trophy } from "lucide-react";

export const Timeline = () => {
  const phases = [
    {
      icon: Circle,
      title: "Registration",
      date: "Feb 1 - Mar 10",
      description: "Sign up and form your team",
      status: "active"
    },
    {
      icon: Lightbulb,
      title: "Idea Submission",
      date: "Mar 11 - Mar 14",
      description: "Submit your innovative concept",
      status: "upcoming"
    },
    {
      icon: Code,
      title: "Hacking",
      date: "Mar 15 - Mar 17",
      description: "72 hours of non-stop development",
      status: "upcoming"
    },
    {
      icon: Presentation,
      title: "Demos",
      date: "Mar 17",
      description: "Present your solution to judges",
      status: "upcoming"
    },
    {
      icon: Trophy,
      title: "Winners",
      date: "Mar 17",
      description: "Celebrate the champions",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Hackathon <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Follow the journey from registration to victory
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 w-1/5" />
          
          <div className="flex justify-between items-center relative">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isActive = phase.status === 'active';
              const isCompleted = phase.status === 'completed';
              
              return (
                <div key={phase.title} className="flex flex-col items-center group">
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300
                    ${isActive ? 'bg-gradient-primary glow-primary' : 
                      isCompleted ? 'bg-success' : 'glass-card border border-border'}
                    group-hover:scale-110
                  `}>
                    <IconComponent className={`
                      w-8 h-8 
                      ${isActive ? 'text-primary-foreground' : 
                        isCompleted ? 'text-white' : 'text-muted-foreground'}
                    `} />
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl text-center max-w-xs group-hover:shadow-glow-primary transition-all duration-300">
                    <h3 className="font-orbitron font-bold text-lg mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {phase.date}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isActive = phase.status === 'active';
            const isCompleted = phase.status === 'completed';
            
            return (
              <div key={phase.title} className="flex items-start gap-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                  ${isActive ? 'bg-gradient-primary glow-primary' : 
                    isCompleted ? 'bg-success' : 'glass-card border border-border'}
                `}>
                  <IconComponent className={`
                    w-6 h-6 
                    ${isActive ? 'text-primary-foreground' : 
                      isCompleted ? 'text-white' : 'text-muted-foreground'}
                  `} />
                </div>
                
                <div className="glass-card p-6 rounded-xl flex-1">
                  <h3 className="font-orbitron font-bold text-lg mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {phase.date}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};