import { Trophy, Gift, Star, Briefcase, Users, Award } from "lucide-react";

export const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      rank: "1st Place",
      title: "Grand Champion",
      amount: "$20,000",
      perks: ["Mentorship Program", "Incubator Access", "Job Opportunities"],
      gradient: "from-primary to-primary-glow",
      glow: "glow-primary"
    },
    {
      icon: Award,
      rank: "2nd Place", 
      title: "Innovation Leader",
      amount: "$12,000",
      perks: ["Tech Conference Tickets", "Cloud Credits", "Hardware Prizes"],
      gradient: "from-accent to-accent/70",
      glow: "glow-accent"
    },
    {
      icon: Star,
      rank: "3rd Place",
      title: "Rising Star",
      amount: "$8,000", 
      perks: ["Course Subscriptions", "Software Licenses", "Swag Package"],
      gradient: "from-accent-purple to-accent-purple/70",
      glow: "glow-purple"
    }
  ];

  const opportunities = [
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Get fast-tracked interviews with leading tech companies"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Connect with industry experts and successful entrepreneurs"
    },
    {
      icon: Gift,
      title: "Startup Credits",
      description: "Receive cloud computing credits and development tools"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Prizes & <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete for amazing rewards and life-changing opportunities
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            
            return (
              <div key={prize.rank} className="group">
                <div className={`
                  glass-card p-8 rounded-2xl h-full transition-all duration-500 
                  group-hover:scale-105 ${prize.glow} hover:shadow-2xl
                  ${index === 0 ? 'md:scale-110 relative z-10' : ''}
                `}>
                  {index === 0 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-primary-foreground">WINNER</span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`
                      w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center
                      bg-gradient-to-br ${prize.gradient} group-hover:animate-glow
                    `}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-2xl mb-2">
                      {prize.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{prize.rank}</p>
                    
                    <div className="text-4xl font-black mb-6 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent">
                      {prize.amount}
                    </div>
                    
                    <div className="space-y-3">
                      {prize.perks.map((perk) => (
                        <div key={perk} className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                          <span className="text-sm text-muted-foreground">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Opportunities */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-orbitron font-bold text-2xl text-center mb-8">
            Beyond the <span className="text-gradient">Prize Money</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => {
              const IconComponent = opportunity.icon;
              
              return (
                <div key={opportunity.title} className="glass-card p-6 rounded-xl text-center group hover:shadow-glow-primary transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-primary/30">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-6 rounded-xl inline-block">
            <p className="text-lg">
              <span className="text-gradient font-bold">Total Prize Pool: $50,000+</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Plus countless networking and career opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};