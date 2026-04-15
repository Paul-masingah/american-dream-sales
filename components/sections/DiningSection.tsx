"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer, formatCurrency } from "@/lib/utils";
import { DINING_CATEGORIES, DINING_FEATURES, DINING_CONTENT } from "@/lib/constants";

export default function DiningSection() {
  return (
    <section id="dining" className="section bg-black">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">Culinary Destinations</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            {DINING_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            {DINING_CONTENT.subheadline}
          </motion.p>

          {/* Dining Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Total Dining Concepts"
                value={<AnimatedCounter value={DINING_CONTENT.totalConcepts} />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Total Seating Capacity"
                value={<AnimatedCounter value={DINING_CONTENT.totalSeats} />}
              />
            </motion.div>
          </div>

          {/* Dining Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {DINING_CATEGORIES.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-gradient-dark border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.highlight}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.count} venues
                    </span>
                    <span className="text-gold font-semibold">
                      {formatCurrency(category.avgCheckSize)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dining Features */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-headline-3 text-white mb-8 text-center">
              Dining Experience Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {DINING_FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 bg-black/50 border border-gold/20 rounded-lg p-4"
                >
                  <span className="text-gold text-xl mt-1">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <CTAButton variant="primary" context="dining-leasing">
              {DINING_CONTENT.ctaLabel}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
