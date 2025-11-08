"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Boost operational efficiency by up to 30%",
      stats: "+30%",
      details: [
        "Optimized route planning",
        "Reduced idle time",
        "Improved driver productivity",
        "Faster delivery times",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Save up to 25% on operational expenses",
      stats: "-25%",
      details: [
        "Lower fuel consumption",
        "Reduced maintenance costs",
        "Prevent unauthorized usage",
        "Minimize overtime expenses",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Users,
      title: "Improve Safety",
      description: "Enhance driver safety and compliance",
      stats: "40%",
      details: [
        "Real-time driver coaching",
        "Accident prevention alerts",
        "Safety score monitoring",
        "Compliance automation",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: Award,
      title: "Better Service",
      description: "Deliver exceptional customer experience",
      stats: "95%",
      details: [
        "Accurate ETAs",
        "Real-time tracking links",
        "Proof of delivery",
        "Improved communication",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
  ];

  const testimonials = [
    {
      company: "ABC Logistics",
      quote:
        "TTM transformed our operations. We've seen a 35% increase in on-time deliveries and significantly reduced fuel costs.",
      author: "Sarah Johnson",
      role: "Fleet Manager",
      savings: "$50K+",
    },
    {
      company: "Metro Transport",
      quote:
        "The real-time tracking and automated reporting saved us countless hours. Best investment we made this year.",
      author: "Michael Chen",
      role: "Operations Director",
      savings: "200hrs/mo",
    },
    {
      company: "FastTrack Delivery",
      quote:
        "Driver safety scores improved by 40% within 3 months. The safety features are game-changing.",
      author: "Emily Rodriguez",
      role: "Safety Coordinator",
      savings: "40% safer",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
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
            Benefits
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Drive Results That
            <span className="block gradient-text">
              Matter to Your Bottom Line
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of fleet managers who trust TTM to optimize their
            operations
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-gradient-to-br ${benefit.bgColor} p-6 rounded-2xl border border-gray-200 overflow-hidden group cursor-pointer`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>

              <div
                className={`bg-gradient-to-br ${benefit.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
              >
                <benefit.icon className="h-6 w-6 text-white" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold gradient-text">
                  {benefit.stats}
                </div>
              </div>

              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <svg
                      className="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {testimonial.savings}
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Active Fleets" },
              { value: "50K+", label: "Vehicles Tracked" },
              { value: "99.9%", label: "Uptime" },
              { value: "$2M+", label: "Saved Annually" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
