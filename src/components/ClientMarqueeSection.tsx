import React, { useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { CLIENT_PICTURE_LOGOS } from './ClientLogos';

export const ClientMarqueeSection: React.FC = () => {
  const marqueeItems = useMemo(
    () => [...CLIENT_PICTURE_LOGOS, ...CLIENT_PICTURE_LOGOS],
    []
  );

  return (
    <section
      id="clients-worked-with-section"
      aria-label="Clients Worked With"
      className="relative w-full py-9 sm:py-12 border-y border-[#1c3328] bg-[#081510]/85 backdrop-blur-md overflow-hidden"
    >
      {/* Subtle ambient jade and emerald glow in background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(18,105,72,0.14),transparent_75%)] pointer-events-none" 
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="badge-luxury-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc187]" />
            <span>Proven Track Record</span>
          </div>
        </div>
      </div>

      {/* Edge Gradient Fades for Infinite Scroll Window */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#06110d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#06110d] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Marquee Track (Smooth Constant Speed, Pause on Hover) */}
      <div className="w-full overflow-hidden flex select-none py-1 relative z-10">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="group relative flex items-center justify-center px-6 py-4 bg-[#0d1a15] hover:bg-[#12221b] border border-[#1b3327] hover:border-[#cda665]/80 transition-all duration-300 cursor-pointer min-w-[210px] sm:min-w-[240px] h-[82px] sm:h-[90px] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_6px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_24px_rgba(20,115,78,0.25)]"
            >
              {/* Picture Image Logo directly from 9 uploaded PNG files used as-is */}
              <div className="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-105">
                <img
                  src={client.imageSrc}
                  alt={client.alt}
                  width="160"
                  height="56"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="max-h-[50px] sm:max-h-[56px] max-w-[160px] sm:max-w-[185px] w-auto h-auto object-contain transition-all duration-300 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
