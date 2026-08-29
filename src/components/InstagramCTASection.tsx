import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramCTASection: React.FC = () => {
  return (
    <section
      id="instagram-cta-section"
      className="relative w-full px-4 sm:px-6 md:px-10 py-10 sm:py-12 border-b border-[#1c3328] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 card-luxury-dark flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle jade and emerald background glow */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,rgba(20,115,78,0.22)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-[radial-gradient(circle,rgba(14,88,60,0.15)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 sm:gap-6 text-center sm:text-left relative z-10">
          <div className="icon-luxury-box w-12 h-12 shrink-0">
            <Instagram className="w-6 h-6 text-[#dfc187]" />
          </div>

          <div>
            <p className="font-heading font-bold uppercase tracking-wider text-sm sm:text-base leading-tight text-[#f1ecd9]">
              Witness the progress on Instagram
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#dfc187]/85 mt-1">
              Daily executive personal branding breakdowns &amp; production case studies
            </p>
          </div>
        </div>

        <motion.a
          id="instagram-profile-link"
          href="https://www.instagram.com/flashcreatorhub/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-luxury-gold px-7 py-3 text-xs sm:text-sm tracking-wider font-sans font-bold flex items-center gap-3 relative z-10"
        >
          <span className="font-serif italic text-base sm:text-lg">
            @flashcreatorhub
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#14120c]" />
        </motion.a>
      </div>
    </section>
  );
};

