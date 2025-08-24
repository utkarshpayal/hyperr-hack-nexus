import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
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
    <div className="font-inter bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="tracks">
        <Tracks />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="registration">
        <Registration />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
