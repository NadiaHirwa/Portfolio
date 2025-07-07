import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-invite">Let's connect! I'm open to new opportunities, collaborations, and conversations.</p>
      <div className="contact-list">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:irahirnad22@gmail.com" className="contact-link">irahirnad22@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>GitHub:</span>
          <a href="https://github.com/NadiaHirwa" className="contact-link" target="_blank" rel="noopener noreferrer">github.com/NadiaHirwa</a>
        </div>
      </div>
    </section>
  );
}

export default Contact; 