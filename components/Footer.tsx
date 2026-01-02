import React from 'react';
import { Activity, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-light-surface dark:bg-dark-900 pt-20 pb-10 border-t border-light-border dark:border-dark-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-light-text dark:text-white">
                Infra<span className="text-primary">Sense</span>
              </span>
            </a>
            <p className="text-light-textSecondary dark:text-gray-400 text-sm leading-relaxed mb-6">
              The first predictive SRE platform that prevents incidents before they happen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-light-text dark:text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-light-textSecondary dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-text dark:text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-light-textSecondary dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-text dark:text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-light-textSecondary dark:text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-light-border dark:border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>&copy; 2026 InfraSense Inc. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};