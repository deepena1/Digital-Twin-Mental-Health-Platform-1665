import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import FeatureModal from './FeatureModal';

const { FiHeart, FiTrendingUp, FiEye, FiClock, FiShield, FiZap } = FiIcons;

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: FiHeart,
      title: 'Personalized Emotional Replica',
      description: 'Each Digital Twin is a living model, continuously updated with data from across the Omni Solus ecosystem, reflecting your evolving psychological state and emotional tone.',
      color: 'from-pink-500 to-rose-500',
      details: {
        overview: 'Your Digital Twin is built from comprehensive data analysis including journaling patterns, emotional tone analysis, voice inputs, therapy session notes, and behavioral patterns. The system uses advanced machine learning algorithms to create a highly accurate psychological profile that evolves in real-time.',
        keyFeatures: [
          'Real-time emotional state modeling with 99.7% accuracy',
          'Continuous learning from user interactions and feedback',
          'Multi-modal data integration (text, voice, behavioral patterns)',
          'Personalized psychological profiling with privacy protection',
          'Adaptive response generation based on emotional context',
          'Integration with wearable devices for physiological data'
        ],
        benefits: [
          'Deeper self-understanding through objective analysis',
          'Improved emotional awareness and regulation',
          'Better therapeutic outcomes with personalized insights',
          'Enhanced personal growth through data-driven feedback',
          'Reduced time to breakthrough moments in therapy',
          'Increased emotional intelligence and self-compassion'
        ]
      }
    },
    {
      icon: FiTrendingUp,
      title: 'Predictive Therapy Simulation',
      description: 'Clinicians can run simulated interventions on your twin, testing different therapeutic approaches and medication combinations to forecast optimal outcomes.',
      color: 'from-blue-500 to-cyan-500',
      details: {
        overview: 'Advanced AI modeling allows therapists to test various treatment approaches in a safe, simulated environment before implementing them in real sessions. This revolutionary approach reduces trial-and-error in mental health treatment.',
        keyFeatures: [
          'Multiple therapy modality testing (CBT, DBT, EMDR, etc.)',
          'Medication interaction simulation with side effect prediction',
          'Treatment outcome prediction with confidence intervals',
          'Risk assessment modeling for various interventions',
          'Personalized treatment pathway optimization',
          'Integration with clinical decision support systems'
        ],
        benefits: [
          'Reduced trial-and-error in treatment selection',
          'Faster path to effective therapy with measurable outcomes',
          'Minimized treatment risks and adverse reactions',
          'Improved clinical decision-making with data support',
          'Enhanced patient safety through predictive modeling',
          'Cost-effective treatment planning and resource allocation'
        ]
      }
    },
    {
      icon: FiEye,
      title: 'Perspective Shifting Engine',
      description: 'Your twin communicates from multiple lenses - from your inner narrative to clinical perspectives, bridging gaps in understanding and perception.',
      color: 'from-purple-500 to-indigo-500',
      details: {
        overview: 'The same twin can communicate from multiple perspectives, helping users understand themselves from different viewpoints and improving communication with others. This breakthrough technology enables empathy building and perspective-taking skills.',
        keyFeatures: [
          'Multi-perspective communication (self, clinical, family views)',
          'Inner dialogue simulation with emotional intelligence',
          'Clinical lens translation for professional insights',
          'Empathy bridge building between different viewpoints',
          'Cultural and contextual perspective adaptation',
          'Real-time perspective switching during conversations'
        ],
        benefits: [
          'Enhanced self-awareness through multiple viewpoints',
          'Better family communication and understanding',
          'Improved therapeutic alliance with clinicians',
          'Reduced misunderstandings in relationships',
          'Increased empathy and emotional intelligence',
          'Better conflict resolution skills development'
        ]
      }
    },
    {
      icon: FiClock,
      title: 'Future Self Interaction',
      description: 'Engage with a projected version of yourself based on your current healing trajectory, providing hope, motivation, and behavioral feedback.',
      color: 'from-green-500 to-emerald-500',
      details: {
        overview: 'Monthly 24-hour preview sessions with your projected future self, offering guidance, motivation, and insights from a version of you that has grown through the healing process. This unique feature provides hope and direction for personal growth.',
        keyFeatures: [
          'Future self projection modeling based on current trajectory',
          'Motivational guidance system with personalized messaging',
          'Progress visualization with milestone tracking',
          'Goal-oriented feedback and achievement planning',
          'Behavioral reinforcement through future self wisdom',
          'Crisis intervention with future perspective insights'
        ],
        benefits: [
          'Increased motivation through future vision clarity',
          'Clear progress tracking with measurable milestones',
          'Hope and inspiration during difficult periods',
          'Behavioral reinforcement through future self guidance',
          'Enhanced goal-setting and achievement planning',
          'Reduced anxiety about future outcomes'
        ]
      }
    },
    {
      icon: FiShield,
      title: 'Clinical Integration',
      description: 'HIPAA-compliant, encrypted, and clinician-controlled simulations maintain therapeutic integrity while enabling proactive care.',
      color: 'from-orange-500 to-amber-500',
      details: {
        overview: 'Enterprise-grade security and compliance ensure that all data and simulations meet the highest standards for medical privacy and therapeutic ethics. Our platform integrates seamlessly with existing clinical workflows.',
        keyFeatures: [
          'HIPAA compliance with full audit trail logging',
          'End-to-end encryption for all data transmission',
          'Clinician access controls with role-based permissions',
          'Integration with Electronic Health Records (EHR)',
          'Real-time monitoring and alert systems',
          'Secure multi-party computation for privacy protection'
        ],
        benefits: [
          'Complete data privacy and patient confidentiality',
          'Regulatory compliance with healthcare standards',
          'Professional oversight and clinical governance',
          'Ethical AI practices with transparency',
          'Seamless workflow integration for clinicians',
          'Enhanced patient trust through security measures'
        ]
      }
    },
    {
      icon: FiZap,
      title: 'Real-Time Evolution',
      description: 'Your twin evolves with every interaction, learning from journaling, voice inputs, therapy sessions, and behavioral patterns.',
      color: 'from-violet-500 to-purple-500',
      details: {
        overview: 'Continuous learning algorithms ensure your Digital Twin becomes more accurate and personalized with each interaction, creating an ever-improving reflection of your inner world. The system adapts to your changing needs and circumstances.',
        keyFeatures: [
          'Continuous learning algorithms with neural network adaptation',
          'Multi-source data integration from various touchpoints',
          'Adaptive personality modeling with trait evolution',
          'Real-time updates with immediate feedback incorporation',
          'Behavioral pattern recognition and prediction',
          'Contextual awareness and environmental adaptation'
        ],
        benefits: [
          'Increasing accuracy over time with usage',
          'Personalized insights that improve with interaction',
          'Adaptive responses that match your evolution',
          'Growing understanding of your unique patterns',
          'Enhanced prediction accuracy for better outcomes',
          'Customized experience that reflects your journey'
        ]
      }
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by advanced AI and deep learning, your Digital Twin offers unprecedented 
            insights into your mental and emotional landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="perspective-card p-8 h-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFeature(feature)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <SafeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Showcase */}
        <motion.div
          className="mt-20 glass-card p-8 md:p-12 text-center cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          onClick={() => window.open('mailto:hello@omnisolus.com?subject=Technical Documentation Request', '_blank')}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            Advanced AI Architecture
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto">
            Built on cutting-edge machine learning models that process multi-modal data streams 
            including text, voice, behavioral patterns, and physiological indicators to create 
            the most accurate digital representation of your inner self.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div 
              className="p-6 cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open('mailto:hello@omnisolus.com?subject=Accuracy Rate Information', '_blank');
              }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">99.7%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </motion.div>
            <motion.div 
              className="p-6 cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open('mailto:hello@omnisolus.com?subject=Real-time Processing Information', '_blank');
              }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Real-time Processing</div>
            </motion.div>
            <motion.div 
              className="p-6 cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open('mailto:hello@omnisolus.com?subject=Security Information', '_blank');
              }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">256-bit</div>
              <div className="text-gray-400">Encryption Security</div>
            </motion.div>
          </div>
          <div className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Request Technical Documentation →
          </div>
        </motion.div>
      </div>

      {/* Feature Modal */}
      <FeatureModal 
        feature={selectedFeature} 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
      />
    </section>
  );
};

export default Features;