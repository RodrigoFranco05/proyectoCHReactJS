import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link , NavLink} from 'react-router-dom'

const NavBar = ({productosCarrito}) => {
  return (
    <header className='header'>

      <Link to='/' >
      <h2 className='h2'>PAMAP</h2>
      </Link>

      <nav className='nav'>
        <ul className='ul'>
          
           <li className='li'> <NavLink to= "/"> Home </NavLink></li>
          <li className='li'><NavLink to="/category/1"> Productos </NavLink></li>
          <li className='li'> <NavLink to="/contacto"> Contacto </NavLink></li>
        </ul>
      </nav>

      <NavLink className="navlink" to="/cart"><CartWidget productosCarrito={productosCarrito}/></NavLink>
    </header>
  )
}

export default NavBar