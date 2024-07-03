import homeBackground from './assets/home-background.png'
import GlobalStyles from './components/GlobalStyles'
import Home from './components/Home'

function App() {
  return (
    <>
    <GlobalStyles />
      <Home homeBackground={homeBackground} />
    </>
  )
}

export default App
