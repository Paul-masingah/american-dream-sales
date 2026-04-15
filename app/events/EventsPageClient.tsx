/**
 * Events Page Client Component
 * Interactive client-side components for the events page
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  CalendarCheck,
  Users,
  Utensils,
  Shield,
  Truck,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTAButton } from '@/components/ui/CTAButton';
import { StatCard } from '@/components/ui/StatCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
  EVENT_SPACES,
  EVENT_SERVICES,
  EVENTS_CONTENT,
  PAST_EVENTS,
  CONTACT_CONTEXTS,
} from '@/lib/constants';
import { cn, fadeInUp, staggerContainer, formatNumber, formatSquareFeet } from '@/lib/utils';
import type { EventSpace, PastEvent } from '@/lib/types';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FORM VALIDATION SCHEMA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const eventInquirySchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company/Organization required'),
  eventType: z.string().min(1, 'Please select an event type'),
  expectedAttendance: z.string().min(1, 'Please select expected attendance'),
  preferredDate: z.string().optional(),
  message: z.string().min(10, 'Please provide event details (minimum 10 characters)'),
});

type EventInquiryForm = z.infer<typeof eventInquirySchema>;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SERVICE ICON MAPPING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SERVICE_ICONS = [CalendarCheck, Users, Utensils, Shield, Truck, Headphones];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EVENT TYPE BADGE COLORS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const getEventTypeBadgeColor = (type: string): string => {
  const typeMap: Record<string, string> = {
    'Fashion Show': 'bg-[var(--color-rose)]/20 text-[var(--color-rose)] border-[var(--color-rose)]/30',
    'Brand Activation':
      'bg-[var(--color-blue)]/20 text-[var(--color-blue)] border-[var(--color-blue)]/30',
    Festival: 'bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30',
  };
  return (
    typeMap[type] || 'bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30'
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE CLIENT COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function EventsPageClient() {
  const [formSubmitStatus, setFormSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EventInquiryForm>({
    resolver: zodResolver(eventInquirySchema),
  });

  const onSubmit = async (data: EventInquiryForm) => {
    try {
      // Log to console (no backend in v1)
      console.log('Event Inquiry Form Submission:', {
        ...data,
        context: 'events-inquiry',
        timestamp: new Date().toISOString(),
      });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setFormSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setFormSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = CONTACT_CONTEXTS['events-inquiry'];

  return (
    <>
      <NavBar />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Ribbon */}
        <StatsRibbon />

        {/* Venue Showcase */}
        <VenueShowcase />

        {/* Event Services */}
        <EventServices />

        {/* Past Events Gallery */}
        <PastEventsGallery />

        {/* Booking Inquiry Form */}
        <section className="section bg-[var(--color-gray-900)]" id="booking-inquiry">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <SectionLabel variant="gold" className="mb-4">
                  Request Information
                </SectionLabel>
                <h2 className="text-headline-2 text-white mb-4">Book Your Event</h2>
                <p className="text-[var(--color-gray-300)] text-lg max-w-2xl mx-auto">
                  Fill out the form below and our events team will contact you within 24 hours to
                  discuss your venue needs.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black border border-[var(--color-gray-800)] rounded-lg p-8 space-y-6"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={cn(
                        'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all',
                        errors.name ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={cn(
                        'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all',
                        errors.email ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                      )}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Phone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Company/Organization *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className={cn(
                        'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all',
                        errors.company ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                      )}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                {/* Event Type & Attendance Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Event Type *
                    </label>
                    <select
                      {...register('eventType')}
                      id="eventType"
                      className={cn(
                        'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all',
                        errors.eventType ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                      )}
                    >
                      <option value="">Select event type</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Brand Activation">Brand Activation</option>
                      <option value="Product Launch">Product Launch</option>
                      <option value="Conference">Conference</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.eventType && (
                      <p className="text-red-500 text-xs mt-1">{errors.eventType.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="expectedAttendance"
                      className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                    >
                      Expected Attendance *
                    </label>
                    <select
                      {...register('expectedAttendance')}
                      id="expectedAttendance"
                      className={cn(
                        'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all',
                        errors.expectedAttendance ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                      )}
                    >
                      <option value="">Select attendance</option>
                      <option value="<100">&lt;100</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1,000</option>
                      <option value="1000-2500">1,000-2,500</option>
                      <option value="2500-5000">2,500-5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                    {errors.expectedAttendance && (
                      <p className="text-red-500 text-xs mt-1">{errors.expectedAttendance.message}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                  >
                    Preferred Date Range
                  </label>
                  <input
                    {...register('preferredDate')}
                    type="text"
                    id="preferredDate"
                    className="w-full px-4 py-3 bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all"
                    placeholder="e.g., June 15-20, 2026"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-label text-xs text-[var(--color-gray-400)] mb-2 uppercase tracking-wider"
                  >
                    Event Details *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className={cn(
                      'w-full px-4 py-3 bg-[var(--color-gray-900)] border rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all resize-none',
                      errors.message ? 'border-red-500' : 'border-[var(--color-gray-800)]'
                    )}
                    placeholder="Tell us about your event, including any specific requirements or questions..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Information'}
                  </CTAButton>

                  {formSubmitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-500 ml-4">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">Message sent successfully!</span>
                    </div>
                  )}

                  {formSubmitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 ml-4">
                      <AlertCircle size={20} />
                      <span className="text-sm">Error sending message. Please try again.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-headline-2 text-white mb-4">Or Contact Us Directly</h2>
                <p className="text-[var(--color-gray-300)] text-lg">
                  Our events team is ready to help you plan your perfect event
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg p-6 text-center">
                  <Phone className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                  <h3 className="font-headline text-white text-lg mb-2">{contactInfo.team}</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg p-6 text-center">
                  <Mail className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                  <h3 className="font-headline text-white text-lg mb-2">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg p-6 text-center">
                  <Clock className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                  <h3 className="font-headline text-white text-lg mb-2">Hours</h3>
                  <p className="text-[var(--color-gray-300)] text-sm">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO SECTION COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[var(--color-gray-900)] to-black pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, var(--color-gold) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <SectionLabel variant="gold">Events & Activations</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-display mb-6 leading-tight"
          >
            <span className="text-gradient-gold">Host Your Next Unforgettable Event</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-[var(--color-gray-300)] mb-8 leading-relaxed"
          >
            From intimate galas to 5,000-person activations, American Dream delivers world-class
            venues with unmatched NYC metro access.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <CTAButton variant="primary" size="lg" href="#booking-inquiry" context="events-inquiry">
              Request Venue Info
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STATS RIBBON COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function StatsRibbon() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section ref={ref} className="section bg-black border-y border-[var(--color-gray-800)]">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <StatCard
              label="Annual Events"
              value={EVENTS_CONTENT.annualEvents}
              suffix="+"
              icon={<CalendarCheck className="w-6 h-6" />}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <StatCard
              label="Max Capacity"
              value={EVENTS_CONTENT.maxCapacity}
              suffix=" Guests"
              icon={<Users className="w-6 h-6" />}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <StatCard label="Configurable Spaces" value={12} icon={<MapPin className="w-6 h-6" />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VENUE SHOWCASE COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function VenueShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel variant="gold" className="mb-4">
            Venue Options
          </SectionLabel>
          <h2 className="text-headline-2 text-white mb-4">World-Class Event Spaces</h2>
          <p className="text-[var(--color-gray-300)] text-lg max-w-2xl mx-auto">
            Four distinct venues designed to accommodate any event size and style
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {EVENT_SPACES.map((venue, index) => (
            <VenueCard key={index} venue={venue} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VENUE CARD COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

interface VenueCardProps {
  venue: EventSpace;
  index: number;
}

function VenueCard({ venue, index }: VenueCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg overflow-hidden hover:border-[var(--color-gold)] transition-all duration-300 group"
    >
      {/* Image Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-[var(--color-gray-800)] to-[var(--color-gray-900)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-gold)]/5 group-hover:bg-[var(--color-gold)]/10 transition-colors" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
          </div>
          <p className="text-[var(--color-gray-500)] text-sm font-label tracking-wider">
            VENUE {index + 1}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-headline text-2xl text-white tracking-wide">{venue.name}</h3>
          <div className="bg-[var(--color-gold)]/20 px-3 py-1 rounded-full">
            <span className="text-[var(--color-gold)] font-label text-xs tracking-wider">
              {formatNumber(venue.capacity)} CAP
            </span>
          </div>
        </div>

        <p className="text-[var(--color-gray-400)] text-sm mb-4">
          {formatSquareFeet(venue.size)}
        </p>

        <div className="mb-4">
          <h4 className="font-label text-xs text-[var(--color-gray-500)] uppercase tracking-wider mb-2">
            Features
          </h4>
          <ul className="space-y-2">
            {venue.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[var(--color-gray-300)] text-sm">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-label text-xs text-[var(--color-gray-500)] uppercase tracking-wider mb-2">
            Best For
          </h4>
          <div className="flex flex-wrap gap-2">
            {venue.bestFor.map((use, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[var(--color-gray-800)] text-[var(--color-gray-300)] text-xs rounded-full border border-[var(--color-gray-700)]"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <CTAButton variant="outline" size="sm" href="#booking-inquiry" className="w-full">
          Learn More
        </CTAButton>
      </div>
    </motion.div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EVENT SERVICES COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function EventServices() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section ref={ref} className="section bg-[var(--color-gray-900)]">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel variant="gold" className="mb-4">
            Services
          </SectionLabel>
          <h2 className="text-headline-2 text-white mb-4">Full-Service Event Support</h2>
          <p className="text-[var(--color-gray-300)] text-lg max-w-2xl mx-auto">
            Everything you need for a seamless event experience
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {EVENT_SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[index];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black border border-[var(--color-gray-800)] rounded-lg p-6 hover:border-[var(--color-gold)] transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                <p className="text-white text-base leading-relaxed">{service}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PAST EVENTS GALLERY COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function PastEventsGallery() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel variant="gold" className="mb-4">
            Past Events
          </SectionLabel>
          <h2 className="text-headline-2 text-white mb-4">Proven Success Stories</h2>
          <p className="text-[var(--color-gray-300)] text-lg max-w-2xl mx-auto">
            Join the brands and organizations that have trusted American Dream for their events
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {PAST_EVENTS.map((event, index) => (
            <PastEventCard key={index} event={event} />
          ))}
        </motion.div>

        <div className="text-center">
          <CTAButton variant="outline" size="md" href="#booking-inquiry">
            View Full Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PAST EVENT CARD COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

interface PastEventCardProps {
  event: PastEvent;
}

function PastEventCard({ event }: PastEventCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg overflow-hidden hover:border-[var(--color-gold)] transition-all duration-300 group"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--color-gray-800)] to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-gold)]/5 group-hover:bg-[var(--color-gold)]/10 transition-colors" />
        <div className="relative z-10">
          <CalendarCheck className="w-12 h-12 text-[var(--color-gold)]/50" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-headline text-lg text-white leading-tight flex-1">{event.name}</h3>
          <span
            className={cn(
              'px-2 py-1 text-xs rounded border font-label tracking-wider ml-2',
              getEventTypeBadgeColor(event.type)
            )}
          >
            {event.type}
          </span>
        </div>

        <p className="text-[var(--color-gray-400)] text-sm mb-3">{event.date}</p>

        <div className="flex items-center gap-2 text-[var(--color-gold)]">
          <Users className="w-4 h-4" />
          <span className="font-label text-sm tracking-wider">
            {formatNumber(event.attendance)} Attendees
          </span>
        </div>
      </div>
    </motion.div>
  );
}
