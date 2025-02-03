import {useState, useEffect} from 'react'
import CarritoItem from '../CarritoItem/CarritoItem'
import './Carrito.css'
import { Link } from 'react-router-dom'


const Carrito = ({decrementarItems}) => {
    

    
    const [carrito, setCarrito] = useState(() => {
        const itemsGuardados = localStorage.getItem('carrito')
        if(itemsGuardados){
            return JSON.parse(itemsGuardados)
        }else{
            return []
        }
    })
    

    useEffect(() => { 
        localStorage.setItem('carrito', JSON.stringify(carrito))
        }, [carrito])



    const eliminarDelCarrito = () => {
           setCarrito(JSON.parse(localStorage.getItem('carrito')))
           decrementarItems()
        };

        
    

    return (
    <div className="carrito">
        <h2>Carrito de Compras</h2>
        {carrito.length > 0 ? ( 
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((producto, index) => (
                            <CarritoItem key={index} nombre={producto.nombre} precio={producto.precio} img={producto.img} index={index} eliminarDelCarrito={eliminarDelCarrito} />
                        ))}
                    </tbody>
                </table>
            )  : ( <h2>No tienes ningun producto en el carrito.</h2>  )}

        <Link to="/cart/buy"><button>Finalizar Compra</button></Link>
    </div>
  )
}

export default Carrito
