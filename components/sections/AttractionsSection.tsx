"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { ATTRACTIONS, ATTRACTIONS_CONTENT } from "@/lib/constants";

export default function AttractionsSection() {
  return (
    <section id="attractions" className="section bg-gradient-dark">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">World-Class Attractions</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            {ATTRACTIONS_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            {ATTRACTIONS_CONTENT.subheadline}
          </motion.p>

          {/* Attractions Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Total Entertainment Space"
                value={
                  <AnimatedCounter
                    value={ATTRACTIONS_CONTENT.totalSquareFeet / 1000}
                    suffix="K sq ft"
                  />
                }
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Average Dwell Time"
                value={ATTRACTIONS_CONTENT.avgDwellTime}
              />
            </motion.div>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {ATTRACTIONS.map((attraction, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/50 border border-gold/30 rounded-xl p-8 hover:border-gold/60 transition-all hover:shadow-gold"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {attraction.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {"highlights" in attraction ? "Highlights" : "Features"}
                  </p>
                  <ul className="space-y-2">
                    {("highlights" in attraction
                      ? attraction.highlights
                      : "features" in attraction
                      ? attraction.features
                      : []
                    ).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <CTAButton variant="primary" context="attractions-sponsorship">
              {ATTRACTIONS_CONTENT.ctaLabel}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
