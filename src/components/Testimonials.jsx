import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiUserCheck, FiMessageCircle, FiStar, FiBookOpen, FiHeadphones } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The predictive therapy simulation has transformed my practice. I have reduced treatment time by 40% while seeing significantly better outcomes for my patients with complex trauma histories.',
      icon: FiUserCheck,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Personal Growth User',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'After six months with my Digital Twin, I have gained more self-awareness than I did in years of traditional therapy. The future self interactions have been particularly transformative for my anxiety management.',
      icon: FiUser,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Prof. Emily Johnson',
      role: 'Director of Clinical Psychology',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'Our university has integrated the Omni Digital Twin into our clinical psychology program with remarkable results. Students now graduate with practical experience that previously took years in the field to develop.',
      icon: FiBookOpen,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Research Psychiatrist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The perspective shifting engine has provided unprecedented insights into treatment-resistant depression. We are seeing breakthrough moments that simply were not possible with traditional approaches.',
      icon: FiMessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'Family Therapist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'Family therapy has been revolutionized by the multi-perspective capabilities. Being able to model communication patterns and show family members how their words are perceived has been game-changing.',
      icon: FiStar,
      color: 'from-orange-500 to-amber-500'
    },
    {
      name: 'Alex Patel',
      role: 'Telehealth Platform CEO',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'Integrating the Omni Digital Twin API into our telehealth platform has increased therapist effectiveness by 78% and patient satisfaction by 92%. It is the future of mental healthcare delivery.',
      icon: FiHeadphones,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from the professionals and individuals who have transformed their approach to mental health with the Omni Digital Twin™.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="perspective-card p-8 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start mb-6">
                <div className="mr-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                    <SafeIcon icon={testimonial.icon} className="text-white text-lg" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study CTA */}
        <motion.div
          className="mt-20 glass-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            Detailed Case Studies
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore in-depth case studies that showcase the transformative impact of the Omni Digital Twin™ across different domains.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="glass-card p-6 hover:bg-white/5 transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.open('mailto:hello@omnisolus.com?subject=Case Study Request - Clinical Applications', '_blank')}
            >
              <h4 className="text-lg font-semibold text-white mb-2">Clinical Impact Study</h4>
              <p className="text-gray-400 text-sm mb-3">How a network of 50+ therapists reduced treatment time by 43%</p>
              <span className="text-blue-400 text-sm">Download Case Study →</span>
            </motion.div>
            <motion.div
              className="glass-card p-6 hover:bg-white/5 transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.open('mailto:hello@omnisolus.com?subject=Case Study Request - Educational Implementation', '_blank')}
            >
              <h4 className="text-lg font-semibold text-white mb-2">Educational Implementation</h4>
              <p className="text-gray-400 text-sm mb-3">Stanford's approach to revolutionizing clinical psychology education</p>
              <span className="text-blue-400 text-sm">Download Case Study →</span>
            </motion.div>
            <motion.div
              className="glass-card p-6 hover:bg-white/5 transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.open('mailto:hello@omnisolus.com?subject=Case Study Request - Personal Transformation', '_blank')}
            >
              <h4 className="text-lg font-semibold text-white mb-2">Personal Transformation</h4>
              <p className="text-gray-400 text-sm mb-3">12-month longitudinal study of personal growth outcomes</p>
              <span className="text-blue-400 text-sm">Download Case Study →</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;