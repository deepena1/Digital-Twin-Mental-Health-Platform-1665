import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiStar, FiUsers, FiShield, FiZap, FiGlobe, FiActivity, FiBook, FiHelpCircle } = FiIcons;

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showFAQ, setShowFAQ] = useState(null);

  const publicPlans = [
    {
      name: 'Personal Growth',
      icon: FiUsers,
      color: 'from-blue-500 to-cyan-500',
      description: 'Start your journey of self-discovery with our essential twin package',
      price: {
        monthly: 39,
        annually: 29
      },
      features: [
        'Personal Digital Twin with basic emotional modeling',
        'Daily mood tracking and analysis',
        'Weekly emotional insights report',
        'Personal growth recommendations',
        'Journal integration with sentiment analysis',
        'Mobile app access',
        '8-hour response support'
      ],
      popular: false,
      cta: 'Start Your Journey'
    },
    {
      name: 'Growth Plus',
      icon: FiStar,
      color: 'from-purple-500 to-indigo-500',
      description: 'Enhanced features for deeper self-understanding and accelerated growth',
      price: {
        monthly: 79,
        annually: 59
      },
      features: [
        'Everything in Personal Growth',
        'Advanced emotional pattern recognition',
        'Future self interaction (1 session monthly)',
        'Relationship dynamics modeling',
        'Personalized growth exercises',
        'Voice analysis integration',
        'Integration with 3 wellness apps',
        '24/7 priority support'
      ],
      popular: true,
      cta: 'Accelerate Growth'
    },
    {
      name: 'Transformation',
      icon: FiZap,
      color: 'from-pink-500 to-rose-500',
      description: 'Our most comprehensive package for profound personal transformation',
      price: {
        monthly: 129,
        annually: 99
      },
      features: [
        'Everything in Growth Plus',
        'Unlimited future self sessions',
        'Multi-perspective communication',
        'Custom growth pathways',
        'Therapist connection features',
        'Family dynamics modeling',
        'Unlimited wellness app integrations',
        'Dedicated success coach'
      ],
      popular: false,
      cta: 'Transform Your Life'
    }
  ];

  const enterprisePlans = [
    {
      name: 'Clinical Practice',
      icon: FiActivity,
      color: 'from-blue-500 to-cyan-500',
      description: 'Transform your practice with AI-powered insights and therapeutic forecasting',
      price: {
        monthly: 299,
        annually: 249,
        perUser: true
      },
      features: [
        'Up to 50 patient Digital Twins',
        'Therapeutic forecasting engine',
        'Treatment pathway optimization',
        'Patient emotional volatility alerts',
        'Session planning assistant',
        'EHR integration capabilities',
        'HIPAA-compliant security',
        'Dedicated clinical success manager'
      ],
      popular: false,
      cta: 'Elevate Your Practice'
    },
    {
      name: 'Educational Institution',
      icon: FiBook,
      color: 'from-green-500 to-emerald-500',
      description: 'Revolutionize mental health education with realistic, risk-free training environments',
      price: {
        monthly: 'Custom',
        annually: 'Custom',
        custom: true
      },
      features: [
        'Unlimited educational Digital Twins',
        'Virtual practicum environment',
        'Diverse case library (100+ scenarios)',
        'Student performance analytics',
        'Curriculum integration tools',
        'Multi-user collaboration features',
        'Research capabilities',
        'Training and implementation support'
      ],
      popular: false,
      cta: 'Transform Education'
    },
    {
      name: 'Enterprise Solutions',
      icon: FiGlobe,
      color: 'from-orange-500 to-amber-500',
      description: 'Custom solutions for healthcare systems, research institutions, and global organizations',
      price: {
        monthly: 'Custom',
        annually: 'Custom',
        custom: true
      },
      features: [
        'Custom implementation and integration',
        'White-label options available',
        'Advanced analytics and reporting',
        'Custom AI model training',
        'Dedicated API access',
        'Enterprise-grade security',
        'Service level agreements',
        'Strategic partnership opportunities'
      ],
      popular: false,
      cta: 'Request Consultation'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Digital Twin technology?',
      answer: 'Our Digital Twin technology achieves a 97.5% accuracy rate in emotional state modeling, based on comprehensive validation studies. The accuracy increases over time as the system learns from your interactions, reaching up to 99.7% for long-term users.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We employ end-to-end encryption, HIPAA-compliant infrastructure, and strict data governance policies. Your personal data never leaves your secure environment, and we maintain the highest standards of privacy protection in the industry.'
    },
    {
      question: 'Can I upgrade or downgrade my plan later?',
      answer: 'Yes, you can change your plan at any time. When upgrading, you will immediately gain access to new features, and your billing will be prorated. When downgrading, changes will take effect at the start of your next billing cycle.'
    },
    {
      question: 'Do you offer discounts for non-profits or research institutions?',
      answer: 'Yes, we offer special pricing for non-profit organizations, research institutions, and educational facilities. Please contact our sales team for more information about our impact partnership programs.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include access to our support resources, including documentation, tutorials, and community forums. Premium plans include priority email and chat support, while enterprise plans come with dedicated success managers and 24/7 phone support.'
    },
    {
      question: 'Can I try before I purchase?',
      answer: 'We offer a 14-day free trial for our Personal Growth and Growth Plus plans. For enterprise solutions, we provide comprehensive demonstrations and pilot programs. Contact our sales team to schedule a personalized demo.'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to support your journey with the Omni Digital Twin™. 
            From personal growth to enterprise solutions, we have options for every need.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1 rounded-full flex items-center">
            <button 
              className={`px-6 py-2 rounded-full transition-all ${billingPeriod === 'monthly' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all ${billingPeriod === 'annually' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingPeriod('annually')}
            >
              Annually <span className="text-xs ml-1 text-green-400">Save 25%</span>
            </button>
          </div>
        </div>

        {/* Public Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Personal & Public Use
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {publicPlans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                className={`perspective-card p-8 h-full relative ${plan.popular ? 'border-blue-500/50 shadow-xl shadow-blue-500/10' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
                    MOST POPULAR
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <SafeIcon icon={plan.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-400 mb-6 h-12">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price[billingPeriod]}</span>
                  <span className="text-gray-400 ml-2">/ month</span>
                  {billingPeriod === 'annually' && (
                    <div className="text-green-400 text-sm mt-1">Billed annually (${plan.price[billingPeriod] * 12})</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start">
                      <SafeIcon icon={FiCheck} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-full text-white font-semibold ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'glass-card hover:bg-white/10'} transition-all duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:hello@omnisolus.com?subject=Pricing Inquiry - ' + plan.name, '_blank')}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enterprise Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Professional & Enterprise Solutions
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {enterprisePlans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                className="perspective-card p-8 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <SafeIcon icon={plan.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-400 mb-6 h-12">
                  {plan.description}
                </p>
                <div className="mb-6">
                  {plan.custom ? (
                    <span className="text-3xl font-bold gradient-text">Custom Pricing</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">${plan.price[billingPeriod]}</span>
                      <span className="text-gray-400 ml-2">/ {plan.perUser ? 'user' : 'month'}</span>
                      {billingPeriod === 'annually' && !plan.custom && (
                        <div className="text-green-400 text-sm mt-1">Billed annually</div>
                      )}
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start">
                      <SafeIcon icon={FiCheck} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full glass-card py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:hello@omnisolus.com?subject=Enterprise Inquiry - ' + plan.name, '_blank')}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <motion.div
          className="glass-card p-8 md:p-12 text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our enterprise team will work with you to create a tailored solution that meets your organization's specific needs.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:enterprise@omnisolus.com?subject=Custom Enterprise Solution', '_blank')}
          >
            Contact Enterprise Sales
          </motion.button>
        </motion.div>

        {/* FAQs */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left glass-card p-6 flex justify-between items-center"
                  onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  <SafeIcon 
                    icon={FiHelpCircle} 
                    className={`text-lg transition-transform ${showFAQ === index ? 'text-blue-400 transform rotate-180' : 'text-gray-400'}`} 
                  />
                </button>
                {showFAQ === index && (
                  <motion.div 
                    className="glass-card mt-1 p-6 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            Still Have Questions?
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our team is here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:sales@omnisolus.com?subject=Pricing Question', '_blank')}
            >
              Contact Sales
            </motion.button>
            <motion.button
              className="glass-card px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById('contact');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;