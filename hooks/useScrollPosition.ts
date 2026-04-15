/**
 * useScrollPosition Hook
 * Tracks scroll position and direction for navbar behavior
 * Throttled for performance
 */

import { useEffect, useState } from 'react';
import { throttle } from '@/lib/utils';
import { UseScrollPositionResult } from '@/lib/types';

export function useScrollPosition(): UseScrollPositionResult {
  const [scrollPosition, setScrollPosition] = useState<UseScrollPositionResult>({
    scrollY: 0,
    scrollDirection: null,
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollDirection =
        currentScrollY > lastScrollY
          ? 'down'
          : currentScrollY < lastScrollY
          ? 'up'
          : scrollPosition.scrollDirection;

      const isAtTop = currentScrollY < 10;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10;

      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection,
        isAtTop,
        isAtBottom,
      });

      lastScrollY = currentScrollY;
    }, 100); // Throttle to max once per 100ms

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition.scrollDirection]);

  return scrollPosition;
}
