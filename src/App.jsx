import { useState } from 'react'
import background from './assets/home-background.png'
import GlobalStyles from './components/GlobalStyles'
import Home from './pages/Home'
import plants from './plants.json'
import styled from 'styled-components'
import Footer from './components/Footer'
import Menu from './components/Menu'

const Background = styled.div`
  background-image: ${props => `url(${props.$background})`};
  background-repeat: no-repeat;
  background-position: top right;
`

function App() {
  const [plantsList, setPlantsList] = useState(plants);
  return (
    <>
      <GlobalStyles />
      <Background $background={background}>
        <Menu />
        <Home plants={plantsList} />
        <Footer />
      </Background>
    </>
  )
}

export default App
