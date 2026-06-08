import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with React and Node.js',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with multiple locations',
    tags: ['Vue.js', 'API', 'Charts'],
    link: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills',
    tags: ['React', 'CSS', 'JavaScript'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
