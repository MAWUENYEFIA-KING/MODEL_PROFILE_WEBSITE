import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-3.jpg";
import portfolio3 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-14.jpg";
import portfolio8 from "@/assets/portfolio-9.jpg";
import portfolio9 from "@/assets/portfolio-8.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio-7.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";

const portfolioImages = [
  { src: portfolio1, alt: "High-fashion runway editorial" },
  { src: portfolio2, alt: "Designer clothing editorial shoot" },
  { src: portfolio3, alt: "Haute couture photography" },
  { src: portfolio4, alt: "Runway fashion photography" },
  { src: portfolio5, alt: "Fashion model portrait" },
  { src: portfolio6, alt: "Full-length editorial shot" },
  { src: portfolio7, alt: "Full-length editorial shot" },
  { src: portfolio8, alt: "Full-length editorial shot" },
  { src: portfolio9, alt: "Full-length editorial shot" },
  { src: portfolio10, alt: "Full-length editorial shot" },
  { src: portfolio11, alt: "Full-length editorial shot" },
  { src: portfolio12, alt: "Full-length editorial shot" },
  { src: portfolio13, alt: "Full-length editorial shot" },
  { src: portfolio14, alt: "Full-length editorial shot" },
  { src: portfolio15, alt: "Full-length editorial shot" }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl md:text-6xl font-playfair font-bold mb-4 text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer aspect-[3/4] transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg font-inter">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-10 w-10" />
          </button>
          <img
            src={portfolioImages[selectedImage].src}
            alt={portfolioImages[selectedImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;