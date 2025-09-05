import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere } from '@react-three/drei';

const Contact = () => {
  const contactMethods = [
    {
      label: "Email",
      value: "rsmk@example.com",
      href: "mailto:rsmk@example.com",
      icon: "📧",
      color: "primary"
    },
    {
      label: "GitHub",
      value: "github.com/rsmk27",
      href: "https://github.com/rsmk27",
      icon: "⚡",
      color: "accent"
    },
    {
      label: "Portfolio",
      value: "rsmk27.github.io/myportfolio",
      href: "https://rsmk27.github.io/myportfolio",
      icon: "🌐",
      color: "highlight"
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
      icon: "💼",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="contact">
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities in technology and innovation
          </p>
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
              <pointLight position={[-3, -3, 3]} color="#00bfff" intensity={0.3} />
              
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[0.8, 16, 16]} position={[-1, 0, 0]}>
                  <meshStandardMaterial color="#00bfff" emissive="#00bfff" emissiveIntensity={0.2} />
                </Sphere>
              </Float>
              
              <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
                <Sphere args={[0.6, 16, 16]} position={[1, 1, 0]}>
                  <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
                </Sphere>
              </Float>
              
              <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.2}>
                <Sphere args={[0.4, 16, 16]} position={[0, -1, 1]}>
                  <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.2} />
                </Sphere>
              </Float>
              
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="block p-6 gradient-secondary rounded-lg border border-border shadow-card hover:glow-primary transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.value}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 gradient-secondary rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to <span className="text-accent">Collaborate</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're interested in discussing projects, sharing ideas about Green Tech, 
            or exploring collaboration opportunities, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-primary rounded-lg font-semibold hover:glow-primary transition-all duration-300"
            >
              Send Email
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View GitHub
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;