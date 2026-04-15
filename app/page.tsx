/**
 * American Dream Interactive Sales Experience
 * Main Landing Page
 *
 * This is a demonstration implementation showcasing:
 * - Full design system with Controlled Maximalism aesthetic
 * - Scroll-triggered animations and interactions
 * - Comprehensive data from constants
 * - Accessible, production-ready components
 *
 * Note: Additional sections (Retail, Luxury, Dining, Attractions, Events, Stats)
 * follow the same pattern as Hero and Property sections and can be implemented
 * using the established component architecture.
 */

'use client';

import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PropertySection } from '@/components/sections/PropertySection';
import RetailSection from '@/components/sections/RetailSection';
import LuxurySection from '@/components/sections/LuxurySection';
import DiningSection from '@/components/sections/DiningSection';
import AttractionsSection from '@/components/sections/AttractionsSection';
import EventsSection from '@/components/sections/EventsSection';
import StatsSection from '@/components/sections/StatsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Persistent Navigation */}
      <NavBar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero - Full viewport entry experience */}
        <HeroSection
          id="hero"
          onCTAClick={(type) => {
            console.log(`CTA clicked: ${type}`);
          }}
        />

        {/* Property Overview - Stats and location advantages */}
        <PropertySection id="property" />

        {/* Retail - 450+ brands, categories, anchor tenants */}
        <RetailSection />

        {/* Luxury - Premium wing, 45+ luxury brands */}
        <LuxurySection />

        {/* Dining - 91 F&B concepts, rooftop terrace */}
        <DiningSection />

        {/* Attractions - Nickelodeon Universe, DreamWorks, AMC, etc. */}
        <AttractionsSection />

        {/* Events - Event spaces, capabilities, past events */}
        <EventsSection />

        {/* Stats - Visitor demographics, traffic patterns, charts */}
        <StatsSection />

        {/* Contact - Lead generation and inquiry forms */}
        <ContactSection id="contact" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
