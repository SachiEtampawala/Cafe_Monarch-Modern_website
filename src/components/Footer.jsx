import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="monarch-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt=""
              className="footer-logo-image"
              width="46"
              height="46"
              onError={(event) => {
                // Hide the image if logo.png is missing
                event.currentTarget.style.display = 'none'
              }}
            />
            MONARCH<span>.</span>
          </Link>

          <p className="footer-tagline">
            Coffee for the moments that matter.
          </p>

          <p className="footer-description">
            Exceptional coffee, thoughtful craftsmanship,
            and little moments worth remembering.
          </p>

          <Link to="/menu" className="footer-cta">
            DISCOVER OUR COFFEE ↗
          </Link>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/visit">Visit Us</Link>
        </div>

        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <a href="mailto:hello@cafemonarch.com">
            hello.cafemonarch@gmail.com
          </a>
          <a href="tel:+94112345678">+94 11 234 5678</a>
          <p>Sri Lanka</p>
        </div>

        <div className="footer-column">
          <h3>COME SAY HELLO</h3>
          <p>Monday – Friday</p>
          <p>8:00 AM – 8:00 PM</p>
          <br />
          <p>Saturday – Sunday</p>
          <p>9:00 AM – 9:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MONARCH. All rights reserved.</p>

        <p className="footer-bottom-center">
          MADE WITH CARE. SERVED WITH LOVE.
        </p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            FB
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            TK
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer