// Optimize Framer Motion for production performance
// This configuration improves animation performance and respects user preferences

export const motionConfig = {
  // Disable animations if user prefers reduced motion
  reducedMotion: "user" as const,

  // Optimize animation performance
  layout: true,

  // Use GPU acceleration with transform3d
  transformTemplate: ({ x, y }: { x?: string; y?: string }) => {
    return `translate3d(${x || 0}, ${y || 0}, 0)`;
  },
};

// Optimized animation variants to reuse across components
// These use will-change to hint browsers about upcoming animations

export const optimizedFadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    willChange: 'transform, opacity'
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const optimizedFadeIn = {
  hidden: {
    opacity: 0,
    willChange: 'opacity'
  },
  visible: {
    opacity: 1,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const optimizedSlideInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    willChange: 'transform, opacity'
  },
  visible: {
    opacity: 1,
    x: 0,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const optimizedSlideInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    willChange: 'transform, opacity'
  },
  visible: {
    opacity: 1,
    x: 0,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const optimizedScaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    willChange: 'transform, opacity'
  },
  visible: {
    opacity: 1,
    scale: 1,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger configuration for animating lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Viewport settings for intersection observer
export const defaultViewport = {
  once: true,
  margin: "-100px",
  amount: 0.3,
};
