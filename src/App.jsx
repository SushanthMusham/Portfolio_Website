import React from 'react';
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar'; // <--- Import the new Navbar
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white"> 
      
      {/* GLOBAL NAVBAR (The Dynamic Island) */}
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TechStack />
          </>
        } />
        
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;