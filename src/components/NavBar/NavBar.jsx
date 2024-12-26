import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header className='header'>
      <h2 className='h2'>PAMAP</h2>

      <nav className='nav'>
        <ul className='ul'>
          <li className='li'>Productos</li>
          <li className='li'>Nosotros</li>
          <li className='li'>Contacto</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar