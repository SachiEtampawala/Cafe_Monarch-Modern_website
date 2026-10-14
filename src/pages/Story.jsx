import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Story.css'

const values = [
  {
    number: '01',
    title: 'Thoughtfully Sourced',
    description:
      'We believe exceptional coffee starts with carefully selected beans and respect for the people who grow them.',
  },
  {
    number: '02',
    title: 'Crafted with Care',
    description:
      'From roasting to brewing, every step is an opportunity to bring out the best in every cup.',
  },
  {
    number: '03',
    title: 'Made for Connection',
    description:
      'A coffee shop should be more than a place to drink coffee. It should be a place to pause, connect and feel welcome.',
  },
]

function Story() {
  return (
    <div className="story-page">
      <Navbar />

      <main>
        <header className="story-hero">
          <span className="story-eyebrow">THE STORY OF MONARCH</span>

          <h1>
            More than coffee,
            <br />
            <em>A feeling...</em>
          </h1>

          <p>
            Coffee for the moments that matter.
            A little pause in a busy world 🤎.
          </p>
        </header>

        <section className="story-introduction">
          <div className="story-intro-image">
            <img
              src="/images/story-philosophy.jpg"
              alt="A barista carefully preparing coffee at MONARCH"
            />
          </div>

          <div className="story-intro-content">
            <span className="story-label">OUR PHILOSOPHY</span>

            <h2>Every cup has a story.</h2>

            <p>
              MONARCH is where specialty coffee meets modern living. From slow mornings to late-night conversations, we create the perfect atmosphere to pause, reconnect, and enjoy the little things that make every moment feel special.
            </p>

            <p>
              Every detail tells a story — from expertly crafted coffee and carefully selected ingredients to our warm, contemporary interiors. Inspired by minimalism and a touch of luxury, MONARCH is more than a café; it's a mood, a feeling, and your own little escape from the everyday.
            </p>

          </div>
        </section>

        <section className="story-values">
          <div className="story-values-heading">
            <span className="story-label">WHAT MATTERS TO US</span>
            <h2>Our way of doing things.</h2>
          </div>

          <div className="story-values-grid">
            {values.map((value) => (
              <article className="story-value" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-ending">
          <p>Good coffee. Good company. Meaningful moments.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Story