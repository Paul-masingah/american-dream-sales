"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { EVENT_SPACES, EVENT_SERVICES, PAST_EVENTS, EVENTS_CONTENT } from "@/lib/constants";

export default function EventsSection() {
  return (
    <section id="events" className="section bg-black">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">Premier Event Spaces</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            {EVENTS_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            {EVENTS_CONTENT.subheadline}
          </motion.p>

          {/* Event Spaces Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {EVENT_SPACES.map((space, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-dark border border-gold/30 rounded-xl p-8 hover:border-gold/60 transition-all"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {space.name}
                  </h3>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gold">
                      {space.capacity.toLocaleString()} guests
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">
                      {space.size.toLocaleString()} sq ft
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    Features
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {space.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="text-gold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gold/20">
                  <p className="text-xs text-gray-500 mb-2">Best For</p>
                  <p className="text-sm text-gray-300">{space.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Services */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-headline-3 text-white mb-8 text-center">
              Event Services & Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EVENT_SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-gradient-dark border border-gold/20 rounded-lg p-4 hover:border-gold/40 transition-all"
                >
                  <span className="text-gold text-xl">✓</span>
                  <span className="text-gray-300">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-headline-3 text-white mb-8 text-center">
              Notable Past Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PAST_EVENTS.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-black/50 border border-gold/30 rounded-lg p-6 text-center"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {event.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">{event.date}</p>
                  <p className="text-gold font-semibold">
                    {event.attendance.toLocaleString()} attendees
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <CTAButton variant="primary" context="events-inquiry">
              {EVENTS_CONTENT.ctaLabel}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
