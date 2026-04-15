import dynamic from 'next/dynamic';

// Lazy load sections that are below the fold
// These sections won't block initial page load, improving First Contentful Paint

export const StatsSection = dynamic(
  () => import('@/components/sections/StatsSection').then(mod => ({ default: mod.default })),
  {
    loading: () => <div className="min-h-screen bg-black" />,
    ssr: true,
  }
);

export const EventsSection = dynamic(
  () => import('@/components/sections/EventsSection').then(mod => ({ default: mod.default })),
  {
    loading: () => <div className="min-h-screen bg-black" />,
    ssr: true,
  }
);

export const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })),
  {
    loading: () => <div className="min-h-screen bg-black" />,
    ssr: true,
  }
);

export const AttractionsSection = dynamic(
  () => import('@/components/sections/AttractionsSection').then(mod => ({ default: mod.default })),
  {
    loading: () => <div className="min-h-screen bg-black" />,
    ssr: true,
  }
);

export const DiningSection = dynamic(
  () => import('@/components/sections/DiningSection').then(mod => ({ default: mod.default })),
  {
    loading: () => <div className="min-h-screen bg-black" />,
    ssr: true,
  }
);

// Lazy load ContactModal (only needed when user clicks CTA)
// This is completely client-side only as it's interactive
export const ContactModal = dynamic(
  () => import('@/components/layout/ContactModal').then(mod => ({ default: mod.ContactModal })),
  {
    ssr: false,
  }
);
