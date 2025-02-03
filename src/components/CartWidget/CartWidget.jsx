import {useState, useEffect} from 'react'
import "./CartWidget.css"

const CartWidget = ({productosCarrito}) => {
 
  

  
  return (
    <div className='div'>
        <img src="../../../public/carrito-de-compras.png" alt="carrito" className='img'/>
        <p className='p'>{productosCarrito}</p>
    </div>
  )
}

export default CartWidget