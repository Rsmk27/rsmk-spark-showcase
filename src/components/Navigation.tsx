import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import rsmkLogo from '@/assets/rsmk-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <img 
              src={rsmkLogo} 
              alt="RSMK Logo" 
              className="h-10 w-auto filter brightness-0 invert hover:drop-shadow-[0_0_10px_rgba(0,191,255,0.5)] transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 gradient-primary rounded-lg font-semibold hover:glow-primary transition-all duration-300"
            onClick={() => scrollToSection('#contact')}
          >
            Let's Connect
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;