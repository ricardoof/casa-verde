import { useState } from 'react'
import homeBackground from './assets/home-background.png'
import GlobalStyles from './components/GlobalStyles'
import Home from './components/Home'
import plants from './plants.json'

function App() {
  const [plantsList, setPlantsList] = useState(plants);
  return (
    <>
      <GlobalStyles />
      <Home plants={plantsList} homeBackground={homeBackground} />
    </>
  )
}

export default App
