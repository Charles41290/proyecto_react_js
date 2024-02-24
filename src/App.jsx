import { useState } from 'react'
import Titulo from './Components/Titulo'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SobreNosotros from './Components/SobreNosotros'
import Contacto from './Components/Contacto'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemCount from './Components/ItemCount'
import { CartContext } from '../../../clase11/context/src/context/CartContext'
import CartContextProvider from './context/CartContext'
import Cart from './Components/Cart'

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
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      
      
    </>
  )
}

export default App

