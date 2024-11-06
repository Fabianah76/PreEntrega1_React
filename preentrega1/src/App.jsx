import { useState } from 'react'
import './App.css'
import CartWidget from './Components/CartWidget'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Logo from './Components/Logo'


function App() {
  
  return (
    <>
      < Navbar/>
      < ItemListContainer/>
      < CartWidget/>
      
      
    </>
  )
}

export default App
