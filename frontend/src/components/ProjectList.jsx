import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        // Try to fetch from the backend database first
        const response = await axios.get(`${API_URL}/api/projects`);
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        console.warn('Backend offline, using fallback data...');
        // Fallback data so your portfolio looks perfect even if the database connection fails!
        setProjects([
          {
            _id: '1',
            title: 'Gourmet Restaurant Web',
            description: 'A luxurious e-commerce and booking platform for a high-end restaurant. Features a beautiful dark-mode glassmorphism UI, a dynamic menu, and table reservation capabilities.',
            technologies: ['React', 'CSS', 'HTML', 'JavaScript'],
            githubUrl: 'https://github.com/ThyrexGG/restaurant',
            liveUrl: 'https://restaurant-three-chi-91.vercel.app/',
            imageUrl: '/images/restaurant_app_ui.png'
          },
          {
            _id: '2',
            title: 'My personal portfolio',
            description: 'My personal web developer portfolio! Built with React and Three.js, it features 3D interactive elements, parallax hover effects, and live GitHub API integration.',
            technologies: ['React', 'Vite', 'Three.js', 'Express.js'],
            githubUrl: 'https://github.com/ThyrexGG/Portfolio',
            imageUrl: '/images/portfolio_app_ui.png'
          },
          {
            _id: '3',
            title: 'Student Rental App (Internship)',
            description: 'A comprehensive platform built during my internship to help students find affordable, safe rental housing near their university. Features include map integration and property listings.',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            githubUrl: 'https://github.com/ThyrexGG/rental-app',
            liveUrl: 'https://internship-project-two-blush.vercel.app/login',
            imageUrl: '/images/rental_app_ui.png'
          },
          {
            _id: '4',
            title: 'OCR for impaired user',
            description: 'An OCR application built to assist visually impaired users with highly accessible UI, high contrast themes, and text-to-speech integration.',
            technologies: ['Vue', 'JavaScript', 'HTML/CSS'],
            githubUrl: 'https://github.com/ThyrexGG/OCR-for-impaired-user',
            liveUrl: 'https://ocr-for-impaired-user.vercel.app',
            imageUrl: '/images/ocr_app_ui.png'
          }
        ]);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section container">
      <div className="section-header text-center" data-aos="fade-up">
        <h2>My <span className="text-gradient">Projects</span></h2>
        <div className="underline"></div>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="error-container glass">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="empty-container glass">
          <p>No projects found. Add some from the Admin dashboard!</p>
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="projects-grid" data-aos="fade-up">
          {projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectList;
