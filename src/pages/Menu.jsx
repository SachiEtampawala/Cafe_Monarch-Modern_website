import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import MenuMedia from '../components/MenuMedia'
import { menuCategories } from '../data/menuData'
import './Menu.css'

function Menu() {
  return (
    <div className="menu-page">
      <Navbar />

      <main>
        <header className="menu-hero">
          <span className="menu-eyebrow">THE MONARCH COLLECTION</span>
          <h1>Our <em>Menu</em></h1>
          <p>Thoughtfully crafted drinks for every kind of moment.</p>
        </header>

        {/* Quick links to each category */}
        <nav className="menu-jump" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.label}
            </a>
          ))}
        </nav>

        <div className="menu-categories">
          {menuCategories.map((category, index) => (
            <Fragment key={category.id}>
              {/* Shows only for categories that have a "group" */}
              {category.group && (
                <Reveal>
                  <div className="menu-group-heading">
                    <span className="menu-eyebrow">{category.group.eyebrow}</span>
                    <h2>{category.group.title}</h2>
                    <p>{category.group.description}</p>
                  </div>
                </Reveal>
              )}

              <section
                className={`menu-category ${category.group ? 'menu-category-after-group' : ''
                  }`}
                id={category.id}
              >
                <div className="menu-category-info">
                  <div className="menu-category-heading">
                    <span className="menu-category-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                    </div>
                  </div>

                  <Reveal direction="left">
                    <MenuMedia category={category} />
                  </Reveal>
                </div>

                <div className="menu-items">
                  {category.items.map((item) => (
                    <article className="menu-item" key={item.name}>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>

                      <span className="menu-item-price">{item.price}</span>
                    </article>
                  ))}
                </div>
              </section>
            </Fragment>
          ))}
        </div>

        <p className="menu-note">
          Menu items and prices are subject to change.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Menu