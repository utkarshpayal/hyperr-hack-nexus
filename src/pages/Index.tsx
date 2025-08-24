import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Tracks } from "@/components/sections/Tracks";
import { Prizes } from "@/components/sections/Prizes";
import { FAQ } from "@/components/sections/FAQ";
import { Registration } from "@/components/sections/Registration";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="font-inter bg-background text-foreground">
      <Hero />
      <About />
      <Timeline />
      <Tracks />
      <Prizes />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
