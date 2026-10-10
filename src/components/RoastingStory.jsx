function RoastingStory() {
  const stages = [
    {
      number: '01',
      title: 'Carefully Sourced',
      description:
        'Every exceptional cup begins with carefully selected beans from remarkable coffee-growing regions.',
      image:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85',
    },
    {
      number: '02',
      title: 'Slowly Roasted',
      description:
        'Our roasting process brings out the unique character, rich aroma, and natural sweetness of every bean.',
      image:
        'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=900&q=85',
    },
    {
      number: '03',
      title: 'Beautifully Brewed',
      description:
        'Every drink is prepared with care, turning everyday coffee moments into something worth remembering.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    },
  ]

  return (
    <section className="roasting-story" id="our-process">
      <div className="roasting-heading">
        <p className="roasting-label">THE ART OF COFFEE</p>

        <h2>
          Great coffee is
          <br />
          <span>never an accident.</span>
        </h2>

        <p className="roasting-intro">
          From the first carefully selected bean to the final pour,
          every detail matters. This is the craft behind MONARCH.
        </p>
      </div>

      <div className="roasting-stages">
        {stages.map((stage) => (
          <article className="roasting-stage" key={stage.number}>
            <div className="roasting-image">
              <img src={stage.image} alt={stage.title} loading="lazy" />

              <span className="roasting-number">{stage.number}</span>
            </div>

            <div className="roasting-details">
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="roasting-footer">
        <span>THOUGHTFULLY MADE</span>
        <span>EVERY CUP TELLS A STORY ↗</span>
      </div>
    </section>
  )
}

export default RoastingStory