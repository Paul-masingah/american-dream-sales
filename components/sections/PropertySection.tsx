/**
 * PropertySection Component
 * Overview of property stats and location advantages
 * Foundation for the sales pitch
 */

'use client';

import { motion } from 'framer-motion';
import { Building2, Users, MapPin, TrendingUp } from 'lucide-react';
import { SectionProps } from '@/lib/types';
import { PROPERTY_STATS, LOCATION_DATA } from '@/lib/constants';
import { SectionLabel } from '../ui/SectionLabel';
import { StatCard } from '../ui/StatCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { staggerContainer, fadeInUp, formatCompact } from '@/lib/utils';

export function PropertySection({ id, className = '' }: SectionProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  const stats = [
    {
      label: 'Gross Leasable Area',
      value: PROPERTY_STATS.totalGLA,
      suffix: ' sq ft',
      icon: <Building2 size={24} />,
    },
    {
      label: 'Stores & Attractions',
      value: PROPERTY_STATS.totalStores,
      suffix: '+',
      icon: <Building2 size={24} />,
    },
    {
      label: 'Annual Visitors',
      value: PROPERTY_STATS.annualVisitors,
      decimals: 1,
      icon: <Users size={24} />,
    },
    {
      label: 'Regional Catchment',
      value: PROPERTY_STATS.regionalCatchment,
      decimals: 1,
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section id={id} className={`section bg-black ${className}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="container mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <SectionLabel variant="gold" className="mb-6 mx-auto">
            The Property
          </SectionLabel>
          <h2 className="text-headline-1 text-white mb-6">
            The Numbers Behind
            <span className="text-gradient-gold"> The Dream</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-3xl mx-auto">
            America's second-largest shopping mall. New Jersey's #1 entertainment destination.
            A $5 billion investment in the future of retail and experiential commerce.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Location Highlights */}
        <motion.div variants={fadeInUp} className="mt-16">
          <div className="bg-[var(--color-gray-900)] border border-[var(--color-gray-800)] rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-[var(--color-blue)]" size={32} />
              <h3 className="font-headline text-2xl text-white tracking-wide uppercase">
                Prime Location
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Manhattan', distance: LOCATION_DATA.distanceFromNYC },
                { label: 'Newark Airport', distance: LOCATION_DATA.distanceFromEWR },
                { label: 'LaGuardia Airport', distance: LOCATION_DATA.distanceFromLGA },
                { label: 'JFK Airport', distance: LOCATION_DATA.distanceFromJFK },
              ].map((location, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl text-[var(--color-blue)] mb-2">
                    {location.distance.minutes} min
                  </div>
                  <div className="font-body text-sm text-white/70">{location.label}</div>
                  <div className="font-label text-xs text-white/50">{location.distance.miles} miles</div>
                </div>
              ))}
            </div>

            <p className="font-body text-center text-white/60 mt-6 text-sm">
              {LOCATION_DATA.address}
            </p>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="font-display text-5xl text-[var(--color-gold)] mb-3">
              {PROPERTY_STATS.entertainmentPercent}%
            </div>
            <div className="font-headline text-lg text-white tracking-wide uppercase mb-2">
              Entertainment
            </div>
            <p className="font-body text-sm text-white/60">
              Unlike any other retail destination
            </p>
          </div>

          <div className="text-center">
            <div className="font-display text-5xl text-[var(--color-gold)] mb-3">
              {formatCompact(PROPERTY_STATS.parkingSpaces)}
            </div>
            <div className="font-headline text-lg text-white tracking-wide uppercase mb-2">
              Parking Spaces
            </div>
            <p className="font-body text-sm text-white/60">
              Free parking for all visitors
            </p>
          </div>

          <div className="text-center">
            <div className="font-display text-5xl text-[var(--color-gold)] mb-3">
              ${formatCompact(PROPERTY_STATS.medianHHI)}
            </div>
            <div className="font-headline text-lg text-white tracking-wide uppercase mb-2">
              Median HHI
            </div>
            <p className="font-body text-sm text-white/60">
              Within 15-mile trade area
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
