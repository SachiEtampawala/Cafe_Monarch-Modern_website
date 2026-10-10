import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoffeeCards from './components/CoffeeCards'
import RoastingStory from './components/RoastingStory'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CoffeeCards />
        <RoastingStory />
      </main>
    </>
  )
}

export default App