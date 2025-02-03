import {useState} from 'react'
import './Contacto.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contacto = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')
  
  
  const enviarConsulta = (e) => {
    e.preventDefault()

    if (nombre === '' || email === '' || consulta === '') {
      
      return Swal.fire({
        title: 'Error!',
        text: 'Por favor complete todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#7a6e56'
      })

      
    }

    const templateParams = {
      from_nombre: nombre,
      from_email: email,
      message: consulta
    }

    emailjs.send("service_p40nz8f","template_vep0yyc",templateParams,"zYo8Io67JRbiPv8Lr")
        .then((result) => {
            console.log("Enviado correctamente", result.text);
            }, (error) => {
            console.log("Surgio un error",error.text);
            });

    setNombre('')
    setEmail('')
    setConsulta('')

    Swal.fire({
      title: 'Consulta enviada!',
      text: 'Gracias por contactarnos, te responderemos a la brevedad',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#7a6e56'
    })

}
  
    return (
      <div className='contacto'>
        <img src="../../../public/macrame_contacto.jpg" alt="" />
    <form action="">
        <h2>Contactanos</h2>
        <label htmlFor="">Nombre: </label>
        <input type="text" placeholder='Nombre' onChange={ (e) => setNombre(e.target.value)} value={nombre} required/>
        <label htmlFor="">E-Mail: </label>
        <input type="email" placeholder='E-mail' onChange={ (e) => setEmail(e.target.value)} value={email} required/>
        <label htmlFor="">Consulta: </label>
        <textarea id="textArea" placeholder='Ingrese su consulta aqui...' onChange={ (e) => setConsulta(e.target.value)} value={consulta} required></textarea>

        <button type='submit' onClick={enviarConsulta}>Enviar Consulta</button>
    </form>
    </div>
  )
}

export default Contacto