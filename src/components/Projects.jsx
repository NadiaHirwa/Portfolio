import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        <div className="project-card">
          <h2>Smart Pig Farming Platform</h2>
          <p>IoT-based pig health tracker. Built dashboards for farmers.</p>
          <div className="project-tools">Tools: PHP, JavaScript, Mongo DB</div>
          <a href="https://github.com/NadiaHirwa/Pig-Health.git" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h2>Club Management App</h2>
          <p>Admin/member system, events, tasks, contributions.</p>
          <div className="project-tools">Tools: Flutter, SQLite, Firebase, REST API</div>
          <a href="https://github.com/NadiaHirwa/Club-Management.git" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h2>YouTube Insights Dashboard</h2>
          <p>Sentiment analysis & engagement tracking.</p>
          <div className="project-tools">Tools: Python, Plotly, Power BI, Web scraping</div>
          <a href="https://github.com/NadiaHirwa/YouTube-Channel-Insights.git" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h2>Library Management System</h2>
          <p>Full-stack app for managing library resources.</p>
          <div className="project-tools">Tools: Node.js, Express.js, SQLite</div>
          <a href="https://github.com/NadiaHirwa/plp-web-development-final-project.git" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects; 