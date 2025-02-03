import React from 'react'
import './ItemDetail.css'
import Swal from 'sweetalert2'

const ItemDetail = ({id,nombre,precio,img,incrementarItems}) => {
  
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
    <div className='itemDetail'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <h3>$ {precio}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis aspernatur numquam laboriosam beatae dicta accusantium, architecto officia quo porro earum sit, repudiandae eum doloremque dignissimos ut ab qui eaque!</p>
        <button onClick={agregarCarrito}> Agregar al Carrito </button>

    </div>
  )
}

export default ItemDetail