import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere } from '@react-three/drei';

const About = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-bg opacity-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            About <span className="text-primary">RSMK</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 relative"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              
              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1.2, 32, 32]}>
                  <meshStandardMaterial 
                    color="#00bfff" 
                    emissive="#00bfff" 
                    emissiveIntensity={0.1}
                    wireframe
                  />
                </Sphere>
              </Float>
              
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">RSMK</span>, an Electrical and Electronics Engineering student 
              passionate about technology, innovation, and problem-solving. My journey blends engineering fundamentals, 
              practical projects, and creative tech explorations.
            </p>
            
            <p className="text-lg leading-relaxed">
              I believe in <span className="text-accent font-semibold">learning by building</span>, and I'm constantly 
              expanding my technical and creative toolkit to prepare for the future of 
              <span className="text-highlight font-semibold"> Green Tech and Smart Energy</span>.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 gradient-secondary rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Started Engineering Journey</div>
              </div>
              
              <div className="text-center p-4 gradient-secondary rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Arduino', 'IoT', 'Web Development', 'Green Tech', '3D Design'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 gradient-accent rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;