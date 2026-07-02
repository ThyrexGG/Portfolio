import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import DigitalEarth from './DigitalEarth';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      
      <div className="container hero-content animate-fade-in">
        <div className="hero-grid">
          <div className="hero-text">
          <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Tes Bonnathyrak</h1>
          <h2 className="title">
            I build <span className="text-gradient">
              <TypeAnimation
                sequence={[
                  'digital experiences', 1000,
                  'scalable backends', 1000,
                  'modern web apps', 1000,
                  'interactive UIs', 1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="description">
            Software Engineering Student @ CAMTECH | Full-Stack Developer | Passionate about building modern, scalable applications from frontend to backend.
            When I'm not coding, I'm probably gaming or playing sports!
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn btn-outline" download>
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/ThyrexGG" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:tesbonnathyrak@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
          </div>
          
          <div className="hero-visual">
            <DigitalEarth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
