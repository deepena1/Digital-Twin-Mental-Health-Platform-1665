import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiCheck, FiArrowRight } = FiIcons;

const FeatureModal = ({ feature, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!feature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl glass-card p-8 z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">{feature.title}</h2>
                  <p className="text-gray-400 mt-2">{feature.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.details.overview}
                </p>

                {/* Key Features */}
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {feature.details.keyFeatures.map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <SafeIcon icon={FiCheck} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                <ul className="space-y-3 mb-6">
                  {feature.details.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Use Cases */}
                <div className="glass-card p-6 mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Real-World Applications</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiArrowRight} className="text-blue-400" />
                      <span>Individual therapy enhancement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiArrowRight} className="text-purple-400" />
                      <span>Clinical training and education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiArrowRight} className="text-green-400" />
                      <span>Personal growth and self-discovery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiArrowRight} className="text-orange-400" />
                      <span>Family and relationship counseling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@omnisolus.com?subject=Feature Demo Request - ' + feature.title, '_blank')}
              >
                Request Feature Demo
              </motion.button>
              <motion.button
                className="glass-card px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const section = document.getElementById('applications');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                See Applications
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureModal;