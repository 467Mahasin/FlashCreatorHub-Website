import React from 'react';
import { GoldEmblem } from './GoldEmblem';

interface HeroSectionProps {
  whatsappUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  whatsappUrl = 'https://wa.me/916303055195?text=Hello%20Flash%20Creator%20Hub,%20I%20would%20like%20to%20explore%20a%20partnership%20for%20my%20personal%20brand.',
}) => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 text-center hero-emerald-texture"
    >
      {/* Top-Right Emerald Spotlight Glow from Uploaded Image */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-16 -right-16 w-[450px] sm:w-[650px] md:w-[850px] h-[450px] sm:h-[650px] md:h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(24,168,112,0.32)_0%,rgba(14,120,78,0.18)_40%,transparent_70%)] blur-3xl"
      />
      
      {/* Bottom Vignette & Seamless Transition to next section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent z-0"
      />

      {/* Editorial Container with Max Width */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full my-auto">
        
        {/* Centered Clean Gold Logo */}
        <div
          id="hero-gold-logo-container"
          className="hero-logo-container mb-4 sm:mb-6"
        >
          <GoldEmblem size="hero" />
        </div>

        {/* Brand Name */}
        <h1
          id="hero-agency-name"
          className="hero-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f1ecd9] font-heading uppercase leading-[1.1] mb-2 sm:mb-3 px-2"
        >
          <span className="block tracking-wider">
            Flash Creator Hub
          </span>
        </h1>

        {/* Supporting Subheading */}
        <p
          id="hero-subheading"
          className="hero-subheading text-xs sm:text-sm md:text-base lg:text-lg text-[#d9be84]/90 font-serif italic max-w-2xl mx-auto leading-relaxed tracking-wide mb-6 sm:mb-8 px-4"
        >
          Architecting authority and profitable personal brands for growth-focused founders, business leaders, and creators.
        </p>

        {/* CTA Button in Luxury UI Round Button Style */}
        <div
          id="hero-cta-wrapper"
          className="hero-cta-wrapper flex items-center justify-center w-full"
        >
          <a
            id="hero-explore-partnership-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-gold px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.14em] font-sans font-bold shadow-lg"
          >
            Work With Us
          </a>
        </div>

      </div>
    </section>
  );
};
