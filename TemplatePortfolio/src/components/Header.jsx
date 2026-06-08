import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <h1 className="logo">Portfolio</h1>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
