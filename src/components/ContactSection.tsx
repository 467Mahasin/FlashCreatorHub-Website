import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Calendar, ArrowUpRight, Check, Copy, ExternalLink, X } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [showCalModal, setShowCalModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('contact@flashedits.agency');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact-section"
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 border-t border-[#1c3328] overflow-hidden"
    >
      {/* Subtle Ambient Emerald Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,115,78,0.18)_0%,transparent_70%)] blur-3xl"
      />

      {/* 3-Column Luxury Rounded Cards Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
        
        {/* Door 1: WhatsApp */}
        <a
          id="contact-whatsapp-card"
          href="https://wa.me/916303055195?text=Hello%20Flash%20Creator%20Hub,%20I%20would%20like%20to%20chat%20about%20building%20my%20personal%20brand."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative card-luxury-dark p-7 sm:p-8 flex items-center justify-between cursor-pointer overflow-hidden"
        >
          <div className="flex items-center space-x-5 relative z-10">
            <div className="icon-luxury-box w-13 h-13 sm:w-14 sm:h-14 shrink-0">
              <MessageCircle className="w-6 h-6 text-[#dfc187]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#dfc187] font-bold">
                Chat with us
              </p>
              <p className="text-base sm:text-lg font-bold font-heading text-[#f1ecd9] group-hover:text-[#dfc187] transition-colors">
                WhatsApp
              </p>
              <p className="text-xs font-mono text-[#dfc187]/75 mt-0.5">
                +91 6303055195
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#181818] border border-[#38332a] group-hover:border-[#cda665] flex items-center justify-center text-[#dfc187] transition-all duration-300 group-hover:scale-105">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>

        {/* Door 2: Book a 15-min Meeting */}
        <div
          id="contact-calendar-card"
          onClick={() => setShowCalModal(true)}
          className="group relative card-luxury-dark p-7 sm:p-8 flex items-center justify-between cursor-pointer overflow-hidden"
        >
          <div className="flex items-center space-x-5 relative z-10">
            <div className="icon-luxury-box w-13 h-13 sm:w-14 sm:h-14 shrink-0">
              <Calendar className="w-6 h-6 text-[#dfc187]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#dfc187] font-bold">
                Strategy Call
              </p>
              <p className="text-base sm:text-lg font-bold font-heading text-[#f1ecd9] group-hover:text-[#dfc187] transition-colors">
                Book a 15 min meeting
              </p>
              <p className="text-xs text-[#dfc187]/75 mt-0.5">
                Video Consultation
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#181818] border border-[#38332a] group-hover:border-[#cda665] flex items-center justify-center text-[#dfc187] transition-all duration-300 group-hover:scale-105">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Door 3: Email */}
        <div
          id="contact-email-card"
          className="group relative card-luxury-dark p-7 sm:p-8 flex items-center justify-between overflow-hidden"
        >
          <div className="flex items-center space-x-5 relative z-10">
            <div className="icon-luxury-box w-13 h-13 sm:w-14 sm:h-14 shrink-0">
              <Mail className="w-6 h-6 text-[#dfc187]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#dfc187] font-bold">
                  Email us
                </p>
                <button
                  onClick={copyEmailToClipboard}
                  className="text-[#dfc187]/80 hover:text-[#f1ecd9] transition-colors p-0.5"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a 
                href="mailto:contact@flashedits.agency?subject=Flash%20Creator%20Hub%20Partnership%20Inquiry"
                className="text-sm sm:text-base font-bold font-heading text-[#f1ecd9] group-hover:text-[#dfc187] transition-colors hover:underline block truncate max-w-[200px]"
              >
                contact@flashedits.agency
              </a>
              <p className="text-xs text-[#dfc187]/75 mt-0.5">
                Executive Desk &amp; RFPs
              </p>
            </div>
          </div>
          <a
            href="mailto:contact@flashedits.agency?subject=Flash%20Creator%20Hub%20Partnership%20Inquiry"
            className="w-9 h-9 rounded-full bg-[#181818] border border-[#38332a] group-hover:border-[#cda665] flex items-center justify-center text-[#dfc187] transition-all duration-300 group-hover:scale-105"
            aria-label="Send email"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Cal.com Interactive Booking Lightbox Modal */}
      {showCalModal && (
        <div
          id="cal-booking-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setShowCalModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-[#141414] border border-[#cda665]/40 rounded-3xl p-8 sm:p-10 shadow-2xl text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCalModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1e1e1e] border border-[#38332a] text-[#dfc187] hover:text-[#f1ecd9] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="icon-luxury-box w-12 h-12 shrink-0">
                <Calendar className="w-6 h-6 text-[#dfc187]" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-heading text-[#f1ecd9]">Book a 15-Minute Strategy Call</h4>
                <p className="text-xs text-[#dfc187]">Flash Creator Hub Executive Calendar</p>
              </div>
            </div>

            <p className="text-sm text-[#f1ecd9]/85 mb-6 leading-relaxed">
              We review your current brand footprint, content distribution bottlenecks, and identify specific authority leverage points.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-[#0d0d0d] border border-[#2b2720] rounded-2xl text-xs text-[#dfc187]/85 space-y-2">
                <div className="flex items-center justify-between text-[#dfc187] font-semibold">
                  <span>Direct Booking:</span>
                  <span className="font-mono">[CALCOM_LINK_PLACEHOLDER]</span>
                </div>
                <p className="text-[#f1ecd9]/70">When ready to publish, update with your dedicated Cal.com link.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href="https://wa.me/916303055195?text=Hi%20Flash%20Creator%20Hub,%20I'd%20like%20to%20schedule%20a%2015-minute%20intro%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold flex-1 py-3 px-5 text-xs uppercase tracking-widest font-heading flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={() => setShowCalModal(false)}
                className="btn-luxury-outline py-3 px-5 text-xs font-semibold tracking-wider"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
