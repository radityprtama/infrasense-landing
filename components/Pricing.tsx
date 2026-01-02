import React from 'react';
import { Shield, Lock, FileCheck, Server } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-light-bg dark:bg-dark-900 border-t border-light-border dark:border-dark-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Pricing Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-light-text dark:text-white">Enterprise-Ready Pricing</h2>
          <p className="text-light-textSecondary dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Tailored to your infrastructure scale, cluster count, and compliance requirements.
          </p>
           <a href="#demo" className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-orange-glow">
             Schedule Pricing Discussion
           </a>
           <p className="text-sm text-gray-500 mt-4">Annual contracts starting from $60K</p>
        </div>

        {/* Security & Compliance */}
        <div className="mt-20 pt-16 border-t border-light-border dark:border-dark-700">
           <div className="text-center mb-12">
               <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Trust & Security</span>
               <h3 className="text-2xl font-bold text-light-text dark:text-white mt-2">Bank-Grade Security Standards</h3>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                  <Shield className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
                  <h4 className="font-bold text-light-text dark:text-white">SOC 2 Type II</h4>
                  <p className="text-xs text-gray-500">Certified</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                  <Lock className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
                  <h4 className="font-bold text-light-text dark:text-white">ISO 27001</h4>
                  <p className="text-xs text-gray-500">Compliant</p>
              </div>
               <div className="flex flex-col items-center text-center p-4">
                  <FileCheck className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
                  <h4 className="font-bold text-light-text dark:text-white">GDPR</h4>
                  <p className="text-xs text-gray-500">Compliant</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                  <Server className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
                  <h4 className="font-bold text-light-text dark:text-white">On-Prem Option</h4>
                  <p className="text-xs text-gray-500">Available</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};