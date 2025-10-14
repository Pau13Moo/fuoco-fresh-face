import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-option-4.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional business consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
            Transform Your Organization with Expert Guidance
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-95 animate-fade-in-up [animation-delay:200ms] text-balance max-w-3xl mx-auto">
            Strategic consulting and leadership support for organizations navigating change, growth, and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant text-lg h-14 px-8"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg h-14 px-8"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
