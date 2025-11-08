"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Clock,
  AlertTriangle,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description:
        "Monitor your entire fleet in real-time with precise GPS tracking. Know exactly where every vehicle is, anytime.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "ELD Compliance",
      description:
        "Stay compliant with FMCSA regulations. Automated Hours of Service tracking and DVIR reports.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with comprehensive reports on fuel efficiency, driver behavior, and more.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Safety Management",
      description:
        "Enhance driver safety with real-time alerts for harsh braking, speeding, and other risky behaviors.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description:
        "Access your fleet data on-the-go. iOS and Android apps keep you connected wherever you are.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description:
        "Get notified instantly about critical events like maintenance needs, geofence violations, and more.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Route Optimization",
      description:
        "Reduce fuel costs and delivery times with intelligent route planning and optimization.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: AlertTriangle,
      title: "Maintenance Tracking",
      description:
        "Never miss scheduled maintenance. Automated reminders keep your fleet running smoothly.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Everything You Need to
            <span className="block gradient-text">Manage Your Fleet</span>
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to streamline operations, improve safety,
            and maximize efficiency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold inline-flex items-center space-x-2">
            <span>Explore All Features</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
