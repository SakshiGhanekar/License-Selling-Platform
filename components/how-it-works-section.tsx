"use client"

import { FiUpload, FiDollarSign, FiCheckCircle } from "react-icons/fi"
import { motion } from "framer-motion"

const steps = [
  {
    icon: <FiUpload className="w-10 h-10 text-indigo-600" />,
    title: "Upload License Details",
    description: "Simply provide your software license information through our secure portal.",
  },
  {
    icon: <FiDollarSign className="w-10 h-10 text-indigo-600" />,
    title: "Get Instant Valuation",
    description: "Our AI-powered system will analyze your license and provide a competitive offer.",
  },
  {
    icon: <FiCheckCircle className="w-10 h-10 text-indigo-600" />,
    title: "Receive Payment",
    description: "Accept the offer and get paid directly to your preferred payment method.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white overflow-y-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selling your unused software licenses has never been easier. Our streamlined process gets you paid fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#D1D5DB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
