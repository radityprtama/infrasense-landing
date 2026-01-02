import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactForm: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-light-bg to-primary-50 dark:from-dark-900 dark:to-primary-900/10 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-light-surface dark:bg-dark-800 border border-light-border dark:border-dark-700 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden text-center">
          {/* Decorative Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light-text dark:text-white">Ready to Prevent Downtime?</h2>
              <p className="text-lg text-light-textSecondary dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Join engineering leaders from top tech companies who trust InfraSense to keep their systems online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link
                    to="/demo"
                    className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-orange-glow transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 text-lg"
                  >
                    Request Your Demo <Send className="w-5 h-5" />
                  </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-500">
                No credit card required for demo request. Response in 24h.
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};