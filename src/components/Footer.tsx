import React from 'react';
import { GoldEmblem } from './GoldEmblem';
import { Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="relative w-full py-10 bg-[#06110d] border-t border-[#1c3328] text-[#dfc187]/80 text-xs font-sans overflow-hidden"
    >
      {/* Subtle top emerald hairline light */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#147a54]/40 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand Left */}
        <div className="flex items-center gap-3">
          <GoldEmblem size="sm" interactive={false} />
          <div>
            <span className="font-heading font-bold text-sm tracking-wider text-[#f1ecd9] uppercase block">
              FLASH CREATOR HUB
            </span>
            <span className="font-serif italic text-xs text-[#dfc187]">
              Elevating Authority for Visionary Founders
            </span>
          </div>
        </div>

        {/* Brand Values */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#dfc187] font-bold">
          <span className="badge-luxury-pill">
            <Shield className="w-3.5 h-3.5 text-[#dfc187]" />
            <span>Quality Guaranteed</span>
          </span>
          <span className="badge-luxury-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc187]" />
            <span>Result First Approach</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] font-mono text-[#dfc187]/60">
          &copy; {new Date().getFullYear()} Flash Creator Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

