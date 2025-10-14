import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Linkedin, Mail } from "lucide-react";

// Custom TikTok SVG
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5">
    <path fill="currentColor" d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128h-48c0 44.18-35.82 80-80 80s-80-35.82-80-80 35.82-80 80-80v48l48 0V0h-48z"/>
  </svg>
);

// Custom WhatsApp SVG
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5">
    <path fill="currentColor" d="M380.9 97.1C339-28 175.2-13.5 97.1 64.6-1.3 163-6.7 326.7 84.3 392.6L0 512l120.9-84.3c65.8 91 229.6 85.7 328-12.6C461.5 336.8 446 172.9 380.9 97.1zM224 336c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-playfair font-bold mb-4 text-foreground transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className={`text-lg text-muted-foreground font-inter transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Available for bookings and collaborations worldwide
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-secondary border-border focus:border-accent" />
              <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-secondary border-border focus:border-accent" />
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={6} className="bg-secondary border-border focus:border-accent resize-none" />
              <Button type="submit" variant="gold" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-4">
                <a href="https://www.instagram.com/yearstocome_97/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><Instagram className="h-5 w-5" /></div>
                  <span className="font-inter">Instagram</span>
                </a>

                <a href="https://x.com/YearsToCome_97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><Mail className="h-5 w-5" /></div>
                  <span className="font-inter">Twitter</span>
                </a>

                <a href="https://www.linkedin.com/in/mawuenyefia-hunorkpah-99845b2b5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><Linkedin className="h-5 w-5" /></div>
                  <span className="font-inter">LinkedIn</span>
                </a>

                <a href="mailto:degovernorpf230@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><Mail className="h-5 w-5" /></div>
                  <span className="font-inter">Email</span>
                </a>

                <a href="https://www.tiktok.com/@yearstocome_97?_t=ZM-90WQWt9jTgZ&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><TikTokIcon /></div>
                  <span className="font-inter">TikTok</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
