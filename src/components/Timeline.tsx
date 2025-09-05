import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2023",
      title: "Started B.Tech Journey",
      description: "Began Electrical and Electronics Engineering studies",
      type: "education",
      color: "primary"
    },
    {
      year: "2024",
      title: "Arduino Projects Era",
      description: "Worked on small-scale Arduino projects including sensors, servo control, and automation systems",
      type: "project",
      color: "accent"
    },
    {
      year: "2025",
      title: "Major Project Launches",
      description: "Completed Automatic Exhaust Fan project and launched OhmDecoder website",
      type: "achievement",
      color: "highlight"
    },
    {
      year: "2025",
      title: "Budget Buddy & Green Tech",
      description: "Built Budget Buddy tool and started roadmap for Green Tech & Smart Energy exploration",
      type: "development",
      color: "primary"
    },
    {
      year: "Present",
      title: "Creative Tech Exploration",
      description: "Exploring 3D design with Blender and creating innovative website designs",
      type: "current",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="timeline">
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            My <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Journey through innovation and learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-primary rounded-full opacity-30" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-secondary p-6 rounded-lg border border-border shadow-card hover:glow-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold gradient-${event.color}`}>
                      {event.year}
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-${event.color} animate-pulse`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Center node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className={`w-6 h-6 rounded-full bg-${event.color} border-4 border-background shadow-lg animate-pulse-glow`}
                />
              </div>

              {/* Empty space on the other side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Future goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 gradient-secondary rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">
            Looking Ahead to <span className="text-accent">Green Tech Future</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuing to explore the intersection of technology and sustainability, 
            with focus on smart energy solutions and innovative engineering applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;