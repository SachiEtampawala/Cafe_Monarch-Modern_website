import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        MONARCH<span>.</span>
      </Link>

      <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/menu" onClick={closeMenu}>
          Menu
        </NavLink>

        <NavLink to="/story" onClick={closeMenu}>
          Our Story
        </NavLink>

        <NavLink to="/visit" onClick={closeMenu}>
          Visit Us
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>

      <button
        className="navbar-menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
      </button>
    </nav>
  )
}

export default Navbar