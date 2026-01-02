import React from 'react';
import { Search, BrainCircuit, ShieldAlert, Zap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Predictive Forecasting",
    description: "Analyzes metric trends (CPU, latency, error rates) to forecast failure points 3-12 hours in advance with high confidence scores."
  },
  {
    icon: Search,
    title: "Auto Root Cause Analysis",
    description: "Instantly correlates incidents with commits, config changes, and API spikes. Generates human-readable RCA summaries in seconds."
  },
  {
    icon: ShieldAlert,
    title: "Blast Radius Assessment",
    description: "Calculates affected systems and simulates impact scenarios, allowing you to prioritize risks based on business impact."
  },
  {
    icon: Zap,
    title: "Automated Remediation",
    description: "Execute automated runbooks to scale resources, restart pods, or reroute traffic before the user is impacted."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: (custom: number) => ({
    width: "100%",
    transition: { 
      delay: custom * 0.5 + 0.5, // Sequential delays based on step index
      duration: 1, 
      ease: "easeInOut" 
    }
  })
};

const terminalLineVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 2.5 + (i * 0.5), duration: 0.3 } // Starts after progress bars
  })
};

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-light-bg dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-light-text dark:text-white">
            Not just Observability. <br/>
            <span className="text-light-textSecondary dark:text-gray-300">Preventive Intelligence.</span>
          </h2>
          <p className="text-light-textSecondary dark:text-gray-400 max-w-3xl text-lg">
            InfraSense fills the critical gap between detection and resolution by preventing incidents entirely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Capability Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                className="group p-6 bg-light-surface dark:bg-dark-800 rounded-2xl border border-light-border dark:border-dark-700 hover:border-primary/50 hover:bg-light-card dark:hover:bg-dark-800/80 transition-colors duration-300"
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(255, 107, 53, 0.15)",
                  transition: { type: "spring", stiffness: 300 } 
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    backgroundColor: "rgba(255, 107, 53, 0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <cap.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">{cap.title}</h3>
                <p className="text-light-textSecondary dark:text-gray-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Animated Workflow Visualization */}
          <motion.div 
            className="relative h-full min-h-[450px] rounded-2xl overflow-hidden border border-light-border dark:border-dark-700 bg-gradient-to-br from-light-surface to-light-card dark:from-dark-800 dark:to-dark-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Abstract Graphic Representation */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="space-y-8">
                    {/* Step 1: Collecting */}
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center font-mono font-bold z-10">01</div>
                        <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gray-400 dark:bg-gray-500"
                              custom={0}
                              variants={progressVariants}
                            ></motion.div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-500 font-mono w-32">Collecting Metrics</div>
                    </motion.div>

                     {/* Step 2: Anomaly */}
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono font-bold border border-accent/50 z-10">02</div>
                        <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-accent"
                              custom={1}
                              variants={progressVariants}
                            ></motion.div>
                        </div>
                        <div className="text-sm text-accent font-bold font-mono w-32">Anomaly Predicted</div>
                    </motion.div>

                     {/* Step 3: Remediation */}
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-mono font-bold shadow-lg shadow-primary/50 z-10">03</div>
                        <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-primary"
                              custom={2}
                              variants={progressVariants}
                            ></motion.div>
                        </div>
                        <div className="text-sm text-primary dark:text-white font-bold font-mono w-32">Auto-Remediation</div>
                    </motion.div>
                </div>

                {/* Simulated Terminal Output */}
                <motion.div 
                  className="mt-12 bg-light-bg dark:bg-black/40 rounded-lg p-4 border border-light-border dark:border-dark-700 font-mono text-xs text-gray-700 dark:text-gray-300 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                    <motion.div custom={0} variants={terminalLineVariants} className="flex gap-2 mb-2">
                        <span className="text-secondary">➜</span>
                        <span>Analysing dependencies...</span>
                    </motion.div>
                    <motion.div custom={1} variants={terminalLineVariants} className="flex gap-2 mb-2">
                        <span className="text-secondary">➜</span>
                        <span>Identified root cause: <span className="text-danger">Memory Leak in OrderService</span></span>
                    </motion.div>
                     <motion.div custom={2} variants={terminalLineVariants} className="flex gap-2 mb-2">
                        <span className="text-secondary">➜</span>
                        <span>Action: <span className="text-primary">Scaling Replicas +2</span></span>
                    </motion.div>
                    <motion.div custom={3} variants={terminalLineVariants} className="flex gap-2">
                        <span className="text-secondary">✔</span>
                        <span className="text-secondary">Incident Prevented. Service Health Stable.</span>
                    </motion.div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};