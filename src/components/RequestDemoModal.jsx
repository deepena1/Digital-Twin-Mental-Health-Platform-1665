import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare, FiSend } = FiIcons;

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    useCase: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
Demo Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Organization: ${formData.organization || 'Not provided'}
- Role: ${formData.role || 'Not provided'}

Use Case: ${formData.useCase || 'Not specified'}

Message:
${formData.message || 'No additional message'}

---
This demo request was submitted through the Omni Digital Twin™ website.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:omni@omnisolus.com?subject=Demo Request - ${formData.name} (${formData.organization || 'Individual'})&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending demo request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: '',
      useCase: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

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
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl glass-card p-8 z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text">Request Demo</h2>
                <p className="text-gray-400 mt-2">
                  Experience the future of mental health technology
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <SafeIcon icon={FiUser} className="inline mr-2 text-blue-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full glass-card p-3 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <SafeIcon icon={FiMail} className="inline mr-2 text-blue-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full glass-card p-3 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone and Organization Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <SafeIcon icon={FiPhone} className="inline mr-2 text-blue-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full glass-card p-3 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <SafeIcon icon={FiBriefcase} className="inline mr-2 text-blue-400" />
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full glass-card p-3 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Company or institution"
                    />
                  </div>
                </div>

                {/* Role and Use Case Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full glass-card p-3 rounded-lg text-white border border-white/20 focus:border-blue-400 focus:outline-none transition-colors bg-transparent"
                    >
                      <option value="" className="bg-gray-800">Select your role</option>
                      <option value="Clinical Psychologist" className="bg-gray-800">Clinical Psychologist</option>
                      <option value="Therapist" className="bg-gray-800">Therapist</option>
                      <option value="Psychiatrist" className="bg-gray-800">Psychiatrist</option>
                      <option value="Mental Health Counselor" className="bg-gray-800">Mental Health Counselor</option>
                      <option value="Educator" className="bg-gray-800">Educator</option>
                      <option value="Researcher" className="bg-gray-800">Researcher</option>
                      <option value="Healthcare Administrator" className="bg-gray-800">Healthcare Administrator</option>
                      <option value="Technology Leader" className="bg-gray-800">Technology Leader</option>
                      <option value="Individual User" className="bg-gray-800">Individual User</option>
                      <option value="Other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Primary Use Case
                    </label>
                    <select
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full glass-card p-3 rounded-lg text-white border border-white/20 focus:border-blue-400 focus:outline-none transition-colors bg-transparent"
                    >
                      <option value="" className="bg-gray-800">Select use case</option>
                      <option value="Clinical Practice" className="bg-gray-800">Clinical Practice</option>
                      <option value="Educational Institution" className="bg-gray-800">Educational Institution</option>
                      <option value="Personal Growth" className="bg-gray-800">Personal Growth</option>
                      <option value="Research" className="bg-gray-800">Research</option>
                      <option value="Healthcare System" className="bg-gray-800">Healthcare System</option>
                      <option value="Enterprise Solution" className="bg-gray-800">Enterprise Solution</option>
                      <option value="Other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiMessageSquare} className="inline mr-2 text-blue-400" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full glass-card p-3 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <SafeIcon icon={FiSend} className="text-lg" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Request Demo'}</span>
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiSend} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Demo Request Sent!
                </h3>
                <p className="text-gray-300 mb-8">
                  Thank you for your interest in the Omni Digital Twin™. Your demo request has been sent to our team, and we'll get back to you within 24 hours to schedule your personalized demonstration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                  >
                    Close
                  </motion.button>
                  <motion.button
                    className="glass-card px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      resetForm();
                      const section = document.getElementById('features');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore Features
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestDemoModal;