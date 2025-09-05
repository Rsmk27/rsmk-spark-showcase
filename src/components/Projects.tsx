import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Box } from '@react-three/drei';
import { Card } from '@/components/ui/card';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full gradient-secondary border-border shadow-card hover:glow-primary transition-all duration-300 overflow-hidden">
        {/* 3D Header */}
        <div className="h-32 relative overflow-hidden">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} intensity={0.5} />
            
            <Float speed={3} rotationIntensity={1} floatIntensity={1}>
              <Box args={[1, 1, 1]} rotation={[0.5, 0.5, 0]}>
                <meshStandardMaterial 
                  color={project.color} 
                  emissive={project.color} 
                  emissiveIntensity={0.2}
                />
              </Box>
            </Float>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
          </Canvas>
          
          <div className="absolute top-2 right-2 bg-primary/20 backdrop-blur-sm rounded-full p-2">
            <project.icon className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            {project.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {project.outcome && (
            <div className="mt-4 p-3 gradient-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-accent-foreground">
                <span className="font-semibold text-accent">Outcome:</span> {project.outcome}
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Automatic Exhaust Fan with Timer",
      description: "Smart home automation system using MQ-2 gas sensor and Arduino UNO for enhanced safety and energy efficiency.",
      tech: ["Arduino UNO", "MQ-2 Sensor", "C++", "Electronics"],
      features: [
        "Auto shut-off timer functionality",
        "Manual control switch override",
        "Gas detection automation"
      ],
      outcome: "Improved safety and energy efficiency for home/kitchen environments",
      color: "#00bfff",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v11H4V4z"/>
        </svg>
      )
    },
    {
      title: "OhmDecoder – Resistor Color Code Calculator",
      description: "Interactive web application that helps students and engineers quickly decode resistor values using color codes.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      features: [
        "Real-time color code calculation",
        "Student-friendly interface",
        "Mobile responsive design"
      ],
      outcome: "Live static website serving engineering community",
      color: "#22c55e",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      )
    },
    {
      title: "Budget Buddy – Expense Organizer",
      description: "Personal financial management tool built as a responsive static website for efficient expense tracking.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      features: [
        "Personal expense tracking",
        "Category-based organization",
        "Data visualization"
      ],
      outcome: "Streamlined personal budget management solution",
      color: "#ff6b35",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8zM6 8a2 2 0 012 2v.01a2 2 0 01-2 2 2 2 0 01-2-2V10a2 2 0 012-2z"/>
        </svg>
      )
    },
    {
      title: "Autonomous Grids (Research Stage)",
      description: "Exploring self-healing, decentralized smart grids with renewable energy integration for future power systems.",
      tech: ["Research", "Simulation", "Smart Grid", "Renewable Energy"],
      features: [
        "Self-healing grid concepts",
        "Decentralized architecture",
        "Control algorithm design"
      ],
      outcome: "Foundation for Green Tech and Smart Energy future",
      color: "#8b5cf6",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="projects">
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Arduino automation to web applications and research initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;