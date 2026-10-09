import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">A NEW KIND OF COFFEE EXPERIENCE</p>

        <h1>
          Coffee for
          <br />
          the moments
          <br />
          <span>that matter.</span>
        </h1>

        <p className="hero-description">
          Discover exceptional coffee, thoughtful craftsmanship,
          and moments worth slowing down for.
        </p>

        <a href="/menu" className="hero-button">
          EXPLORE OUR MENU <span>↗</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>CRAFTED WITH PASSION</span>
        <span>EST. 2026</span>
        <span>SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  )
}

export default Hero