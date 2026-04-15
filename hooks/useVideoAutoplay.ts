/**
 * useVideoAutoplay Hook
 * Controls video playback based on viewport visibility
 * Automatically plays/pauses video when scrolling
 */

import { useEffect, useRef } from 'react';
import { UseVideoAutoplayOptions } from '@/lib/types';
import { safePlayVideo, safePauseVideo } from '@/lib/utils';

export function useVideoAutoplay(
  options: UseVideoAutoplayOptions = {}
): React.RefObject<HTMLVideoElement | null> {
  const { threshold = 0.5, rootMargin = '0px' } = options;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if browser supports IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Video entered viewport - play it
          safePlayVideo(video);
        } else {
          // Video left viewport - pause it
          safePauseVideo(video);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      // Pause video on cleanup
      safePauseVideo(video);
    };
  }, [threshold, rootMargin]);

  return videoRef;
}
