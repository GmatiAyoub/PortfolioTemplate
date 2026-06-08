import { useState } from 'react'
import './About.css'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Webpack', 'ESLint', 'npm'] }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. 
              I love solving complex problems and creating beautiful, responsive user interfaces.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a career focused on creating meaningful digital experiences. 
              I believe in clean code, continuous learning, and delivering high-quality solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skills-list">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-icon">💻</div>
            <div className="stat-info">
              <h4>Projects</h4>
              <p>20+ Completed</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h4>Clients</h4>
              <p>15+ Happy</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🎓</div>
            <div className="stat-info">
              <h4>Experience</h4>
              <p>5+ Years</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h4>Rating</h4>
              <p>4.9/5.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
