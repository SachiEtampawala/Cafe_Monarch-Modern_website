import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Visit.css'

const cafeAddress =
  'No 123, Galle Road, Bambalapitiya, Colombo 06, Sri Lanka'
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapEmbedUrl = apiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    cafeAddress
  )}`
  : null

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  cafeAddress
)}`

function Visit() {
  return (
    <div className="visit-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <header className="visit-hero">
          <span className="visit-eyebrow">
            YOUR TABLE IS WAITING
          </span>

          <h1>
            Come find
            <br />
            <em>your moment...</em>
          </h1>

          <p>
            Good coffee tastes even better when you take the time
            to enjoy it. Find your way to MONARCH and make room
            for a little moment of calm.
          </p>

          <a href="#visit-details" className="visit-button">
            PLAN YOUR VISIT <span aria-hidden="true">↗</span>
          </a>
        </header>

        {/* Cafe Image */}
        <section
          className="visit-image"
          aria-label="MONARCH café atmosphere"
        >
          <img
            src="/images/visit-cafe.jpg"
            alt="Inside the MONARCH café"
            loading="lazy"
          />
        </section>

        {/* Location, Opening Hours and Contact */}
        <section
          className="visit-details"
          id="visit-details"
          aria-label="Café visit information"
        >
          <div className="visit-detail">
            <span className="visit-label">FIND US</span>

            <h2>Our Location</h2>

            <p>
              No 123, Galle Road, Bambalapitiya, Colombo 06.
            </p>

            <p>Sri Lanka</p>

            <a
              href={directionsUrl}
              className="visit-contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
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
              Take a break, enjoy your coffee, and stay awhile.
            </p>
          </div>

          <div className="visit-detail">
            <span className="visit-label">SAY HELLO</span>

            <h2>Get in Touch</h2>

            <Link
              to="/contact"
              className="visit-contact-link"
            >
              Contact our team ↗
            </Link>

            <p>
              Have a question or planning a visit? We look
              forward to welcoming you.
            </p>
          </div>
        </section>

        {/* Google Maps Section */}
        <section
          className="visit-map-section"
          aria-labelledby="visit-map-title"
        >
          <div className="visit-map-heading">
            <span className="visit-label">
              FIND YOUR WAY TO US
            </span>

            <h2 id="visit-map-title">
              A little closer to <em>your next coffee.</em>
            </h2>

            <p>
              Find MONARCH on the map and plan your next visit.
            </p>
          </div>

          <div className="visit-map-container">
            {mapEmbedUrl ? (
              <iframe
                className="visit-map"
                src={mapEmbedUrl}
                title="MONARCH café location on Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="visit-map-fallback">
                <span className="visit-map-icon" aria-hidden="true">
                  📍
                </span>

                <h3>Find your way to MONARCH</h3>

                <p>
                  Open Google Maps to view the café location
                  and plan your route.
                </p>

                <a
                  href={directionsUrl}
                  className="visit-map-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN GOOGLE MAPS ↗
                </a>
              </div>
            )}
          </div>

          <div className="visit-map-footer">
            <p>
              <span aria-hidden="true">📍</span>
              Bambalapitiya, Colombo 06, Sri Lanka
            </p>

            <a
              href={directionsUrl}
              className="visit-map-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET DIRECTIONS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Ending Section */}
        <section className="visit-ending">
          <h2>
            Your next favourite moment starts here...
          </h2>

          <p>
            Good coffee, warm moments, and a little time for yourself.
          </p>

          <Link to="/menu">
            EXPLORE OUR MENU ↗
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Visit