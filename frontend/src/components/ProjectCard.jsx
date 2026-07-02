import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="white"
      glarePosition="all"
      className="project-card-wrapper"
    >
      <div className="project-card glass">
        <div className="project-image-container">
          <img 
            src={project.imageUrl || 'https://via.placeholder.com/600x400?text=Project+Image'} 
            alt={project.title} 
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm icon-link-btn">
                  <FaGithub size={18} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm icon-link-btn">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-info">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
