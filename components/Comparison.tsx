import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-light-surface dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-light-text dark:text-white">Why InfraSense?</h2>
          <p className="text-light-textSecondary dark:text-gray-400">See how we compare to traditional monitoring tools.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px] mx-auto max-w-4xl bg-light-bg dark:bg-dark-900 rounded-2xl border border-light-border dark:border-dark-700 shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-light-surface dark:bg-dark-800/50">
                  <th className="py-6 px-8 text-left text-light-textSecondary dark:text-gray-400 font-medium w-1/3">Feature</th>
                  <th className="py-6 px-8 text-left text-light-textSecondary dark:text-gray-400 font-medium w-1/3">Traditional Tools</th>
                  <th className="py-6 px-8 text-left text-primary font-bold w-1/3 bg-primary/5">InfraSense</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border dark:divide-dark-700">
                <tr>
                  <td className="py-6 px-8 text-light-text dark:text-white font-medium">Approach</td>
                  <td className="py-6 px-8 text-light-textSecondary dark:text-gray-400">Observe problems</td>
                  <td className="py-6 px-8 text-primary font-semibold bg-primary/5">Predict before occurrence</td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-light-text dark:text-white font-medium">Notifications</td>
                  <td className="py-6 px-8 text-light-textSecondary dark:text-gray-400">Alert spam & fatigue</td>
                  <td className="py-6 px-8 text-primary font-semibold bg-primary/5">Risk-based prioritization</td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-light-text dark:text-white font-medium">Root Cause Analysis</td>
                  <td className="py-6 px-8 text-light-textSecondary dark:text-gray-400">Manual (Hours)</td>
                  <td className="py-6 px-8 text-primary font-semibold bg-primary/5">Automated (Seconds)</td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-light-text dark:text-white font-medium">Action</td>
                  <td className="py-6 px-8 text-light-textSecondary dark:text-gray-400">React to incidents</td>
                  <td className="py-6 px-8 text-primary font-semibold bg-primary/5">Prevent incidents</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};