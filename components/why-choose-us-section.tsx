"use client"

import { motion } from "framer-motion"
import { FiDollarSign, FiClock, FiShield, FiUsers } from "react-icons/fi"

const benefits = [
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    title: "Highest Payouts",
    description: "We offer 20% more than competitors",
  },
  {
    icon: <FiClock className="w-8 h-8" />,
    title: "Instant Payments",
    description: "Get paid within 24 hours",
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Secure Process",
    description: "Bank-grade encryption",
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "500+ Happy Sellers",
    description: "Trusted by businesses worldwide",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-y-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best experience for software license sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
