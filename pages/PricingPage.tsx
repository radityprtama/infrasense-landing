import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Zap, Shield, Users, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'For small teams getting started with predictive monitoring.',
    cta: 'Start Free Trial',
    ctaLink: '/demo',
    highlight: false,
    features: [
      { name: 'Up to 50 nodes', included: true },
      { name: 'Basic anomaly detection', included: true },
      { name: '24-hour prediction window', included: true },
      { name: 'Email alerts', included: true },
      { name: 'Slack integration', included: true },
      { name: '5 team members', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced AI predictions', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Dedicated support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$799',
    period: '/month',
    description: 'Advanced AI predictions for growing engineering teams.',
    cta: 'Start Free Trial',
    ctaLink: '/demo',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { name: 'Up to 500 nodes', included: true },
      { name: 'Advanced AI predictions', included: true },
      { name: '72-hour prediction window', included: true },
      { name: 'Multi-channel alerts', included: true },
      { name: 'All integrations (Datadog, PagerDuty, etc.)', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Automated remediation', included: true },
      { name: 'Custom dashboards', included: true },
      { name: 'SSO / SAML', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full platform with dedicated support and compliance.',
    cta: 'Contact Sales',
    ctaLink: '/demo',
    highlight: false,
    features: [
      { name: 'Unlimited nodes', included: true },
      { name: 'Full AI suite with custom models', included: true },
      { name: '7-day prediction window', included: true },
      { name: 'Custom alert workflows', included: true },
      { name: 'Custom integrations & APIs', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Dedicated support engineer', included: true },
      { name: 'On-premise deployment option', included: true },
      { name: 'SSO / SAML / SCIM', included: true },
      { name: 'SOC 2 Type II & ISO 27001 reports', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'Start with a 14-day free trial on any plan. No credit card required. You get full access to all features in your selected tier, and our team will help you connect your first data source.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at your next billing cycle.',
  },
  {
    question: 'What counts as a "node"?',
    answer: 'A node is any monitored entity: a server, container, Kubernetes pod, database instance, or service endpoint. We count unique active nodes over your billing period.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, annual billing saves you 20% compared to monthly. Enterprise customers typically work with annual or multi-year contracts for additional savings.',
  },
  {
    question: 'What integrations are included?',
    answer: 'Starter includes Slack and email. Pro and Enterprise include Datadog, Prometheus, New Relic, PagerDuty, OpsGenie, GitHub Actions, Terraform, and more. Enterprise can request custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is paramount. We\'re SOC 2 Type II certified, ISO 27001 compliant, and GDPR ready. Enterprise customers can opt for on-premise deployment for complete data control.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-light-bg dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-light-text dark:text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Choose the plan that fits your infrastructure. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-primary/5 to-transparent border-primary/30 shadow-xl shadow-primary/10 scale-105 z-10'
                  : 'bg-light-surface dark:bg-dark-800 border-light-border dark:border-dark-700 hover:border-primary/30'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full shadow-lg shadow-primary/30">
                    <Zap className="w-4 h-4" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-4xl font-bold text-light-text dark:text-white">{tier.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">{tier.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-light-text dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={tier.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/25 hover:shadow-orange-glow'
                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <div className="bg-light-surface dark:bg-dark-800/50 rounded-2xl p-10 border border-light-border dark:border-dark-700 mb-24">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Trust & Security</span>
            <h3 className="text-2xl font-bold text-light-text dark:text-white mt-2">Enterprise-Grade Security</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
              <h4 className="font-bold text-light-text dark:text-white">SOC 2 Type II</h4>
              <p className="text-xs text-gray-500">Certified</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
              <h4 className="font-bold text-light-text dark:text-white">ISO 27001</h4>
              <p className="text-xs text-gray-500">Compliant</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Users className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
              <h4 className="font-bold text-light-text dark:text-white">GDPR</h4>
              <p className="text-xs text-gray-500">Compliant</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Building className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3" />
              <h4 className="font-bold text-light-text dark:text-white">On-Prem Option</h4>
              <p className="text-xs text-gray-500">Available</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-text dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know about our pricing.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-light-surface dark:bg-dark-800 border border-light-border dark:border-dark-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors"
                >
                  <span className="font-semibold text-light-text dark:text-white">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-light-text dark:text-white mb-4">Still have questions?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Our team is here to help you find the right plan.</p>
          <Link
            to="/demo"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-orange-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </div>
  );
};
