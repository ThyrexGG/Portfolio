import React, { useEffect, useState } from 'react';
import './SidebarNav.css';

const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sidebar-nav">
      <div className="nav-line"></div>
      {sections.map((id) => (
        <a 
          key={id} 
          href={`#${id}`} 
          className={`nav-dot ${activeSection === id ? 'active' : ''}`}
          aria-label={`Navigate to ${id}`}
        >
        </a>
      ))}
    </div>
  );
};

export default SidebarNav;
