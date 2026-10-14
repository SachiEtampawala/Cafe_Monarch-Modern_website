import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Visit.css'

function Visit() {
  return (
    <div className="visit-page">
      <Navbar />

      <main>
        <header className="visit-hero">
          <span className="visit-eyebrow">YOUR TABLE IS WAITING 🤎</span>

          <h1>
            Come find
            <br />
            <em>your moment...</em>
          </h1>

          <p>
            Good coffee tastes even better when you take the time to enjoy it.
          </p>

          <a href="#visit-details" className="visit-button">
            PLAN YOUR VISIT <span>↗</span>
          </a>
        </header>

        <section className="visit-image">
          <img
            src="/images/visit-cafe.jpg"
            alt="Inside the MONARCH café"
          />
        </section>

        <section className="visit-details" id="visit-details">
          <div className="visit-detail">
            <span className="visit-label">FIND US</span>
            <h2>Our Location</h2>
            <p>Colombo</p>
            <p>Sri Lanka</p>
          </div>

          <div className="visit-detail">
            <span className="visit-label">WHEN TO VISIT</span>
            <h2>Opening Hours</h2>

            <div className="visit-hours-row">
              <span>Monday – Friday</span>
              <span>8:00 AM – 8:00 PM</span>
            </div>

            <div className="visit-hours-row">
              <span>Saturday – Sunday</span>
              <span>9:00 AM – 9:00 PM</span>
            </div>

            <p className="visit-note">
              Sample opening hours — to be confirmed.
            </p>
          </div>

          <div className="visit-detail">
            <span className="visit-label">SAY HELLO</span>
            <h2>Get in Touch</h2>

            <a href="/contact" className="visit-contact-link">
              Contact our team ↗
            </a>

            <p>We look forward to welcoming you with pleasure.</p>
          </div>
        </section>

        <section className="visit-ending">
          <h2>Your next favourite moment starts here...</h2>
          <a href="/menu">EXPLORE OUR MENU ↗</a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Visit