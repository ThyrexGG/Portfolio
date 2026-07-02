import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Edit, Trash2, Plus } from 'lucide-react';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    liveUrl: '',
    githubUrl: ''
  });
  const [editingId, setEditingId] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/api/projects/${editingId}`, projectData);
      } else {
        await axios.post(`${API_URL}/api/projects`, projectData);
      }
      setFormData({ title: '', description: '', technologies: '', imageUrl: '', liveUrl: '', githubUrl: '' });
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      ...project,
      technologies: project.technologies.join(', ')
    });
    setEditingId(project._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`${API_URL}/api/projects/${id}`);
        fetchProjects();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="admin-container container">
      <div className="admin-header">
        <Link to="/" className="btn btn-outline back-btn">
          <ArrowLeft size={18} /> Back to Site
        </Link>
        <h1>Admin Dashboard</h1>
      </div>

      <div className="admin-content">
        <div className="admin-form-section glass">
          <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Title *</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Description *</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="4"></textarea>
            </div>
            
            <div className="form-group">
              <label>Technologies (comma separated) *</label>
              <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} required placeholder="React, Node, MongoDB" />
            </div>
            
            <div className="form-group">
              <label>Image URL</label>
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://..." />
            </div>
            
            <div className="form-group">
              <label>Live URL</label>
              <input type="text" name="liveUrl" value={formData.liveUrl} onChange={handleChange} placeholder="https://..." />
            </div>
            
            <div className="form-group">
              <label>GitHub URL</label>
              <input type="text" name="githubUrl" value={formData.githubUrl} onChange={handleChange} placeholder="https://github.com/..." />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Project' : <><Plus size={18} /> Add Project</>}
              </button>
              {editingId && (
                <button type="button" className="btn btn-outline" onClick={() => { setEditingId(null); setFormData({ title: '', description: '', technologies: '', imageUrl: '', liveUrl: '', githubUrl: '' }); }}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="admin-list-section glass">
          <h2>Manage Projects</h2>
          <div className="project-list-admin">
            {projects.length === 0 ? (
              <p>No projects yet.</p>
            ) : (
              projects.map(project => (
                <div key={project._id} className="admin-project-item">
                  <div className="admin-project-info">
                    <h4>{project.title}</h4>
                    <p>{project.technologies.join(', ')}</p>
                  </div>
                  <div className="admin-project-actions">
                    <button onClick={() => handleEdit(project)} className="action-btn edit"><Edit size={18} /></button>
                    <button onClick={() => handleDelete(project._id)} className="action-btn delete"><Trash2 size={18} /></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
