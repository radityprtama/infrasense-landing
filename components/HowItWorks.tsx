import React, { useRef, useEffect } from 'react';
import { Network, Zap, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const steps = [
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "1. Connect",
    desc: "Plug into your existing observability stack in 5 minutes. No agents required."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "2. Predict",
    desc: "Our AI analyzes historical patterns and forecasts failures with high precision."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: "3. Prevent",
    desc: "Execute automated remediation or follow guided actions to stop the outage."
  }
];

const integrations = [
  "Datadog", "Prometheus", "New Relic", "Kubernetes", "Terraform", "Slack", "PagerDuty", "GitHub"
];

export const HowItWorks: React.FC = () => {
  const integrationsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (integrationsRef.current) {
        const rect = integrationsRef.current.getBoundingClientRect();
        // Start fading out when the element is 350px from the top of the viewport
        const startFade = 350;
        // Fully faded out when it reaches 50px from the top
        const endFade = 50;
        
        let opacity = 1;
        
        // Only apply fade out if it's moving towards the top (and not way below the fold)
        if (rect.top < startFade) {
           opacity = Math.max(0, Math.min(1, (rect.top - endFade) / (startFade - endFade)));
        }
        
        integrationsRef.current.style.opacity = opacity.toString();
        // Add a subtle scale down effect for better "decluttering" feel
        const scale = 0.9 + (0.1 * opacity);
        integrationsRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // -- Animation Variants --

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { 
      scaleX: 0, 
      opacity: 0 
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom "drawn" ease
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 24, 
      scale: shouldReduceMotion ? 1 : 0.98 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 1
      },
    },
    hover: {
      y: shouldReduceMotion ? 0 : -6,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const iconWrapperVariants: Variants = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 0.8, 
      rotate: shouldReduceMotion ? 0 : -6, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      boxShadow: "0 0 20px rgba(255, 107, 53, 0.4)", // Soft orange glow
      borderColor: "rgba(255, 107, 53, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-light-bg dark:bg-dark-900 border-t border-light-border dark:border-dark-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light-text dark:text-white">From Signal to Prevention</h2>
          <p className="text-light-textSecondary dark:text-gray-400 max-w-2xl mx-auto">
            A seamless workflow that integrates with your existing tools, not replaces them.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-10 mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {/* Connector Line (Desktop) */}
          <motion.div 
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 border-t border-dashed border-gray-300 dark:border-gray-700 -z-10"
            variants={lineVariants}
            style={{ originX: 0 }} // Ensures drawing starts from left
          />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center text-center group"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-24 h-24 bg-light-surface dark:bg-dark-800 rounded-full border border-light-border dark:border-dark-700 flex items-center justify-center mb-6 shadow-xl relative z-10"
                variants={iconWrapperVariants}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-light-text dark:text-white mb-4">{step.title}</h3>
              <p className="text-light-textSecondary dark:text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations */}
        <div className="bg-light-surface dark:bg-dark-800/50 rounded-2xl p-10 border border-light-border dark:border-dark-700 text-center overflow-hidden">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Integrates seamlessly with</p>
          <div 
            ref={integrationsRef} 
            className="flex flex-wrap justify-center gap-x-12 gap-y-8 transition-transform duration-75 ease-out will-change-transform will-change-opacity"
          >
            {integrations.map((item) => (
              <span key={item} className="text-xl font-bold text-gray-400 hover:text-primary transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};