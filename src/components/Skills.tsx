import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sphere } from '@react-three/drei';

const SkillOrb = ({ skill, position, color }: { skill: any; position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <Sphere args={[0.8, 16, 16]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} transparent opacity={0.8} />
        </Sphere>
        <Text
          position={[0, 0, 0.9]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
};

const Skills3D = () => {
  const skills = [
    { name: "Arduino", position: [-2, 1, 0] as [number, number, number], color: "#00bfff" },
    { name: "Python", position: [2, 0, 0] as [number, number, number], color: "#22c55e" },
    { name: "React", position: [0, -1.5, 1] as [number, number, number], color: "#ff6b35" },
    { name: "IoT", position: [-1, -1, -1] as [number, number, number], color: "#8b5cf6" },
  ];

  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} color="#00bfff" intensity={0.3} />
        
        {skills.map((skill, index) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            position={skill.position}
            color={skill.color}
          />
        ))}
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Electrical & Electronics",
      skills: ["Circuits", "Sensors", "Motor Drivers", "Power Systems"],
      color: "primary"
    },
    {
      title: "Programming",
      skills: ["C", "Python (basics)", "Embedded C", "JavaScript"],
      color: "accent"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Static Site Hosting"],
      color: "highlight"
    },
    {
      title: "Prototyping & Tools",
      skills: ["Arduino Ecosystem", "IoT Sensors", "GitHub", "VS Code"],
      color: "primary"
    }
  ];

  const technicalArsenal = [
    {
      category: "Microcontrollers",
      items: ["Arduino Uno", "Nano", "Wi-Fi board"]
    },
    {
      category: "Modules & Sensors",
      items: ["Ultrasonic", "IR", "LDR", "MQ-2", "Bluetooth", "Servo motor"]
    },
    {
      category: "Development Tools",
      items: ["GitHub", "VS Code", "Visual Studio", "Render hosting"]
    },
    {
      category: "Creative Tools",
      items: ["Blender (3D)", "TailwindCSS", "UI/UX Design"]
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="skills">
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Skills3D />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-secondary p-6 rounded-lg border border-border shadow-card hover:glow-primary transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technical Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-highlight">⚡</span> Technical Arsenal
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalArsenal.map((arsenal, index) => (
              <motion.div
                key={arsenal.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-primary mb-3">
                  {arsenal.category}
                </h4>
                <div className="space-y-1">
                  {arsenal.items.map((item) => (
                    <div key={item} className="text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;