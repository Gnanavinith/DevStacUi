import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;