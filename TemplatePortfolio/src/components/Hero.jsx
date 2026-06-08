import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Gmati Ayoub</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer crafting beautiful & responsive web experiences
            </p>
            <p className="hero-description">
              I specialize in React, JavaScript, and modern web technologies. 
              Let's build something amazing together.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-placeholder">
              <div className="avatar-content">
                <span>YOUR PHOTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
