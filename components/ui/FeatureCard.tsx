/**
 * FeatureCard Component
 * Card component for displaying features, amenities, or highlights
 * Animated entrance on scroll
 */

'use client';

import { motion } from 'framer-motion';
import { FeatureCardProps } from '@/lib/types';
import { cn, fadeInUp } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function FeatureCard({ title, description, icon, stats, className = '' }: FeatureCardProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={cn(
        'bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] p-6 rounded-lg hover:border-[var(--color-gold)] transition-colors duration-300',
        className
      )}
    >
      {icon && <div className="mb-4 text-[var(--color-gold)]">{icon}</div>}

      <h3 className="font-headline text-xl text-white mb-3 tracking-wide uppercase">{title}</h3>

      <p className="text-[var(--color-gray-300)] text-sm leading-relaxed mb-4">{description}</p>

      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-gray-800)]">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-label text-xs text-[var(--color-gray-500)] mb-1">{stat.label}</div>
              <div className="font-headline text-lg text-[var(--color-gold)]">{stat.value}</div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
