import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Titulo from './Components/Titulo'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Titulo/>
      <NavBar/>
      <ItemListContainer mensaje={"📘¡Bienvenido a nuesta librería!📘"}/>

    </>
  )
}

export default App

