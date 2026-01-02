import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}