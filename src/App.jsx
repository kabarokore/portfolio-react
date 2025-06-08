import React from 'react';
import Hero from './components/Hero';
import About from './components/about';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
