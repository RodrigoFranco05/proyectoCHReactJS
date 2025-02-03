import React from 'react'
import './FormCompra.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useState } from 'react'

const FormCompra = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [nota, setNota] = useState('')
    
    
    const enviarCompra = (e) => {
      e.preventDefault()
  
      if (nombre === '' || email === '' || nota === '') {
        
        return Swal.fire({
          title: 'Error!',
          text: 'Por favor complete todos los campos',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#7a6e56'
        })
  
        
      }
  
      const cart= JSON.parse(localStorage.getItem('carrito'))

      const templateParams = {
        from_nombre: nombre,
        from_email: email,
        from_cart: cart,
        message: nota,
      }
  
      emailjs.send("service_p40nz8f","template_cb76wvo",templateParams,"zYo8Io67JRbiPv8Lr")
          .then((result) => {
              console.log("Enviado correctamente", result.text);
              }, (error) => {
              console.log("Surgio un error",error.text);
              });
  
      setNombre('')
      setEmail('')
      setNota('')
  
      Swal.fire({
        title: 'Compra enviada!',
        text: 'Gracias por elegirnos, te responderemos a la brevedad',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#7a6e56'
      })
  
  }
    
      return (
        <div className='compra'>
          <img src="../../../public/info_image.jpg" alt="" />
      <form action="">
          <h2>Termina tu compra</h2>
          <label htmlFor="">Nombre: </label>
          <input type="text" placeholder='Nombre' onChange={ (e) => setNombre(e.target.value)} value={nombre} required/>
          <label htmlFor="">E-Mail: </label>
          <input type="email" placeholder='E-mail' onChange={ (e) => setEmail(e.target.value)} value={email} required/>
          <label htmlFor="">Nota: </label>
          <textarea id="textArea" placeholder='Ingrese su nota aqui...' onChange={ (e) => setNota(e.target.value)} value={nota} required></textarea>
  
          <button type='submit' onClick={enviarCompra}>Comprar</button>
      </form>
      </div>
    )
}

export default FormCompra