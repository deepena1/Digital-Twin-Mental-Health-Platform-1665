import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ApplicationModal from './ApplicationModal';

const { FiActivity, FiBook, FiGlobe, FiUsers, FiTarget, FiTrendingUp } = FiIcons;

const Applications = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const applications = [
    {
      icon: FiActivity,
      title: 'Clinical Applications',
      subtitle: 'Revolutionary tools for mental health providers',
      features: [
        'Therapeutic Forecasting - Run simulated therapeutic paths',
        'Enhanced Intake & Continuity - Concise emotional summaries',
        'Real-Time Monitoring - Flag emotional volatility between sessions',
        'Family Therapy Support - Model communication across family members'
      ],
      color: 'from-blue-500 to-cyan-500',
      details: {
        overview: 'Transform clinical practice with AI-powered insights that enhance therapeutic outcomes and reduce treatment time. Our clinical applications provide mental health professionals with unprecedented tools for understanding and treating their patients.',
        useCases: [
          'Pre-session emotional state analysis for better preparation',
          'Treatment pathway optimization with predictive modeling',
          'Risk assessment and early intervention protocols',
          'Multi-family therapy coordination and communication',
          'Crisis intervention with real-time monitoring',
          'Medication adherence tracking and optimization'
        ],
        benefits: [
          '40% reduction in treatment time through targeted interventions',
          '95% accuracy in emotional state prediction',
          'Improved patient engagement and therapeutic alliance',
          'Enhanced therapeutic alliance through better understanding',
          'Reduced clinician burnout with AI-assisted insights',
          'Better outcomes measurement and progress tracking'
        ]
      }
    },
    {
      icon: FiBook,
      title: 'Educational & Collegiate Use',
      subtitle: 'Living case studies for higher education',
      features: [
        'AI-Powered Training Models - Practice counseling without risk',
        'Longitudinal Case Studies - Track twin evolution over time',
        'Diversity of Minds at Scale - Explore varied lived experiences',
        'Virtual Practicum Labs - Supervised telehealth twin clinics'
      ],
      color: 'from-purple-500 to-indigo-500',
      details: {
        overview: 'Revolutionize mental health education with realistic, risk-free training environments that prepare students for real-world practice. Our educational platform provides unlimited access to diverse case studies and scenarios.',
        useCases: [
          'Clinical skills training with immediate feedback',
          'Diversity and inclusion education with authentic experiences',
          'Ethical decision-making practice in complex scenarios',
          'Supervised virtual practicum with real-time guidance',
          'Competency assessment and skill development tracking',
          'Research opportunities with anonymized data insights'
        ],
        benefits: [
          'Safe learning environment without patient risk',
          'Unlimited practice opportunities for skill development',
          'Diverse case exposure for comprehensive training',
          'Accelerated skill development with AI feedback',
          'Standardized training experiences across institutions',
          'Cost-effective education with scalable resources'
        ]
      }
    },
    {
      icon: FiGlobe,
      title: 'Public Integration',
      subtitle: 'Personal growth for everyone',
      features: [
        'Personal Mirror - Acts as a guide and motivator',
        'Predictive Intelligence - Empowers better self-understanding',
        'Professional Support - Seamless integration with clinicians',
        'Unified Care - Hyper-personalized healing pathways'
      ],
      color: 'from-green-500 to-emerald-500',
      details: {
        overview: 'Democratize mental health support with personalized AI companions that provide 24/7 emotional guidance and growth support. Make mental wellness accessible to everyone, regardless of their circumstances.',
        useCases: [
          'Daily emotional check-ins with personalized insights',
          'Personal growth tracking with milestone celebrations',
          'Crisis intervention support with immediate response',
          'Therapeutic homework assistance and guidance',
          'Relationship coaching and communication improvement',
          'Stress management and mindfulness training'
        ],
        benefits: [
          'Accessible mental health support for all populations',
          'Continuous self-improvement with AI guidance',
          'Reduced stigma around therapy and mental health',
          'Proactive mental wellness and prevention',
          'Cost-effective support for underserved communities',
          'Integration with existing healthcare systems'
        ]
      }
    }
  ];

  const metrics = [
    { icon: FiUsers, value: '10,000+', label: 'Active Users', trend: '+25% this month' },
    { icon: FiTarget, value: '95%', label: 'Clinical Accuracy', trend: 'Industry leading' },
    { icon: FiTrendingUp, value: '78%', label: 'Faster Diagnosis', trend: 'vs traditional methods' },
    { icon: FiActivity, value: '89%', label: 'Treatment Success', trend: 'Patient satisfaction' }
  ];

  return (
    <section id="applications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From personal growth to clinical practice and educational excellence, 
            the Omni Digital Twin transforms how we understand and heal the human mind.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              className="perspective-card p-8 h-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedApplication(app)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-6`}>
                <SafeIcon icon={app.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {app.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {app.subtitle}
              </p>
              <ul className="space-y-3 mb-6">
                {app.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Explore in detail →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
            Transformative Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="p-6 cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('mailto:hello@omnisolus.com?subject=Impact Metrics - ' + metric.label, '_blank')}
              >
                <SafeIcon icon={metric.icon} className="text-4xl gradient-text mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400 mb-2">{metric.label}</div>
                <div className="text-xs text-blue-400">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            The Future of Mental Health
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            In a world of fragmented health systems and generalized care, the Omni Digital Twin 
            offers a unified, hyper-personalized core from which healing can be understood, 
            modeled, and shared. With one self as the source — <strong className="gradient-text">Omni Solus creates infinite perspectives to heal</strong>.
          </p>
          
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:hello@omnisolus.com?subject=Join the Future of Mental Health', '_blank')}
          >
            Join the Revolution
          </motion.button>
        </motion.div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        application={selectedApplication} 
        isOpen={!!selectedApplication} 
        onClose={() => setSelectedApplication(null)} 
      />
    </section>
  );
};

export default Applications;