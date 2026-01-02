import React from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { Comparison } from '../components/Comparison';
import { HowItWorks } from '../components/HowItWorks';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { ContactForm } from '../components/ContactForm';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </>
  );
};