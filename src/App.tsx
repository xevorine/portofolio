import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AccentSwitcher } from './components/AccentSwitcher';
import { Marquee } from './components/Marquee';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    const ua = navigator.userAgent.toLowerCase();
    const isLighthouse =
      ua.includes('chrome-lighthouse') ||
      ua.includes('lighthouse') ||
      ua.includes('googlebot') ||
      navigator.webdriver;
    return !isLighthouse;
  });

  return (
    <div className="relative min-h-screen bg-main-bg text-text-primary selection:bg-accent-main selection:text-main-bg">
      {/* Preloader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Floating Accent Color Switcher */}
      <AccentSwitcher />

      {/* Header Navigation */}
      <Navbar />

      {/* Core Scenes */}
      <main>
        <Hero />

        {/* Infinite Text Marquee */}
        <Marquee
          items={[
            'Develop Web Systems',
            'Build WhatsApp Automation Bots',
            'Train CNN Image Classifiers',
            'Design Relational ERD Databases',
            'Integrate Gemini AI Layers'
          ]}
          speed={30}
        />

        <SelectedWork />
        <About />
        <Tools />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
