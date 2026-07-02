import React, { useEffect, useState } from 'react';
import { Star, GitCommit, Users, BookOpen } from 'lucide-react';
import axios from 'axios';
import './GithubPacmanStats.css';

const GithubPacmanStats = () => {
  const dots = Array.from({ length: 15 });
  const [stats, setStats] = useState({
    stars: 12,
    repos: 4,
    followers: 4,
  });

  useEffect(() => {
    // Fetch real data from GitHub
    axios.get('https://api.github.com/users/ThyrexGG')
      .then(res => {
        setStats(prev => ({ ...prev, repos: res.data.public_repos, followers: res.data.followers }));
      })
      .catch(() => {});
      
    axios.get('https://api.github.com/users/ThyrexGG/repos')
      .then(res => {
        const stars = res.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        setStats(prev => ({ ...prev, stars }));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="github-stats-container glass" data-aos="fade-up">
      <div className="stats-header">
        <h3>GitHub Commit Stats</h3>
      </div>
      
      <div className="stats-cards">
        {/* Custom Stats Card */}
        <div className="custom-stat-card">
          <h4>ThyrexGG's GitHub Stats</h4>
          <div className="stat-row">
            <div className="stat-label"><Star size={18} className="stat-icon" /> Total Stars</div>
            <div className="stat-value">{stats.stars}</div>
          </div>
          <div className="stat-row">
            <div className="stat-label"><GitCommit size={18} className="stat-icon" /> Total Commits</div>
            <div className="stat-value">342</div>
          </div>
          <div className="stat-row">
            <div className="stat-label"><BookOpen size={18} className="stat-icon" /> Total Repos</div>
            <div className="stat-value">{stats.repos}</div>
          </div>
          <div className="stat-row">
            <div className="stat-label"><Users size={18} className="stat-icon" /> Followers</div>
            <div className="stat-value">{stats.followers}</div>
          </div>
        </div>

        {/* Custom Languages Card */}
        <div className="custom-stat-card lang-card">
          <h4>Top Languages</h4>
          <div className="lang-bar-container">
            <div className="lang-bar" style={{ width: '60%', background: '#f1e05a' }}></div>
            <div className="lang-bar" style={{ width: '25%', background: '#3178c6' }}></div>
            <div className="lang-bar" style={{ width: '15%', background: '#e34c26' }}></div>
          </div>
          <div className="lang-legend">
            <div className="legend-item"><span className="legend-dot" style={{background: '#f1e05a'}}></span> JavaScript 60%</div>
            <div className="legend-item"><span className="legend-dot" style={{background: '#3178c6'}}></span> TypeScript 25%</div>
            <div className="legend-item"><span className="legend-dot" style={{background: '#e34c26'}}></span> HTML 15%</div>
          </div>
        </div>
      </div>

      <div className="pacman-path">
        <div className="pacman"></div>
        {dots.map((_, index) => {
          const delay = (index / 15) * 6;
          return (
            <div 
              key={index} 
              className="commit-dot"
              style={{
                animationDelay: `${delay}s`
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default GithubPacmanStats;
