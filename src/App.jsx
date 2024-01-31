import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Titulo from './Components/Titulo'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SobreNosotros from './Components/SobreNosotros'
import Contacto from './Components/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>
        <Titulo/>
        <NavBar/>
        <Routes>
          <Route path={'/'} element = {<ItemListContainer />} />
          <Route path={'/productos'} element = {<ItemListContainer />} />
          <Route path={'/autores/:categoriaAutor'} element = {<ItemListContainer />} />
          <Route path={'/sobre_nosotros'} element = {<SobreNosotros />} />
          <Route path={'/contacto'} element = {<Contacto />} />
        </Routes>
        
      
      </BrowserRouter>
      
    </>
  )
}

export default App

