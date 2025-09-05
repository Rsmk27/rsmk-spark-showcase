import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero3D />
        </section>
        
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 RSMK. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
