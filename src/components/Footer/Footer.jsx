import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <section>
            <section className="footer_paginas">
                <h3>Categorias</h3>
                <Link to="/">Home</Link>
                <Link to="/category/1">Productos</Link>
                <Link to="/contacto">Contacto</Link>
            </section>
            <section className="footer_redes">
                <h3>Contactanos</h3>
                <a href="https://www.instagram.com/" target="_blank"><img src="../../../public/logotipo-de-instagram.png" alt="logo instagram"/>Instagram</a>
                <a href="https://web.whatsapp.com/" target="_blank"><img src="../../../public/whatsapp.png" alt="logo whatsapp"/> Whatsapp</a>
                <Link to="/contacto"><img src="../../../public/correo-electronico.png" alt="logo mail"/> E-Mail</Link>
            </section>
        </section>
        <h3>Copyright PAMAP . Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos <a href="https://autogestion.produccion.gob.ar/consumidores">ingresá acá</a>. </h3>
    </footer>
  )
}

export default Footer