import React, { useEffect, useRef } from 'react';
import { Zap, TrendingDown, DollarSign, Target } from 'lucide-react';
import { animate, useInView } from 'framer-motion';

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    value: 85,
    prefix: "",
    suffix: "%",
    label: "Faster Incident Response",
    desc: "From hours to minutes",
    color: "text-primary"
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    value: 60,
    prefix: "",
    suffix: "%",
    label: "Reduction in Downtime",
    desc: "Prevent incidents before escalation",
    color: "text-secondary"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    value: 2,
    prefix: "$",
    suffix: "M+",
    label: "Annual Savings",
    desc: "Reduce SLA violations & manual effort",
    color: "text-accent"
  },
  {
    icon: <Target className="w-6 h-6" />,
    value: 90,
    prefix: "",
    suffix: "%",
    label: "Alert Noise Reduction",
    desc: "Focus on what matters",
    color: "text-primary-400"
  }
];

const Counter: React.FC<{ value: number; prefix?: string; suffix?: string; className?: string }> = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  className 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return <div ref={ref} className={className}>{prefix}0{suffix}</div>;
};

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-light-surface dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-light-text dark:text-white">Measurable Impact</h2>
          <p className="text-light-textSecondary dark:text-gray-400">Real results from enterprise deployments.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-light-bg dark:bg-dark-900 p-8 rounded-xl border border-light-border dark:border-dark-700 hover:border-primary transition-colors group text-center shadow-sm">
              <div className={`mx-auto w-12 h-12 rounded-full bg-light-surface dark:bg-dark-800 flex items-center justify-center mb-4 ${benefit.color} group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <Counter 
                value={benefit.value} 
                prefix={benefit.prefix} 
                suffix={benefit.suffix} 
                className={`text-4xl font-bold mb-2 ${benefit.color}`}
              />
              <h3 className="text-lg font-semibold text-light-text dark:text-white mb-2">{benefit.label}</h3>
              <p className="text-sm text-light-textSecondary dark:text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};