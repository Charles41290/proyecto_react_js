import { useState } from 'react'
import Titulo from './Components/Titulo'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SobreNosotros from './Components/SobreNosotros'
import Contacto from './Components/Contacto'
import ItemDetailContainer from './Components/ItemDetailContainer'
import CartContextProvider from './context/CartContext'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <CartContextProvider>
      <BrowserRouter>
        <Titulo/>
        <NavBar/>
        <Routes>
          <Route path={'/'} element = {<ItemListContainer />} />
          <Route path={'/productos'} element = {<ItemListContainer />} />
          <Route path={'/autores/:categoriaAutor/'} element = {<ItemListContainer />} />
          <Route path={'/sobre_nosotros'} element = {<SobreNosotros />} />
          <Route path={'/contacto'} element = {<Contacto />} />
          <Route path={'/productos/:idProducto'} element = {<ItemDetailContainer />} />
          <Route path={'/autores/:categoriaAutor/productos/:idProducto'} element = {<ItemDetailContainer />} />
          <Route path={'/cart'} element = {<Cart />} />
          <Route path={'/checkout'} element = {<Checkout />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      
      
    </>
  )
}

export default App

