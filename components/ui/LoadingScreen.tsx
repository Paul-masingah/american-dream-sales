/**
 * LoadingScreen Component
 * Branded full-screen intro animation with American Dream logo
 * Plays once per session using sessionStorage
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/utils';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loading screen this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen');

    if (hasSeenLoading) {
      setIsVisible(false);
      setShouldShow(false);
      return;
    }

    setShouldShow(true);

    // Mark as seen in sessionStorage
    sessionStorage.setItem('hasSeenLoadingScreen', 'true');

    // Hide loading screen after animation completes
    const reducedMotion = prefersReducedMotion();
    const duration = reducedMotion ? 500 : 2500;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldShow) return null;

  const reducedMotion = prefersReducedMotion();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.3 : 0.8 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          style={{ pointerEvents: 'none' }}
        >
          <div className="relative">
            {/* Logo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reducedMotion ? 0.3 : 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              {/* American Dream Logo Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: reducedMotion ? 0 : 0.3,
                  duration: reducedMotion ? 0.3 : 0.8,
                }}
              >
                <h1 className="font-display text-6xl md:text-8xl text-[var(--color-gold)] tracking-wide mb-4">
                  American Dream
                </h1>
              </motion.div>

              {/* Animated Line Draw */}
              <svg
                width="400"
                height="2"
                viewBox="0 0 400 2"
                className="mx-auto"
                aria-hidden="true"
              >
                <motion.line
                  x1="0"
                  y1="1"
                  x2="400"
                  y2="1"
                  stroke="var(--color-gold)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: reducedMotion ? 0.3 : 1.5,
                    delay: reducedMotion ? 0 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </svg>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reducedMotion ? 0 : 1.2,
                  duration: reducedMotion ? 0.3 : 0.6,
                }}
                className="font-label text-white/60 text-sm mt-4 tracking-widest"
              >
                40 MILLION REASONS TO BE HERE
              </motion.p>
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: reducedMotion ? 0 : 0.3 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="absolute inset-0 bg-[var(--color-gold)] blur-[100px] -z-10"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
