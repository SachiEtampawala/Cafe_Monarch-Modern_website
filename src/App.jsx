import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Story from './pages/Story'
import Visit from './pages/Visit'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App