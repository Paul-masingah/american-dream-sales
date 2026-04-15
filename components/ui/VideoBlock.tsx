/**
 * VideoBlock Component
 * Responsive video container with autoplay controls
 * Uses Intersection Observer for viewport-based autoplay
 */

'use client';

import { VideoBlockProps } from '@/lib/types';
import { useVideoAutoplay } from '@/hooks/useVideoAutoplay';
import { cn } from '@/lib/utils';

export function VideoBlock({
  src,
  poster,
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
  className = '',
  onPlay,
  onPause,
}: VideoBlockProps) {
  const videoRef = useVideoAutoplay({ threshold: 0.5 });

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={onPlay}
        onPause={onPause}
        aria-label="Background video"
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
