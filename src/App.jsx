import { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import CareerSummary from './components/CareerSummary';
import WorkSection from './components/WorkSection';
import Experience from './components/Experience';
import Education from './components/Education';
import Toolbox from './components/Toolbox';
import Footer from './components/Footer';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling with optimized settings
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis to ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update);

    // Use requestAnimationFrame for Lenis updates (not GSAP ticker)
    function raf(time) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    // Disable GSAP lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    // Handle dark mode class on html element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Refresh ScrollTrigger on theme change (debounced)
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
    // Refresh ScrollTrigger after loader completes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div className="bg-cream text-charcoal dark:bg-charcoal dark:text-cream transition-colors duration-500 overflow-x-hidden antialiased min-h-screen">
      <Loader onComplete={handleLoaderComplete} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isLoaded={isLoaded} />

      <CareerSummary isDark={isDark} />
      <WorkSection />
      <Experience />
      <Education />
      <Toolbox />
      <Footer />
    </div>
  );
}

export default App;
