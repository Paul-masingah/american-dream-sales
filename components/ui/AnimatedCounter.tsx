/**
 * AnimatedCounter Component
 * Animates number from 0 to target value when scrolled into view
 * Uses Intersection Observer for trigger
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatedCounterProps } from '@/lib/types';
import { formatNumber } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ANIMATION_CONFIG } from '@/lib/constants';

export function AnimatedCounter({
  value,
  duration = ANIMATION_CONFIG.counterAnimationDuration,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = true,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);

      // Easing function: easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(value * easedProgress);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, value, duration]);

  const formattedValue = separator ? formatNumber(Math.floor(count)) : Math.floor(count).toString();
  const displayValue = decimals > 0 ? count.toFixed(decimals) : formattedValue;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
