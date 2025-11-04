import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Header */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            Our Work
          </h2>
          
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Explore how Esenyx is powering events across India.
          </p>
          
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            See how we've helped event organizers deliver exceptional experiences — 
            from trade expos to corporate summits.
          </p>
          
          {/* CTA */}
          <div className="pt-6">
            <Link to="/our-work">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto group">
                View Work Timeline
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
