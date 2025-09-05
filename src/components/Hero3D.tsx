import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Sphere, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mesh } from 'three';
import heroBackground from '@/assets/hero-background.jpg';

const FloatingGeometry = () => {
  const sphereRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#00bfff" emissive="#00bfff" emissiveIntensity={0.2} />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[2, -1, 0]}>
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <Box args={[0.6, 0.6, 0.6]} position={[0, 2, -2]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.2} />
        </Box>
      </Float>
    </>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-20" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} color="#00bfff" intensity={0.5} />
          
          <FloatingGeometry />
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              RSMK
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Electrical & Electronics Engineering Student
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about <span className="text-primary font-semibold">Technology</span>, 
            <span className="text-accent font-semibold"> Innovation</span>, and 
            <span className="text-highlight font-semibold"> Problem-solving</span>
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-4 gradient-primary rounded-lg font-semibold hover:glow-primary transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
            <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;