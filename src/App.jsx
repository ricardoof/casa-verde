import styled from 'styled-components'
import homeBackground from './assets/home-background.png'
import Home from './components/Home'

const AppContainer = styled.div`
  
  margin: 10px 300px;
  height: 100vh;
`

function App() {
  return (
    <AppContainer >
      <Home $homeBackground={homeBackground} />
    </AppContainer>
  )
}

export default App
