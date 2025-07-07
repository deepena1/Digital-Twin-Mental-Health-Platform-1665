import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import RequestDemoModal from './RequestDemoModal';

const { FiUser, FiUsers, FiTarget, FiTrendingUp, FiCalendar } = FiIcons;

const Hero = () => {
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center neural-pattern pt-24 md:pt-32">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-10 w-4 h-4 bg-blue-400 rounded-full floating-element"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-52 right-20 w-6 h-6 bg-purple-400 rounded-full floating-element"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400 rounded-full floating-element"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Omni Digital Twin™</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            One Self. Infinite Perspectives.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Introducing a transformative leap in mental health technology: an AI-powered emotional replica that evolves with each user, reflecting their mental and emotional landscape in real time. Built on comprehensive data analysis, each twin becomes a deeply personalized simulation of the user's inner world.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:hello@omnisolus.com?subject=Experience Your Twin - Early Access Request', '_blank')}
          >
            Experience Your Twin
          </motion.button>
          <motion.button
            className="glass-card px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRequestDemoOpen(true)}
          >
            <SafeIcon icon={FiCalendar} className="text-lg" />
            <span>Request Demo</span>
          </motion.button>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {[
            { icon: FiUser, label: 'Personal Growth', value: '100%' },
            { icon: FiUsers, label: 'Clinical Accuracy', value: '95%' },
            { icon: FiTarget, label: 'Predictive Success', value: '89%' },
            { icon: FiTrendingUp, label: 'User Satisfaction', value: '97%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              onClick={() => {
                const section = document.getElementById('features');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <SafeIcon icon={stat.icon} className="text-3xl gradient-text mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isRequestDemoOpen} onClose={() => setIsRequestDemoOpen(false)} />
    </section>
  );
};

export default Hero;