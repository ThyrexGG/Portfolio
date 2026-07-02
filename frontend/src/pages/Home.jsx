import React from 'react';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <SidebarNav />
      <Hero />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
    </>
  );
};

export default Home;
