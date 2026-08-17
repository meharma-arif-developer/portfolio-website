import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedWork />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;