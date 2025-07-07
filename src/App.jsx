import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Applications from './components/Applications';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Applications />
                <Testimonials />
                <ComparisonTable />
                <Pricing />
              </>
            } />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;