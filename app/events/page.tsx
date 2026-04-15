/**
 * Events Page - American Dream
 * Complete events deep-dive with venue showcase, booking inquiry, and past events
 * Phase 5: Events Sub-Module Implementation
 */

import type { Metadata } from 'next';
import { EventsPageClient } from './EventsPageClient';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// METADATA EXPORT (Server Component)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const metadata: Metadata = {
  title: 'Event Venues & Meeting Spaces - American Dream',
  description:
    'Host your next corporate event, wedding, or brand activation at American Dream. 5,000-person capacity venues with world-class A/V and full-service event planning.',
  keywords: [
    'event venue',
    'corporate events',
    'wedding venue',
    'brand activation',
    'conference center',
    'event space New Jersey',
    'American Dream events',
    'product launch venue',
    'meeting space',
    'event planning',
  ],
  openGraph: {
    title: 'Event Venues & Meeting Spaces - American Dream',
    description:
      'Host your next corporate event, wedding, or brand activation at American Dream. 5,000-person capacity venues with world-class A/V and full-service event planning.',
    url: 'https://americandream.com/events',
    siteName: 'American Dream',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Venues & Meeting Spaces - American Dream',
    description:
      'From intimate galas to 5,000-person activations. World-class event spaces with unmatched NYC metro access.',
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PAGE COMPONENT (Server Component - Delegates to Client)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function EventsPage() {
  return <EventsPageClient />;
}
