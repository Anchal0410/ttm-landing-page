"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const Hero = () => {
  const features = [
    "Real-time GPS Tracking",
    "ELD Compliance",
    "Automated Reporting",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                #1 Fleet Management Platform
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Fleet
              <span className="block mt-2 gradient-text">
                With Smart Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Total visibility, complete control. Manage your fleet with
              real-time tracking, ELD compliance, and data-driven insights that
              boost efficiency and reduce costs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-primary-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-gray-500"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 animate-float">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    Fleet Overview
                  </h3>
                  <span className="text-xs text-green-500 font-semibold bg-green-50 px-3 py-1 rounded-full">
                    Live
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { label: "Active Vehicles", value: "124" },
                    { label: "On Route", value: "98" },
                    { label: "Idle", value: "18" },
                    { label: "Maintenance", value: "8" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 rounded-xl"
                    >
                      <p className="text-gray-600 text-xs md:text-sm">
                        {stat.label}
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mock Map */}
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-40 md:h-48 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white rounded-full p-3 md:p-4 inline-block shadow-lg">
                      <svg
                        className="h-10 w-10 md:h-12 md:w-12 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                      Real-time Fleet Tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards - Hidden on mobile */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden lg:block absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 w-44 z-10"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Efficiency</p>
                  <p className="text-lg font-bold text-gray-900">+23%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="hidden lg:block absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 w-44 z-10"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Cost Savings</p>
                  <p className="text-lg font-bold text-gray-900">$18K</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
