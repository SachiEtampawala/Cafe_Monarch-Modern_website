import './Footer.css'

function Footer() {
  return (
    <footer className="monarch-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            MONARCH<span>.</span>
          </a>

          <p className="footer-tagline">
            Coffee for the moments that matter.
          </p>

          <p className="footer-description">
            Exceptional coffee, thoughtful craftsmanship,
            and little moments worth remembering.
          </p>

          <a href="/menu" className="footer-cta">
            DISCOVER OUR COFFEE ↗
          </a>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <a href="/">Home</a>
          <a href="/menu">Our Menu</a>
          <a href="/story">Our Story</a>
          <a href="/visit">Visit Us</a>
        </div>

        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <a href="mailto:hello@cafemonarch.com">
            hello@cafemonarch.com
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