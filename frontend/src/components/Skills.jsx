import React from 'react';
import './Skills.css';

import Tilt from 'react-parallax-tilt';

const skillsData = [
  { category: "Frontend", items: ["HTML5", "CSS3 / CSS", "JavaScript (ES6+)", "React.js", "Vue.js", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication"] },
  { category: "Database & Cloud", items: ["MongoDB", "Mongoose", "Firebase", "AWS EC2", "AWS S3"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section container">
      <div className="section-header text-center" data-aos="fade-up">
        <h2>Technical <span className="text-gradient">Skills</span></h2>
        <div className="underline"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <Tilt 
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={400}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="white"
            glarePosition="all"
          >
            <div className="skill-card glass" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
