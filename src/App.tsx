import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ClientMarqueeSection } from './components/ClientMarqueeSection';
import { WorkShowcaseSection } from './components/WorkShowcaseSection';
import { InstagramCTASection } from './components/InstagramCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main
      id="flash-creator-hub-app"
      className="relative min-h-screen w-full leather-background text-[#e5e5e5] selection:bg-[#c5a059]/30 selection:text-white flex flex-col font-sans overflow-x-hidden"
    >
      {/* 1. Hero Section with 3D Emblem & Direct Explore Partnership CTA */}
      <HeroSection whatsappUrl="https://wa.me/6303055195?text=Hello%20Flash%20Creator%20Hub,%20I%20would%20like%20to%20explore%20a%20partnership%20for%20my%20personal%20brand." />

      {/* 2. Clients Worked With Continuous Auto-Scrolling Marquee */}
      <ClientMarqueeSection />

      {/* 3. Automatic Flow Work Showcase */}
      <WorkShowcaseSection />

      {/* 4. Instagram CTA Banner */}
      <InstagramCTASection />

      {/* 5. Direct Contact Doors (WhatsApp, Email, Strategy Call) */}
      <ContactSection />

      {/* 6. Editorial Footer */}
      <Footer />
    </main>
  );
}
