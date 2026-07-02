const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const seed = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected. Clearing existing projects...');
    await Project.deleteMany({});
    
    console.log('Seeding projects...');
    await Project.create({
      title: 'Gourmet Restaurant Web',
      description: 'A luxurious e-commerce and booking platform for a high-end restaurant. Features a beautiful dark-mode glassmorphism UI, a dynamic menu, and table reservation capabilities.',
      technologies: ['React', 'CSS', 'HTML', 'JavaScript'],
      githubUrl: 'https://github.com/ThyrexGG/restaurant',
      liveUrl: 'https://restaurant-three-chi-91.vercel.app/',
      imageUrl: '/images/restaurant_app_ui.png'
    });

    await Project.create({
      title: 'My personal portfolio',
      description: 'My personal web developer portfolio! Built with React and Three.js, it features 3D interactive elements, parallax hover effects, and live GitHub API integration.',
      technologies: ['React', 'Vite', 'Three.js', 'Express.js'],
      githubUrl: 'https://github.com/ThyrexGG/Portfolio',
      imageUrl: '/images/portfolio_app_ui.png'
    });

    await Project.create({
      title: 'Student Rental App (Internship)',
      description: 'A comprehensive platform built during my internship to help students find affordable, safe rental housing near their university. Features include map integration and property listings.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      githubUrl: 'https://github.com/ThyrexGG/rental-app',
      liveUrl: 'https://internship-project-two-blush.vercel.app/login',
      imageUrl: '/images/rental_app_ui.png'
    });

    await Project.create({
      title: 'OCR for impaired user',
      description: 'An OCR application built to assist visually impaired users with highly accessible UI, high contrast themes, and text-to-speech integration.',
      technologies: ['Vue', 'JavaScript', 'HTML/CSS'],
      githubUrl: 'https://github.com/ThyrexGG/OCR-for-impaired-user',
      liveUrl: 'https://ocr-for-impaired-user.vercel.app',
      imageUrl: '/images/ocr_app_ui.png'
    });

    console.log('Seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
