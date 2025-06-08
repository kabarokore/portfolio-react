import React, { useState } from 'react';
import contact from '../data/contact.json';
import '../css/Contact.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
         import.meta.env.VITE_SERVICE_ID ,
         import.meta.env.VITE_TEMPLATE_ID , 
        formData,
        import.meta.env.VITE_USER_ID
      )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact" id="contact">
      <ToastContainer />
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="contact-info">
        <p>Email: {contact.email}</p>
        <p>Location: {contact.location}</p>
        <div className="socials">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
