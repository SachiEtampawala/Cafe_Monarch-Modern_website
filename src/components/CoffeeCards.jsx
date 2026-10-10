import './CoffeeCards.css'
import Reveal from './Reveal'

const coffees = [
  {
    number: '01',
    name: 'Velvet Latte',
    category: 'ESPRESSO · STEAMED MILK',
    price: 'Rs. 850',
    image: '/images/velvet-latte.jpg',
  },
  {
    number: '02',
    name: 'Midnight Mocha',
    category: 'ESPRESSO · DARK CHOCOLATE',
    price: 'Rs. 950',
    image: '/images/midnight-mocha.jpg',
  },
  {
    number: '03',
    name: 'Golden Cappuccino',
    category: 'ESPRESSO · SILKY FOAM',
    price: 'Rs. 800',
    image: '/images/golden-cappuccino.jpg',
  },
]

function CoffeeCards() {
  return (
    <section className="coffee-collection" id="coffee-collection">
      <Reveal>
        <div className="coffee-collection-heading">
          <div>
            <p className="collection-label">
              THE MONARCH SELECTION
            </p>

            <h2>
              Crafted to be
              <br />
              <span>savoured.</span>
            </h2>
          </div>

          <a href="/menu" className="collection-link">
            EXPLORE ALL COFFEE ↗
          </a>
        </div>
      </Reveal>

      <div className="coffee-grid">
        {coffees.map((coffee, index) => (
          <Reveal key={coffee.number} delay={index * 150}>
            <article className="coffee-card">
              <div className="coffee-card-image">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  loading="lazy"
                />

                <span className="coffee-number">
                  {coffee.number}
                </span>
              </div>

              <div className="coffee-card-details">
                <div>
                  <h3>{coffee.name}</h3>
                  <p>{coffee.category}</p>
                </div>

                <span className="coffee-price">
                  {coffee.price}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default CoffeeCards