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
        // Fetch repositories directly from GitHub API
        const response = await axios.get('https://api.github.com/users/ThyrexGG/repos?sort=updated&per_page=6');
        
        // Map GitHub repo data to match our ProjectCard prop structure
        // Also filtering out any Java-related projects as requested
        const githubProjects = response.data
          .filter(repo => !repo.name.toLowerCase().includes('java'))
          .map(repo => ({
            _id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'A software development project hosted on GitHub.',
            technologies: repo.language ? [repo.language] : ['Code'],
            // Using a reliable placeholder image with tech vibe
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || ''
          }));
        
        setProjects(githubProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects from GitHub:', err);
        setError('Failed to load projects from GitHub. Please try again later.');
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
