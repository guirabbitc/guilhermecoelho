import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Startups from './components/Startups';
import Extracurriculars from './components/Extracurriculars';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      <Startups />
      <Extracurriculars />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;