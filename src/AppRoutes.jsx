import { useState } from 'react'
import background from './assets/home-background.png'
import GlobalStyles from './components/GlobalStyles'
import Home from './pages/Home'
import plants from './plants.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Depositions from './pages/Depositions'
import Videos from './pages/Videos'
import Cart from './pages/Cart'
import Default from './pages/Default'

function AppRoutes() {
  const [plantsList, setPlantsList] = useState(plants);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Default background={background} />}>
          <Route index element={<Home plants={plantsList} />} />
          <Route path="depoimentos" element={<Depositions />} />
          <Route path="videos" element={<Videos />} />
          <Route path="carrinho" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
