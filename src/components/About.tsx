import { useEffect, useRef, useState } from "react";
import aboutPortrait from "@/assets/About.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img 
              src={aboutPortrait} 
              alt="Mawuenyefia Hunorkpah Portrait" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-6">
              I’m a fashion and editorial model developing a strong presence in expressive and story-driven work. My style combines emotional depth with creative direction to bring meaning to every image.
            </p>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-6">
             I focus on fashion, conceptual, and portrait modeling, using movement and expression to capture the vision behind each project.
            </p>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              I’m building my portfolio and open to collaborations and new projects. Let’s create visuals that speak without words.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
