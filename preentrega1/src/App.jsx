import { useState } from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  
  return (
    <>
      <div>
        < Navbar/>
      </div>
      <div>
        <h1>
          < ItemListContainer greeting = "¡Bienvenida a Poch.!" />  
        </h1>
      </div>              
    </>
  )
}

export default App
