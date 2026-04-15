"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { RETAIL_CATEGORIES, RETAIL_ANCHOR_TENANTS, RETAIL_CONTENT } from "@/lib/constants";

export default function RetailSection() {
  return (
    <section id="retail" className="section bg-black">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">Retail Excellence</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            {RETAIL_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            {RETAIL_CONTENT.subheadline}
          </motion.p>

          {/* Retail Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {RETAIL_CATEGORIES.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-gradient-dark border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.highlight}</p>
                  <p className="text-sm text-gray-500">
                    {category.storeCount} stores
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Anchor Tenants */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-headline-3 text-white mb-8 text-center">
              Anchor Tenants
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {RETAIL_ANCHOR_TENANTS.map((tenant, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-dark border border-gold/20 rounded-lg p-6 text-center hover:border-gold/40 transition-all"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {tenant.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {tenant.squareFeet.toLocaleString()} sq ft
                  </p>
                  <p className="text-xs text-gold mt-2">{tenant.floor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <CTAButton variant="primary" context="retail-leasing">
              {RETAIL_CONTENT.ctaLabel}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
