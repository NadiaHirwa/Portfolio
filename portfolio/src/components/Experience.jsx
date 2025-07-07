import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">
        <div className="experience-item">
          <h2>IoT Intern – STES Group</h2>
          <span className="experience-dates">Jan 2023 – June 2023</span>
          <ul>
            <li>Contributed to Urwuri Tech (cow health monitoring)</li>
            <li>Website building</li>
            <li>Social media management</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Trainee – TekHer Program at kLab</h2>
          <span className="experience-dates">Jan 2024 – Apr 2024</span>
          <ul>
            <li>Data analysis</li>
            <li>Fullstack app development</li>
            <li>Dashboard building</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience; 