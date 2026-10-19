import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'
import './ContactImage.css'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Thank you for reaching out to MONARCH!')
  }

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        <header className="contact-hero">
          <span className="contact-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>

          <h1>
            Let's start
            <br />
            <em>a conversation...</em>
          </h1>

          <p>
            Questions, feedback, or just want to say hello?
            Send us a message.
          </p>
        </header>

        <section className="contact-image">
          <img
            src="/images/contact-hello.jpg"
            alt="A warm welcome at the MONARCH café"
            loading="lazy"
          />
        </section>

        <section className="contact-content">
          <div className="contact-information">
            <span className="contact-label">GET IN TOUCH</span>

            <h2>We're all ears.</h2>

            <p>
              Whether you have a question about our menu or want to share your
              experience, we'd be happy to hear from you.
            </p>

            <div className="contact-information-item">
              <span>Email</span>
              <a href="mailto:hello@cafemonarch.com">
                hello.cafemonarch@gmail.com
              </a>
            </div>

            <div className="contact-information-item">
              <span>Phone</span>
              <a href="tel:+94112345678">+94 11 234 5678</a>
            </div>

            <div className="contact-information-item">
              <span>Location</span>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h2>Send us a message.</h2>
              <p>Fill in the details below.</p>
            </div>

            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="name@gmail.com"
              required
            />

            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              required
            />

            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />

            <button type="submit">
              SEND MESSAGE <span>↗</span>
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact