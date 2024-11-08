import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    
    <div className='navbar'>
        
        <Logo/>
        
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <a href="">Home</a> 
            </li>
            <li className='navbar-item'>
                <a href="">Tops</a> 
            </li>
            <li className='navbar-item'>
                <a href="">Bottoms</a> 
            </li>
            <li className='navbar-item'>
                <a href="">Calzado</a> 
            </li>
            <li className='navbar-item'>
                <a href="">Accesorios</a> 
            </li>
            </ul>

            <CartWidget/>
    
       
    </div>
  )
}

export default Navbar