import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiCheck, FiArrowRight, FiStar } = FiIcons;

const ApplicationModal = ({ application, isOpen, onClose }) => {
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

  if (!application) return null;

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
            className="relative w-full max-w-5xl glass-card p-8 z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${application.color} flex items-center justify-center`}>
                  <SafeIcon icon={application.icon} className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">{application.title}</h2>
                  <p className="text-gray-400 mt-2">{application.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {application.details.overview}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Use Cases */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <SafeIcon icon={FiArrowRight} className="text-blue-400 mr-2" />
                  Key Use Cases
                </h4>
                <ul className="space-y-3">
                  {application.details.useCases.map((useCase, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <SafeIcon icon={FiCheck} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <SafeIcon icon={FiStar} className="text-yellow-400 mr-2" />
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {application.details.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Core Features</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {application.features.map((feature, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg">
                    <div className="text-sm text-gray-300">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="glass-card p-6 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Success Stories</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Clinical Partner</div>
                  <div className="text-gray-300">
                    "The Omni Digital Twin has transformed our practice. We've seen a 40% reduction in treatment time and significantly improved patient outcomes."
                  </div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold mb-2">University Program</div>
                  <div className="text-gray-300">
                    "Our students now have access to diverse, realistic case studies that prepare them for real-world practice like never before."
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@omnisolus.com?subject=Partnership Inquiry - ' + application.title, '_blank')}
              >
                Start Partnership
              </motion.button>
              <motion.button
                className="glass-card px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@omnisolus.com?subject=Schedule Demo - ' + application.title, '_blank')}
              >
                Schedule Demo
              </motion.button>
              <motion.button
                className="glass-card px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const section = document.getElementById('contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationModal;