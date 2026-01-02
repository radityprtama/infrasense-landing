import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Product', href: '#solution' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const getHref = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-light-bg/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-light-border dark:border-dark-700 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-light-text dark:text-white">
            Infra<span className="text-primary">Sense</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getHref(link.href)}
              className="text-sm font-medium text-light-textSecondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-800 text-light-textSecondary dark:text-gray-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <a href="#" className="text-sm font-medium text-light-textSecondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
            Log In
          </a>
          <Link
            to="/demo"
            className="bg-primary hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-800 text-light-textSecondary dark:text-gray-300 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-light-text dark:text-gray-300 hover:text-primary dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light-bg dark:bg-dark-900 border-b border-light-border dark:border-dark-700 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getHref(link.href)}
              className="text-base font-medium text-light-text dark:text-gray-300 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-light-border dark:bg-dark-700 my-2" />
          <a href="#" className="text-base font-medium text-light-text dark:text-gray-300 hover:text-primary">
            Log In
          </a>
          <Link
            to="/demo"
            className="bg-primary hover:bg-primary-600 text-white px-5 py-3 rounded-lg text-center font-semibold shadow-orange-glow"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  );
};