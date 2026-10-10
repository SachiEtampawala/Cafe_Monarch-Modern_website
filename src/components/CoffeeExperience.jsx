import './CoffeeExperience.css'

function CoffeeExperience() {
  return (
    <section className="coffee-experience">
      <div className="experience-background">
        <img
          src="/images/coffee-experience.jpg"
          alt="A warm, atmospheric coffee experience"
          loading="lazy"
        />
      </div>

      <div className="experience-overlay">
        <p className="experience-label">MORE THAN JUST COFFEE</p>

        <h2>
          Make room for
          <br />
          <span>the little moments.</span>
        </h2>

        <p className="experience-description">
          Slow mornings, meaningful conversations, and coffee
          made with care. Find your moment at MONARCH.
        </p>

        <a href="/menu" className="experience-button">
          DISCOVER OUR MENU <span>↗</span>
        </a>
      </div>

      <span className="experience-caption">
        YOUR MOMENT. YOUR MONARCH.
      </span>
    </section>
  )
}

export default CoffeeExperience