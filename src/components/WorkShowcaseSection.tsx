import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SHOWCASE_VIDEOS } from '../data/showcaseData';
import { Play, TrendingUp, Sparkles } from 'lucide-react';

export const WorkShowcaseSection: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  const extendedVideos = [...SHOWCASE_VIDEOS, ...SHOWCASE_VIDEOS];

  return (
    <section
      id="work-showcase-section"
      className="relative w-full py-16 sm:py-24 border-b border-[#1c3328] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(18,105,72,0.18)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,88,60,0.16)_0%,transparent_70%)] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="badge-luxury-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc187]" />
            <span>Selected Production Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-[#f1ecd9] tracking-tight">
            Authority on Screen
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#dfc187]/85 font-serif italic mt-2 max-w-xl">
            Precision editorial cutdowns and high-retention frameworks crafted for market leaders.
          </p>
        </div>
      </div>

      <div
        className="relative w-full z-10"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
        onTouchStart={() => setIsMarqueePaused(true)}
        onTouchEnd={() => setIsMarqueePaused(false)}
      >
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#06110d] to-transparent z-20 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#06110d] to-transparent z-20 pointer-events-none" />

        <div className="overflow-hidden px-4 sm:px-10 py-3">
          <div
            id="work-showcase-carousel-track"
            className="marquee-track flex gap-4 sm:gap-6 select-none"
            style={{
              animationPlayState: isMarqueePaused || Boolean(playingVideoId) ? 'paused' : 'running',
            }}
          >
            {extendedVideos.map((item, idx) => {
              const uniqueKey = `${item.id}-${idx}`;
              const isHovered = hoveredVideoId === uniqueKey;
              const isPlaying = playingVideoId === uniqueKey;

              return (
                <motion.div
                  key={uniqueKey}
                  id={`work-item-${uniqueKey}`}
                  onMouseEnter={() => setHoveredVideoId(uniqueKey)}
                  onMouseLeave={() => setHoveredVideoId(null)}
                  className="group relative flex-none w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16] bg-[#121212] border border-[#2b2720] hover:border-[#cda665] rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_16px_40px_-8px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(205,166,101,0.2)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#101010] overflow-hidden rounded-[22px]">
                    {!isPlaying && (
                      <picture>
                        <source 
                          srcSet={item.posterUrl.replace(/\.png$/, '.webp')}
                          type="image/webp"
                        />
                        <source 
                          srcSet={item.posterUrl}
                          type="image/png"
                        />
                        <img
                          src={item.posterUrl}
                          alt={item.title}
                          width="240"
                          height="426"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            isHovered ? 'scale-105 filter grayscale-0' : 'scale-100 filter grayscale-[20%]'
                          }`}
                        />
                      </picture>
                    )}

                    {isPlaying && (
                      <video
                        src={item.videoUrl}
                        controls
                        playsInline
                        preload="none"
                        autoPlay
                        className="absolute inset-0 w-full h-full object-contain bg-black z-50"
                      />
                    )}

                    {!isPlaying && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-black/30 pointer-events-none" />
                    )}
                  </div>

                  {!isPlaying && (
                    <>
                      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 bg-[#161616]/90 border border-[#cda665]/30 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#dfc187] font-bold shadow-sm backdrop-blur-sm">
                          {item.category}
                        </span>

                        <span className="px-2.5 py-1 bg-[#141414]/85 border border-[#38332a] rounded-full text-[10px] font-mono text-[#dfc187] shadow-sm backdrop-blur-sm">
                          {item.duration}
                        </span>
                      </div>

                      <div className="relative z-10 my-auto self-center">
                        <button
                          onClick={() => setPlayingVideoId(uniqueKey)}
                          className="w-13 h-13 sm:w-15 sm:h-15 w-12 h-12 sm:w-14 sm:h-14 rounded-full btn-luxury-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_4px_20px_rgba(205,166,101,0.45)] cursor-pointer"
                          aria-label="Play video"
                        >
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-[#14120c] text-[#14120c]" />
                        </button>
                      </div>

                      <div className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/95 to-transparent pt-8 pointer-events-none">
                        <div className="badge-luxury-pill mb-2 bg-[#181715]/95 border-[#cda665]/40 text-[#dfc187]">
                          <TrendingUp className="w-3 h-3 text-[#dfc187]" />
                          <span>{item.metric}</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold font-heading uppercase text-[#f1ecd9] leading-snug group-hover:text-[#dfc187] transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-[11px] sm:text-xs text-[#dfc187]/80 mt-1 font-serif italic">
                          {item.clientName} &middot; <span className="text-[#cbd8d0]">{item.clientRole}</span>
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
