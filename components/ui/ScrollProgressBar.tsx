/**
 * ScrollProgressBar Component
 * Thin gold line at top of viewport showing read progress
 * Uses CSS transform for performance
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/utils';

export function ScrollProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Spring animation for smooth progress
  const reducedMotion = typeof window !== 'undefined' ? prefersReducedMotion() : false;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Only show progress bar after user has scrolled a bit
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.01);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[var(--z-fixed)] h-1 bg-transparent pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] shadow-[0_0_10px_rgba(201,168,76,0.5)]"
        style={{
          scaleX,
          transformOrigin: '0%',
          willChange: 'transform',
        }}
      />
    </motion.div>
  );
}
