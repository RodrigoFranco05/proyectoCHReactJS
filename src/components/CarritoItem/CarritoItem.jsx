import React from 'react'
import './CarritoItem.css'

const CarritoItem = ({nombre,precio,img,index,eliminarDelCarrito}) => {
  
    function eliminarProducto(){
        const carrito = JSON.parse(localStorage.getItem('carrito'))
        carrito.splice(index, 1)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        eliminarDelCarrito()
    }
  
    return (
    <tr className="carritoItem">
        <td><img src={img} alt={nombre} /></td>
        <td><h4>{nombre}</h4></td>
        <td><p>{precio}</p></td>
        <td>1</td>
        <td><button onClick={eliminarProducto}>Eliminar</button></td>
    </tr>
  )
}

export default CarritoItem