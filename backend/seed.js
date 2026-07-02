const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const seed = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected. Clearing existing projects...');
    await Project.deleteMany({});
    
    console.log('Seeding GitHub projects...');
    await Project.create({
      title: 'OCR for impaired user',
      description: 'An OCR application built to assist visually impaired users.',
      technologies: ['Vue', 'JavaScript', 'HTML/CSS'],
      githubUrl: 'https://github.com/ThyrexGG/OCR-for-impaired-user',
      liveUrl: 'https://ocr-for-impaired-user.vercel.app'
    });

    await Project.create({
      title: 'Ecommerce Store',
      description: 'An e-commerce frontend project with modern styling.',
      technologies: ['CSS', 'HTML', 'JavaScript'],
      githubUrl: 'https://github.com/ThyrexGG/ecommerce'
    });

    await Project.create({
      title: 'Final Project',
      description: 'Course final project implementation.',
      technologies: ['Vue', 'JavaScript'],
      githubUrl: 'https://github.com/ThyrexGG/Final-Project'
    });

    console.log('Seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
