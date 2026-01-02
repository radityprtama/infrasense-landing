import React, { useState } from 'react';
import { Send, CheckCircle2, Building, Users, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const DemoRequest: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    scale: '<50',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerConfetti();
    }, 1500);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF6B35', '#00D67E', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF6B35', '#00D67E', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "w-full bg-light-bg dark:bg-dark-900 border border-gray-200 dark:border-dark-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder-gray-400 dark:placeholder-gray-600 hover:border-primary/50";
  const labelClasses = "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2";

  return (
    <div className="min-h-screen pt-24 pb-12 bg-light-bg dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
            <Link to="/" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                ← Back to Home
            </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-2 space-y-8 py-4">
                <div>
                    <h1 className="text-4xl font-bold text-light-text dark:text-white mb-4">
                        See InfraSense in Action
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Book a personalized demo with our engineering team. We'll show you exactly how we can prevent your next outage.
                    </p>
                </div>

                <div className="space-y-6 pt-6">
                    <div className="flex gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg h-fit">
                            <Server className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-light-text dark:text-white">Predict Failures</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">See incidents 3-12 hours before they happen.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg h-fit">
                            <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-light-text dark:text-white">Enterprise Ready</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">SOC 2 Type II, ISO 27001, and On-Prem options.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg h-fit">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-light-text dark:text-white">Expert Support</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Direct access to senior SREs during onboarding.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                             {[1,2,3].map(i => (
                                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-900 bg-gray-300 dark:bg-gray-700"></div>
                             ))}
                        </div>
                        <div className="text-sm text-gray-500">
                            Trusted by <span className="font-bold text-light-text dark:text-white">200+</span> engineering teams
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-3">
                <div className="bg-light-surface dark:bg-dark-800 border border-light-border dark:border-dark-700 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary to-primary-600"></div>
                    
                    {isSubmitted ? (
                        <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary/20">
                                <CheckCircle2 className="w-10 h-10 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-light-text dark:text-white mb-4">Request Sent!</h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
                                Thank you, {formState.name}. We've received your request. Check your email at <span className="text-primary font-medium">{formState.email}</span> for next steps.
                            </p>
                            <Link to="/" className="text-primary font-bold hover:text-primary-600 transition-colors inline-flex items-center gap-2">
                                Return to Homepage
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>First Name</label>
                                    <input required name="name" type="text" className={inputClasses} placeholder="Jane" value={formState.name} onChange={handleChange} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Work Email</label>
                                    <input required name="email" type="email" className={inputClasses} placeholder="jane@company.com" value={formState.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Company</label>
                                    <input required name="company" type="text" className={inputClasses} placeholder="Acme Inc." value={formState.company} onChange={handleChange} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Role</label>
                                    <input required name="role" type="text" className={inputClasses} placeholder="CTO / VP Engineering" value={formState.role} onChange={handleChange} />
                                </div>
                            </div>

                             <div>
                                <label className={labelClasses}>Infrastructure Scale</label>
                                <select name="scale" className={inputClasses} value={formState.scale} onChange={handleChange}>
                                    <option value="<50">&lt; 50 nodes</option>
                                    <option value="50-200">50 - 200 nodes</option>
                                    <option value="200-1000">200 - 1000 nodes</option>
                                    <option value="1000+">1000+ nodes</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClasses}>Anything else?</label>
                                <textarea name="message" rows={3} className={inputClasses} placeholder="Tell us about your biggest reliability challenge..." value={formState.message} onChange={handleChange} />
                            </div>

                            <button type="submit" disabled={isSubmitting} 
                                className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:shadow-orange-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5">
                                {isSubmitting ? 'Submitting...' : 'Schedule Demo'} <Send className="w-5 h-5" />
                            </button>
                            
                            <p className="text-center text-xs text-gray-400 mt-4">
                                By submitting this form, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};