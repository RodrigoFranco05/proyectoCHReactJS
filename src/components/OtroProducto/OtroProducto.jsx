import React from 'react'
import './OtroProducto.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


const OtroProducto = ({id, nombre, precio, img, incrementarItems}) => {
  
    function agregarCarrito(){
      const carrito = JSON.parse(localStorage.getItem('carrito')) || []
      const producto = {id, nombre, precio, img}
      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))
      incrementarItems()
      Swal.fire({
            title: 'Producto agregado!',
            text: 'El producto fue agregado al carrito',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#7a6e56'
          })
    }
   
    
    return (
      <div className='ItemProducto' id='OtroProducto'>
          <img src={img} alt={nombre} />
          <h3>{nombre}</h3>
          <p>$ {precio}</p>
          <Link to={`/item/${id}`}> Ver Detalle </Link>
          <button onClick={agregarCarrito}> Agregar al Carrito </button>
      </div>
    )
  }


export default OtroProducto