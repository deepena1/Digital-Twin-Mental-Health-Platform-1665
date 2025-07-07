import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiMaximize2, FiPlay, FiPause, FiVolume2, FiVolumeX } = FiIcons;

const DemoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl glass-card p-6 z-10"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold gradient-text">Omni Digital Twin™ Demo</h2>
                <p className="text-gray-400">Experience the future of mental health technology</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[70vh]"
                poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=675&fit=crop&crop=center"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                muted={isMuted}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div 
                  className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer"
                  onClick={handleSeek}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-150"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlay}
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                    >
                      <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="text-lg" />
                    </button>
                    <button
                      onClick={toggleMute}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="text-lg" />
                    </button>
                    <div className="text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Omni Digital Twin™ - Interactive Demo</span>
                    <button
                      onClick={handleFullscreen}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <SafeIcon icon={FiMaximize2} className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">What You'll See:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Real-time emotional analysis and twin generation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Predictive therapy simulation in action</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Multiple perspective interactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Clinical dashboard and insights</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Demo Highlights:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>5-minute comprehensive overview</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Live user interaction examples</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Future self conversation demo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Clinical integration walkthrough</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@omnisolus.com?subject=Request Early Access - Omni Digital Twin', '_blank')}
              >
                Request Early Access
              </motion.button>
              <motion.button
                className="glass-card px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const section = document.getElementById('features');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                Explore Features
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;