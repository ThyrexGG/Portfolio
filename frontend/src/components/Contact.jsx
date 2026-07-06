import React, { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these strings with your actual EmailJS IDs later!
    const serviceId = 'service_uzsu3bg';
    const templateId = 'template_siixorm';
    const publicKey = 'R4RB_-ucaVIF2S8Ao';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      });
  };

  return (
    <section id="contact" className="contact-section container">
      <div className="section-header text-center" data-aos="fade-up">
        <h2>Get In <span className="text-gradient">Touch</span></h2>
        <div className="underline"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info glass" data-aos="fade-right">
          <h3>Contact Information</h3>
          <p className="contact-desc">
            Feel free to reach out to me for any questions or opportunities!
          </p>

          <div className="info-item">
            <div className="info-icon"><Mail size={20} /></div>
            <div>
              <h4>Email</h4>
              <p>tesbonnathyrak@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={20} /></div>
            <div>
              <h4>Phone</h4>
              <p>+855 (095) 517-351</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><MapPin size={20} /></div>
            <div>
              <h4>Location</h4>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass" data-aos="fade-left">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === 'success' && (
              <p className="success-msg">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
