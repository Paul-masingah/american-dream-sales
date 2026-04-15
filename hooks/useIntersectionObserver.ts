/**
 * useIntersectionObserver Hook
 * Detects when an element enters/exits the viewport
 * Used for scroll-triggered animations and lazy loading
 */

import { useEffect, useRef, useState } from 'react';
import { UseIntersectionObserverOptions } from '@/lib/types';

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    root = null,
    freezeOnceVisible = false,
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const frozenRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if browser supports IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true); // Fallback: assume visible
      return;
    }

    // Don't observe if already frozen as visible
    if (frozenRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        const isIntersecting = entry.isIntersecting;

        setIsVisible(isIntersecting);

        // Freeze state if element becomes visible and freezeOnceVisible is true
        if (isIntersecting && freezeOnceVisible) {
          frozenRef.current = true;
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, freezeOnceVisible]);

  return [elementRef, isVisible, entry];
}
