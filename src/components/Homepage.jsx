import React from 'react';

function Homepage() {
  return (
    <section className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-name">Nadia Iradukunda Hirwa</h1>
        <h2 className="homepage-title">Software Engineer | IoT Enthusiast | Data Analyst</h2>
        <p className="homepage-intro">
          I am a passionate and driven Computer and Software Engineering student with hands-on experience in full-stack development, IoT systems, and data analysis. I thrive on building real-world tech solutions, collaborating in teams, and continuously learning new tools and technologies. My goal is to leverage technology to solve meaningful problems and make a positive impact.
        </p>
        <div className="homepage-buttons">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="/Nadia_Iradukunda_Hirwa_Resume.pdf" className="btn btn-secondary" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Homepage; 