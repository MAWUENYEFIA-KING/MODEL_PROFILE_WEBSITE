import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    type: "Agency",
name: "Independent",
description: "Building my path in fashion and editorial modeling. Open to representation and collaborations."

  },
  {
    type: "Brand",
name: "Wildsar",
description: "Featured in a fashion shoot showcasing Wildsar’s signature cap collection."

  },
  {
    "type": "Event",
  "name": "School Vintage Shoot",
  "description": "Featured in a vintage-themed photoshoot during our departmental week celebration."
  },
  {
     "type": "Brand",
  "name": "Wildstar Collection",
  "description": "Featured on Wildstar's Verse singlet as part of their campaign."
  },
  {
  "type": "Editorial",
  "name": "OntheMap_Shot",
  "description": "Featured in OntheMap shoots. Worked together on multiple occasions."
  },
  {
    "type": "Event",
  "name": "Vintage Shoot",
  "description": "Featured in a vintage-themed shoot organized by Model AmeAfrico."
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="experience" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 bg-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl md:text-6xl font-playfair font-bold mb-4 text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group bg-background p-8 transition-all duration-700 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="text-accent text-sm font-inter font-medium uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {exp.name}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;