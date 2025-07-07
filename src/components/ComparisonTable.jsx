import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiInfo } = FiIcons;

const ComparisonTable = () => {
  const features = [
    { 
      name: 'Real-time Emotional Modeling',
      description: 'Continuously updated emotional state representation',
      traditional: false,
      competitors: 'Limited',
      omni: true
    },
    { 
      name: 'Predictive Therapy Simulation',
      description: 'Test different therapeutic approaches before implementation',
      traditional: false,
      competitors: false,
      omni: true
    },
    { 
      name: 'Multi-Perspective Communication',
      description: 'View situations from different emotional standpoints',
      traditional: 'Limited',
      competitors: 'Limited',
      omni: true
    },
    { 
      name: 'Future Self Interaction',
      description: 'Engage with projected versions of yourself',
      traditional: false,
      competitors: false,
      omni: true
    },
    { 
      name: 'Clinical Integration',
      description: 'Seamless integration with existing clinical workflows',
      traditional: 'Partial',
      competitors: 'Limited',
      omni: true
    },
    { 
      name: 'Continuous Learning',
      description: 'System improves with each interaction',
      traditional: false,
      competitors: 'Basic',
      omni: true
    },
    { 
      name: 'Data Privacy & Security',
      description: 'Enterprise-grade protection of sensitive information',
      traditional: 'Varies',
      competitors: 'Partial',
      omni: true
    },
    { 
      name: 'Evidence-Based Approach',
      description: 'Grounded in clinical research and best practices',
      traditional: true,
      competitors: 'Varies',
      omni: true
    }
  ];

  const renderCheck = (value) => {
    if (value === true) {
      return <SafeIcon icon={FiCheck} className="text-green-400 text-lg mx-auto" />;
    } else if (value === false) {
      return <SafeIcon icon={FiX} className="text-red-400 text-lg mx-auto" />;
    } else {
      return <span className="text-yellow-400 text-sm">{value}</span>;
    }
  };

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Why Choose Omni Digital Twin™
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our revolutionary approach compares to traditional therapy and competing digital solutions.
          </p>
        </motion.div>

        <div className="overflow-x-auto glass-card p-4 md:p-8">
          <table className="w-full min-w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-300 p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <span>Feature</span>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="relative group"
                    >
                      <SafeIcon icon={FiInfo} className="text-gray-400 cursor-help text-sm" />
                      <div className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-gray-800 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Detailed comparison of key features across different approaches
                      </div>
                    </motion.div>
                  </div>
                </th>
                <th className="p-4 border-b border-gray-700 text-center">
                  <div className="text-gray-400 mb-2">Traditional Therapy</div>
                </th>
                <th className="p-4 border-b border-gray-700 text-center">
                  <div className="text-gray-400 mb-2">Competing Digital Solutions</div>
                </th>
                <th className="p-4 border-b border-gray-700 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-t-lg">
                  <div className="text-white font-semibold mb-2">Omni Digital Twin™</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr 
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? 'bg-white/5' : ''}
                >
                  <td className="p-4 border-b border-gray-700">
                    <div className="font-medium text-white">{feature.name}</div>
                    <div className="text-sm text-gray-400">{feature.description}</div>
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center">
                    {renderCheck(feature.traditional)}
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center">
                    {renderCheck(feature.competitors)}
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                    {renderCheck(feature.omni)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Unmatched Personalization</h3>
            <p className="text-gray-300 mb-4">
              Unlike one-size-fits-all solutions, the Omni Digital Twin™ creates a unique model 
              for each user, adapting continuously to provide highly personalized insights.
            </p>
            <div className="text-blue-400 text-sm">99.7% accuracy in personalization</div>
          </motion.div>
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Integrated Ecosystem</h3>
            <p className="text-gray-300 mb-4">
              Beyond standalone apps, our platform creates a unified mental health ecosystem 
              connecting personal growth, clinical care, and educational applications.
            </p>
            <div className="text-blue-400 text-sm">Seamless integration across domains</div>
          </motion.div>
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Research-Backed Innovation</h3>
            <p className="text-gray-300 mb-4">
              Every feature is developed in collaboration with leading researchers and 
              clinicians, ensuring our technology delivers measurable therapeutic value.
            </p>
            <div className="text-blue-400 text-sm">12+ peer-reviewed publications</div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:hello@omnisolus.com?subject=Detailed Comparison Request', '_blank')}
          >
            Request Detailed Comparison
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;