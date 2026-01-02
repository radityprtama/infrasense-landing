import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { DemoRequest } from './pages/DemoRequest';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-900 text-light-text dark:text-gray-100 font-sans selection:bg-primary/30 selection:text-white transition-colors duration-300 flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<DemoRequest />} />
          {/* Catch-all route to redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;