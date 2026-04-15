"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer, formatCurrency } from "@/lib/utils";
import { LUXURY_BRANDS, LUXURY_CONTENT } from "@/lib/constants";

export default function LuxurySection() {
  return (
    <section id="luxury" className="section bg-gradient-dark">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">Luxury Collection</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            {LUXURY_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-6 max-w-3xl"
          >
            {LUXURY_CONTENT.subheadline}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 mb-12 max-w-3xl"
          >
            {LUXURY_CONTENT.description}
          </motion.p>

          {/* Luxury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Average Customer Spend"
                value={
                  <AnimatedCounter
                    value={LUXURY_CONTENT.avgCustomerSpend}
                    prefix="$"
                  />
                }
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <StatCard
                label="Annual Luxury Revenue"
                value={
                  <AnimatedCounter
                    value={LUXURY_CONTENT.annualLuxuryRevenue / 1000000}
                    prefix="$"
                    suffix="M"
                  />
                }
              />
            </motion.div>
          </div>

          {/* Luxury Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {LUXURY_BRANDS.map((brand, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-black/50 border border-gold/30 rounded-lg p-6 hover:border-gold/60 transition-all hover:shadow-gold">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-gold text-sm mb-3">{brand.category}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{brand.squareFeet.toLocaleString()} sq ft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <CTAButton variant="primary" context="luxury-leasing">
              {LUXURY_CONTENT.ctaLabel}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
