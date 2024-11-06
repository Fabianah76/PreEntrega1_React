import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div>
        <Logo/>
        <ul>
            <li>Home</li>
            <li>Tops</li>
            <li>Botoms</li>
            <li>Calzado</li>
            <li>Accesorios</li>
        </ul>

        <CartWidget/>
        
    </div>
  )
}

export default Navbar