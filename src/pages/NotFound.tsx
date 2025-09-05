import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-bg opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1 
          className="text-8xl font-bold mb-4 text-glow"
          animate={{ 
            textShadow: [
              "0 0 10px hsl(195 100% 50% / 0.5)",
              "0 0 20px hsl(195 100% 50% / 0.8)",
              "0 0 10px hsl(195 100% 50% / 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="gradient-primary bg-clip-text text-transparent">404</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Oops! This page seems to be in another dimension
        </motion.p>
        
        <motion.a 
          href="/" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 gradient-primary rounded-lg font-semibold hover:glow-primary transition-all duration-300"
        >
          Return to Portfolio
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
