import React, { useState } from 'react';
import { motion } from 'motion/react';

interface GoldEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  interactive?: boolean;
}

export const GoldEmblem: React.FC<GoldEmblemProps> = ({
  size = 'hero',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  // Dimensions based on size with a prominent, luxury scale for the hero
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    hero: 'w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64',
  }[size];

  return (
    <motion.div
      id="flash-creator-hub-emblem"
      className={`relative flex items-center justify-center select-none ${sizeClasses} ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Clean Emblem without any glow, shadow, or blur effects */}
      {!imageError ? (
        <img
          src="/gold logo.png"
          alt="Flash Creator Hub Emblem"
          width="200"
          height="200"
          className="relative z-10 w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Clean Vector Golden Lightning Bolt with no shadow/filter effects */
        <svg
          viewBox="0 0 200 200"
          className="relative z-10 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Gold Body Gradient */}
            <linearGradient id="goldSurface" x1="40" y1="20" x2="160" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f1ecd9" />
              <stop offset="20%" stopColor="#d9be84" />
              <stop offset="55%" stopColor="#c9a227" />
              <stop offset="85%" stopColor="#8c6f33" />
              <stop offset="100%" stopColor="#573e0c" />
            </linearGradient>
          </defs>

          {/* Clean Solid Gold Lightning Body with rich metallic gradient */}
          <path
            d="M86 28 L136 28 C140 28 143 31 142 35 L124 74 L146 74 C150 74 152 79 149 82 L76 174 C73 178 68 174 70 170 L88 108 L66 108 C62 108 60 103 63 99 L82 32 C83 29 85 28 86 28 Z"
            fill="url(#goldSurface)"
          />
        </svg>
      )}
    </motion.div>
  );
};
