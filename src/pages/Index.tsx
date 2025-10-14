import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="font-inter text-sm">
          © 2025 Mawuenyefia Hunorkpah. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
