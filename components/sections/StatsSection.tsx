"use client";

import { motion } from "framer-motion";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer, formatCurrency } from "@/lib/utils";
import {
  VISITOR_DEMOGRAPHICS,
  TRAFFIC_PATTERNS,
  ECONOMIC_IMPACT,
} from "@/lib/constants";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StatsSection() {
  // Chart options with gold theme
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#D4AF37",
          font: {
            family: "var(--font-inter)",
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        titleColor: "#D4AF37",
        bodyColor: "#E5E7EB",
        borderColor: "#D4AF37",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        ticks: { color: "#9CA3AF" },
        grid: { color: "rgba(212, 175, 55, 0.1)" },
      },
      x: {
        ticks: { color: "#9CA3AF" },
        grid: { display: false },
      },
    },
  };

  // Age Groups Data
  const ageGroupsData = {
    labels: VISITOR_DEMOGRAPHICS.ageGroups.map((group) => group.range),
    datasets: [
      {
        label: "Visitor Distribution",
        data: VISITOR_DEMOGRAPHICS.ageGroups.map((group) => group.percentage),
        backgroundColor: [
          "rgba(212, 175, 55, 0.8)",
          "rgba(212, 175, 55, 0.6)",
          "rgba(212, 175, 55, 0.4)",
          "rgba(212, 175, 55, 0.2)",
        ],
        borderColor: "#D4AF37",
        borderWidth: 1,
      },
    ],
  };

  // Income Distribution Data
  const incomeData = {
    labels: VISITOR_DEMOGRAPHICS.householdIncome.map((income) => income.range),
    datasets: [
      {
        label: "Household Income",
        data: VISITOR_DEMOGRAPHICS.householdIncome.map(
          (income) => income.percentage
        ),
        backgroundColor: [
          "rgba(212, 175, 55, 0.8)",
          "rgba(212, 175, 55, 0.6)",
          "rgba(212, 175, 55, 0.4)",
          "rgba(212, 175, 55, 0.2)",
        ],
        borderColor: "#D4AF37",
        borderWidth: 1,
      },
    ],
  };

  // Gender Split Data
  const genderData = {
    labels: ["Female", "Male", "Other"],
    datasets: [
      {
        data: [
          VISITOR_DEMOGRAPHICS.genderSplit.female,
          VISITOR_DEMOGRAPHICS.genderSplit.male,
          VISITOR_DEMOGRAPHICS.genderSplit.other,
        ],
        backgroundColor: [
          "rgba(212, 175, 55, 0.8)",
          "rgba(212, 175, 55, 0.5)",
          "rgba(212, 175, 55, 0.3)",
        ],
        borderColor: "#D4AF37",
        borderWidth: 2,
      },
    ],
  };

  // Party Size Data
  const partySizeData = {
    labels: ["Solo", "Couple", "Family", "Group"],
    datasets: [
      {
        label: "Party Size Distribution",
        data: [
          VISITOR_DEMOGRAPHICS.partySize.solo,
          VISITOR_DEMOGRAPHICS.partySize.couple,
          VISITOR_DEMOGRAPHICS.partySize.family,
          VISITOR_DEMOGRAPHICS.partySize.group,
        ],
        backgroundColor: "rgba(212, 175, 55, 0.6)",
        borderColor: "#D4AF37",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="stats" className="section bg-gradient-dark">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel variant="gold">Data & Insights</SectionLabel>

          <motion.h2
            variants={fadeInUp}
            className="text-headline-1 text-gradient-gold mb-6"
          >
            Visitor Demographics & Traffic Patterns
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            Comprehensive analytics showcasing our diverse, affluent visitor
            base and market-leading performance metrics.
          </motion.p>

          {/* Economic Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8 text-center"
            >
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                Annual Revenue
              </p>
              <p className="text-4xl font-bold text-gold mb-2">
                $
                <AnimatedCounter
                  value={ECONOMIC_IMPACT.annualRevenue / 1000000000}
                  decimals={1}
                />
                B
              </p>
              <p className="text-xs text-gray-500">Estimated</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8 text-center"
            >
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                Jobs Created
              </p>
              <p className="text-4xl font-bold text-gold mb-2">
                <AnimatedCounter value={ECONOMIC_IMPACT.jobsCreated} />
              </p>
              <p className="text-xs text-gray-500">Direct & Indirect</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8 text-center"
            >
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                Tax Revenue (Annual)
              </p>
              <p className="text-4xl font-bold text-gold mb-2">
                $
                <AnimatedCounter
                  value={ECONOMIC_IMPACT.taxRevenue / 1000000}
                />
                M
              </p>
              <p className="text-xs text-gray-500">Annually</p>
            </motion.div>
          </div>

          {/* Demographics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Age Groups */}
            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Age Distribution
              </h3>
              <div className="h-64">
                <Bar data={ageGroupsData} options={chartOptions} />
              </div>
            </motion.div>

            {/* Household Income */}
            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Household Income
              </h3>
              <div className="h-64">
                <Bar data={incomeData} options={chartOptions} />
              </div>
            </motion.div>

            {/* Gender Split */}
            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Gender Distribution
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="w-64 h-64">
                  <Doughnut
                    data={genderData}
                    options={{
                      ...chartOptions,
                      scales: undefined,
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Party Size */}
            <motion.div
              variants={fadeInUp}
              className="bg-black/50 border border-gold/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Party Size Distribution
              </h3>
              <div className="h-64">
                <Bar data={partySizeData} options={chartOptions} />
              </div>
            </motion.div>
          </div>

          {/* Traffic Patterns */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-headline-3 text-white mb-8 text-center">
              Traffic Patterns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                  Peak Days
                </p>
                <p className="text-sm font-bold text-gold mb-1">
                  {TRAFFIC_PATTERNS.peakDays.join(", ")}
                </p>
                <p className="text-xs text-gray-500">Busiest days</p>
              </div>

              <div className="bg-black/50 border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                  Peak Hours
                </p>
                <p className="text-sm font-bold text-gold mb-1">
                  {TRAFFIC_PATTERNS.peakHours.join(" & ")}
                </p>
                <p className="text-xs text-gray-500">Highest foot traffic</p>
              </div>

              <div className="bg-black/50 border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                  Average Dwell Time
                </p>
                <p className="text-2xl font-bold text-gold mb-1">
                  {TRAFFIC_PATTERNS.avgDwellTime} hrs
                </p>
                <p className="text-xs text-gray-500">Per guest</p>
              </div>

              <div className="bg-black/50 border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                  Repeat Visitor Rate
                </p>
                <p className="text-2xl font-bold text-gold mb-1">
                  {TRAFFIC_PATTERNS.repeatVisitorRate}%
                </p>
                <p className="text-xs text-gray-500">Annual return rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
