import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      
      <a href="/" className="navbar-logo">
        MONARCH
      </a>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/story">Story</a>
        <a href="/visit">Visit</a>
      </div>

      <button className="navbar-menu-button">
        Menu
      </button>

    </nav>
  )
}

export default Navbar