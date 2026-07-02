import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import GithubPacmanStats from './GithubPacmanStats';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section container">
      <div className="section-header text-center" data-aos="fade-up">
        <h2>About <span className="text-gradient">Me</span></h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-text glass" data-aos="fade-right">
          <h3>My Journey</h3>
          <p>
            I'm a dedicated Computer Science student with a deep passion for full-stack web development. 
            My journey began with curiosity about how the web works, which quickly evolved into a drive to build scalable, 
            efficient, and user-centric applications.
          </p>
          <p>
            I believe in writing clean code, continuously learning new technologies, and collaborating 
            to solve complex problems. When I'm not coding, I'm exploring new design trends or contributing to open-source projects.
          </p>
        </div>

        <div className="timeline" data-aos="fade-left">
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <h4>Computer Science Student</h4>
              <span className="timeline-date">2023 - Present</span>
              <p>Focusing on computer science fundamentals, backend, and full-stack development.</p>
            </div>
          </div>
          
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <BookOpen size={24} />
            </div>
            <div className="timeline-content">
              <h4>Web Development Bootcamp</h4>
              <span className="timeline-date">Summer 2024</span>
              <p>Completed intensive training in the MERN stack and modern UI/UX design.</p>
            </div>
          </div>
          
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <BookOpen size={24} />
            </div>
            <div className="timeline-content">
              <h4>Aspiring Full-Stack Developer</h4>
              <span className="timeline-date">Present</span>
              <p>Actively learning and building personal projects to master modern web technologies.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* GitHub Pacman Stats */}
      <GithubPacmanStats />
    </section>
  );
};

export default About;
