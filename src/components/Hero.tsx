import { Button } from "@/components/ui/button-variants";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/Hero-Background.jpg";


const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-4 tracking-tight">
          Mawuenyefia Hunorkpah
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-inter font-light mb-12 tracking-wider">
          Fashion | Conceptual/Artistic | Editorial | Portrait | Commercial
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToPortfolio}
          className="group"
        >
          View Portfolio
          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;