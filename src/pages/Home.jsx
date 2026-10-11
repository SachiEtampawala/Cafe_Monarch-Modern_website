import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CoffeeCards from '../components/CoffeeCards'
import RoastingStory from '../components/RoastingStory'
import CoffeeExperience from '../components/CoffeeExperience'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <Hero />
        <CoffeeCards />
        <RoastingStory />
        <CoffeeExperience />
      </main>

      <Footer />
    </div>
  )
}

export default Home