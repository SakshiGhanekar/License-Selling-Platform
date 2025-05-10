"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sell Your Unused Software Licenses Instantly
          </motion.h1>

    <motion.p
            className="text-xl md:text-2xl mb-8 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get cash for licenses you&apos;re not using - fast, secure, and hassle-free
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get a Free Valuation
            </button>
          </motion.div>
        </div>

        {/* Animated License Cards */}
        <div className="mt-16 relative h-64 md:h-80">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-white rounded-lg shadow-xl p-4 transform -rotate-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="h-4 w-16 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
            <div className="absolute bottom-3 right-3 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 translate-x-20 w-64 h-40 bg-white rounded-lg shadow-xl p-4 transform rotate-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="h-4 w-20 bg-emerald-200 rounded mb-4"></div>
            <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-2/3 bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
            <div className="absolute bottom-3 right-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 -translate-x-24 w-64 h-40 bg-white rounded-lg shadow-xl p-4 transform -rotate-12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="h-4 w-24 bg-purple-200 rounded mb-4"></div>
            <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
            <div className="absolute bottom-3 right-3 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
