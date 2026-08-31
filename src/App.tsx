import React, { Suspense, lazy } from 'react';
import { HeroSection } from './components/HeroSection';
import { ClientMarqueeSection } from './components/ClientMarqueeSection';

// Lazy load below-fold components to reduce initial bundle and critical path
const WorkShowcaseSection = lazy(() => import('./components/WorkShowcaseSection').then(m => ({ default: m.WorkShowcaseSection })));
const InstagramCTASection = lazy(() => import('./components/InstagramCTASection').then(m => ({ default: m.InstagramCTASection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Lightweight fallback component for lazy-loaded sections
const LazyFallback = () => <div style={{ minHeight: '200px' }} />;

export default function App() {
  return (
    <main
      id="flash-creator-hub-app"
      className="relative min-h-screen w-full leather-background text-[#e5e5e5] selection:bg-[#c5a059]/30 selection:text-white flex flex-col font-sans overflow-x-hidden"
    >
      {/* Above-fold sections load immediately */}
      <HeroSection whatsappUrl="https://wa.me/6303055195?text=Hello%20Flash%20Creator%20Hub,%20I%20would%20like%20to%20explore%20a%20partnership%20for%20my%20personal%20brand." />
      <ClientMarqueeSection />

      {/* Below-fold sections load on demand */}
      <Suspense fallback={<LazyFallback />}>
        <WorkShowcaseSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <InstagramCTASection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}

