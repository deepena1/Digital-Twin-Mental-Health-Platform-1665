import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub, FiZap } = FiIcons;

const Footer = () => {
  const quickLinks = [
    { name: 'Overview', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Features', action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Applications', action: () => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Pricing', action: () => window.open('mailto:hello@omnisolus.com?subject=Pricing Information Request', '_blank') },
    { name: 'Documentation', action: () => window.open('mailto:hello@omnisolus.com?subject=Documentation Request', '_blank') }
  ];

  const socialLinks = [
    { icon: FiLinkedin, url: 'https://linkedin.com/company/omnisolus', name: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com/omnisolus', name: 'Twitter' },
    { icon: FiGithub, url: 'https://github.com/omnisolus', name: 'GitHub' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', action: () => window.open('mailto:hello@omnisolus.com?subject=Privacy Policy Request', '_blank') },
    { name: 'Terms of Service', action: () => window.open('mailto:hello@omnisolus.com?subject=Terms of Service Request', '_blank') },
    { name: 'Cookie Policy', action: () => window.open('mailto:hello@omnisolus.com?subject=Cookie Policy Request', '_blank') }
  ];

  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiZap} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Omni Digital Twin™</h3>
                <p className="text-gray-400">One Self. Infinite Perspectives.</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Transforming mental health through AI-powered emotional replicas that evolve 
              with each user, providing unprecedented insights into the human psyche.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <SafeIcon icon={social.icon} className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button 
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <motion.button
                onClick={() => window.open('mailto:hello@omnisolus.com', '_blank')}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <SafeIcon icon={FiMail} className="text-sm" />
                <span className="text-sm">hello@omnisolus.com</span>
              </motion.button>
              <motion.button
                onClick={() => window.open('tel:+15551234567', '_blank')}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <SafeIcon icon={FiPhone} className="text-sm" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.button>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMapPin} className="text-sm" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Omni Solus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <motion.button 
                key={link.name} 
                onClick={link.action}
                className="text-gray-400 hover:text-white text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;