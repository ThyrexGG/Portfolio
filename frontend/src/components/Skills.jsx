import React from 'react';
import './Skills.css';

const skillsData = [
  { category: "Frontend", items: ["HTML5", "CSS3 / CSS", "JavaScript (ES6+)", "React.js", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication"] },
  { category: "Database & Cloud", items: ["MongoDB", "Mongoose", "AWS EC2", "AWS S3"] },
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
          <div key={index} className="skill-card glass" data-aos="fade-up" data-aos-delay={index * 100}>
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
        ))}
      </div>
    </section>
  );
};

export default Skills;
