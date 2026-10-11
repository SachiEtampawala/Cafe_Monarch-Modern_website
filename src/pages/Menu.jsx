import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Menu.css'

const categories = [
  {
    number: '01',
    title: 'Espresso Classics',
    description: 'Timeless coffee, expertly prepared.',
    items: [
      { name: 'Espresso', description: 'Rich, concentrated coffee.', price: 'Rs. 500' },
      { name: 'Americano', description: 'Espresso with hot water.', price: 'Rs. 650' },
      { name: 'Cappuccino', description: 'Espresso with silky milk foam.', price: 'Rs. 800' },
      { name: 'Café Latte', description: 'Smooth espresso and steamed milk.', price: 'Rs. 850' },
    ],
  },
  {
    number: '02',
    title: 'Signature Coffee',
    description: 'Special creations from MONARCH.',
    items: [
      { name: 'Velvet Latte', description: 'A smooth and velvety coffee experience.', price: 'Rs. 850' },
      { name: 'Midnight Mocha', description: 'Espresso with dark chocolate.', price: 'Rs. 950' },
      { name: 'Golden Cappuccino', description: 'Our signature take on a classic.', price: 'Rs. 800' },
      { name: 'Caramel Macchiato', description: 'Espresso, milk and caramel.', price: 'Rs. 900' },
    ],
  },
  {
    number: '03',
    title: 'Cold Coffee',
    description: 'Refreshing favourites, served chilled.',
    items: [
      { name: 'Iced Americano', description: 'Bold espresso served over ice.', price: 'Rs. 700' },
      { name: 'Iced Latte', description: 'Chilled milk and espresso.', price: 'Rs. 850' },
      { name: 'Iced Mocha', description: 'Cold coffee with rich chocolate.', price: 'Rs. 950' },
      { name: 'Caramel Frappe', description: 'A creamy, blended coffee treat.', price: 'Rs. 1,000' },
    ],
  },
  {
    number: '04',
    title: 'Tea & More',
    description: 'Something special beyond coffee.',
    items: [
      { name: 'Ceylon Tea', description: 'A classic Sri Lankan tea.', price: 'Rs. 450' },
      { name: 'Masala Chai', description: 'Black tea infused with warming spices.', price: 'Rs. 600' },
      { name: 'Hot Chocolate', description: 'A comforting chocolate drink.', price: 'Rs. 750' },
      { name: 'Fresh Lemon Tea', description: 'Refreshing tea with lemon.', price: 'Rs. 500' },
    ],
  },
]

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

        <div className="menu-categories">
          {categories.map((category) => (
            <section className="menu-category" key={category.number}>
              <div className="menu-category-heading">
                <span className="menu-category-number">{category.number}</span>

                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
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