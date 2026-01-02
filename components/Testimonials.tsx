import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-light-surface dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text dark:text-white">
              "It's like having a senior SRE working 24/7."
            </h2>
            <div className="space-y-8">
              <div className="bg-light-bg dark:bg-dark-900 p-8 rounded-xl border border-light-border dark:border-dark-700 relative shadow-sm">
                <Quote className="absolute top-8 right-8 text-gray-300 dark:text-gray-700 w-8 h-8" />
                <p className="text-lg text-light-textSecondary dark:text-gray-300 mb-6 italic relative z-10">
                  InfraSense reduced our MTTR by 75% and predicted 3 major incidents last quarter before they impacted a single user. The automated remediation alone has saved us countless weekends.
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-primary-600"></div>
                   <div>
                     <div className="font-bold text-light-text dark:text-white">John Doe</div>
                     <div className="text-sm text-gray-500 dark:text-gray-400">VP Engineering at TechCorp</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-light-bg dark:bg-dark-900 p-6 rounded-lg border border-light-border dark:border-dark-700 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm text-primary font-bold uppercase mb-2">Fintech Platform</div>
              <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">Payment Gateway Protection</h3>
              <p className="text-light-textSecondary dark:text-gray-400 text-sm">
                Predicted payment gateway overload during peak trading hours and auto-scaled before transaction failures occurred.
              </p>
            </div>
            <div className="bg-light-bg dark:bg-dark-900 p-6 rounded-lg border border-light-border dark:border-dark-700 border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-shadow">
               <div className="text-sm text-secondary font-bold uppercase mb-2">E-Commerce Giant</div>
              <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">Black Friday Stability</h3>
              <p className="text-light-textSecondary dark:text-gray-400 text-sm">
                Detected database connection pool exhaustion 4 hours before checkout failures, automatically increasing capacity.
              </p>
            </div>
             <div className="bg-light-bg dark:bg-dark-900 p-6 rounded-lg border border-light-border dark:border-dark-700 border-l-4 border-l-accent shadow-sm hover:shadow-md transition-shadow">
               <div className="text-sm text-accent font-bold uppercase mb-2">SaaS Unicorn</div>
              <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">Memory Leak Prevention</h3>
              <p className="text-light-textSecondary dark:text-gray-400 text-sm">
                Identified memory leak patterns across 200+ microservices and executed targeted restarts before customer impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};