import React from 'react';
import { Clock, AlertOctagon, TrendingDown, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: <DollarSign className="w-8 h-8 text-danger" />,
    title: "Costly Downtime",
    description: "Every hour of downtime costs enterprises between $100K and $5M in lost revenue and SLA penalties."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Slow Resolution",
    description: "Manual Root Cause Analysis (RCA) takes 2-8 hours per critical incident, wasting valuable engineering time."
  },
  {
    icon: <AlertOctagon className="w-8 h-8 text-accent" />,
    title: "Alert Fatigue",
    description: "SRE teams are overwhelmed by noise. Critical warnings get missed amidst hundreds of unprioritized notifications."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-blue-500" />,
    title: "Reactive Culture",
    description: "60% of SRE time is spent firefighting incidents rather than improving system reliability and architecture."
  }
];

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-light-surface dark:bg-dark-800 border-y border-light-border dark:border-dark-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-white">The High Cost of Reactive SRE</h2>
          <p className="text-light-textSecondary dark:text-gray-400 max-w-2xl mx-auto">
            Traditional observability tools only tell you what's broken. By then, it's already too late.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-light-bg dark:bg-dark-900 p-8 rounded-xl border border-light-border dark:border-dark-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors shadow-sm dark:shadow-none">
              <div className="bg-light-surface dark:bg-dark-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-light-border dark:border-dark-700">
                {prob.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-light-text dark:text-white">{prob.title}</h3>
              <p className="text-light-textSecondary dark:text-gray-400 text-sm leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};