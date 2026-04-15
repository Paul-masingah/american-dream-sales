/**
 * HeroSection Component
 * Full-viewport hero with autoplay video background
 * Primary entry point for the experience
 */

'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HeroSectionProps } from '@/lib/types';
import { HERO_CONTENT } from '@/lib/constants';
import { CTAButton } from '../ui/CTAButton';
import { VideoBlock } from '../ui/VideoBlock';
import { fadeInUp, scrollToSection } from '@/lib/utils';

export function HeroSection({ id, onCTAClick }: HeroSectionProps) {
  return (
    <section id={id} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <VideoBlock
          src={HERO_CONTENT.videoUrl}
          poster={HERO_CONTENT.posterUrl}
          autoplay
          loop
          muted
          className="h-full w-full"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="font-label text-sm text-[var(--color-gold)] mb-6 tracking-widest"
            >
              NEW JERSEY'S PREMIER DESTINATION
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-display-1 text-white mb-6 glow-gold"
            >
              {HERO_CONTENT.tagline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CTAButton
                variant="primary"
                size="lg"
                onClick={() => {
                  onCTAClick?.('primary');
                  scrollToSection('property');
                }}
              >
                {HERO_CONTENT.ctaPrimary}
              </CTAButton>
              <CTAButton
                variant="outline"
                size="lg"
                onClick={() => {
                  onCTAClick?.('secondary');
                  scrollToSection('contact');
                }}
              >
                {HERO_CONTENT.ctaSecondary}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('property')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
