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
            I'm a dedicated Software Engineering student at CAMTECH (currently in Year 2, Term II) with a deep passion for full-stack web development. 
            My journey began with a curiosity about how the web works, which quickly evolved into a drive to build scalable, 
            efficient, and user-centric applications from the front to the back.
          </p>
          <p>
            I believe in writing clean code, continuously learning new technologies, and tackling complex problems head-on. 
            When I'm not coding, you can usually find me gaming or playing sports to stay active and recharge!
          </p>
        </div>

        <div className="timeline" data-aos="fade-left">
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <h4>Software Engineering Student</h4>
              <span className="timeline-date">Year 2, Term II (CAMTECH)</span>
              <p>Focusing on core computer science fundamentals, data structures, and modern software architecture.</p>
            </div>
          </div>
          
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h4>Full-Stack Developer Intern</h4>
              <span className="timeline-date">2 Years In Progress</span>
              <p>Developing a comprehensive Student Rental App platform, handling both the frontend UI and backend architecture.</p>
            </div>
          </div>
          
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <BookOpen size={24} />
            </div>
            <div className="timeline-content">
              <h4>Aspiring Full-Stack Engineer</h4>
              <span className="timeline-date">Present</span>
              <p>Actively mastering modern web technologies like React, Node.js, Vue, and Cloud Databases.</p>
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
