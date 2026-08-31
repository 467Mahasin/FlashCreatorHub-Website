import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface PrimaryCTASectionProps {
  whatsappUrl?: string;
}

export const PrimaryCTASection: React.FC<PrimaryCTASectionProps> = ({
  whatsappUrl = 'https://wa.me/6303055195?text=Hello%20Flash%20Creator%20Hub,%20I%20would%20like%20to%20explore%20a%20partnership%20for%20my%20personal%20brand.',
}) => {
  return (
    <section
      id="partnership-cta-section"
      className="relative w-full py-16 sm:py-24 bg-[#050F09] border-t border-b border-[#D4AF37]/10 overflow-hidden flex flex-col items-center justify-center text-center px-6"
    >
      {/* Background Subtle Luxury Ambience */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0F2D1E 0%, #06140D 70%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none luxury-noise" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Section Context Statement */}
        <motion.p
          id="partnership-statement"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#A69363] font-medium mb-5"
        >
          Selective Agency Retainers & Strategic Advisory
        </motion.p>

        {/* Section Headline */}
        <motion.h2
          id="partnership-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-display font-semibold tracking-tight mb-8"
        >
          Ready to scale your personal equity and market authority?
        </motion.h2>

        {/* Primary Action Button: "Explore a Partnership" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          {/* Pulsing Gold Glow Aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37]/40 via-[#F3E5AB]/60 to-[#B38F4D]/40 opacity-40 blur-lg group-hover:opacity-90 group-hover:blur-xl transition-all duration-500" />

          <a
            id="primary-explore-partnership-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3.5 px-9 py-4.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C358] to-[#C5A059] text-[#07150E] font-display font-bold text-base sm:text-lg tracking-wide shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)] group-active:translate-y-0 select-none"
          >
            <MessageCircle className="w-5 h-5 text-[#07150E] fill-[#07150E]/20" />
            <span>Work With Us</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Quiet Reassurance Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xs text-[#7A8A80] mt-5 tracking-wide font-sans"
        >
          Direct confidential WhatsApp dialogue with our executive advisory team.
        </motion.p>
      </div>
    </section>
  );
};
