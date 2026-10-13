import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  // Darken the header after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img
          src="/images/logo.jpg"
          alt=""
          className="navbar-logo-image"
          width="40"
          height="40"
          onError={(event) => {
            // Hide the image if logo.jpg is missing
            event.currentTarget.style.display = 'none'
          }}
        />
        <span className="navbar-logo-text">
          MONARCH<span>.</span>
        </span>
      </Link>

      <div
        id="navbar-links"
        className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}
      >
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
        className={`navbar-menu-button ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar