import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Extras from './components/Extras';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="App">
      <nav>
        <button
          className="menu-icon"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
          <li><a href="#education" onClick={handleNavClick}>Education</a></li>
          <li><a href="#awards" onClick={handleNavClick}>Awards</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>
      <main>
        <section id="home"><Homepage /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="awards"><Awards /></section>
        <section id="contact"><Contact /></section>
        <Extras />
      </main>
    </div>
  );
}

export default App;
