import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's work together to bring your ideas to life.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>gmtayoyoub15@gmail.com</p>
              <a href="mailto:gmtayoyoub15@gmail.com" className="info-link">Send Email →</a>
            </div>

            <div className="info-box">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+212 6XX XXX XXX</p>
              <a href="tel:+212" className="info-link">Call Now →</a>
            </div>

            <div className="info-box">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Morocco</p>
              <a href="#" className="info-link">View Map →</a>
            </div>

            <div className="info-box">
              <div className="info-icon">🔗</div>
              <h3>Social</h3>
              <p>Connect with me</p>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">LI</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">TW</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
