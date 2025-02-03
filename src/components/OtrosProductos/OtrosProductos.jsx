import {useState, useEffect} from 'react'
import './OtrosProductos.css'
import { getTresProductos } from '../../asyncmock'
import OtroProducto from '../OtroProducto/OtroProducto'
import { useParams } from 'react-router-dom'

const OtrosProductos = ({incrementarItems}) => {
  
  const [otrosProductos, setOtrosProductos] = useState([])
  const {idItem} = useParams()
  
  useEffect(() => {
    getTresProductos(parseInt(idItem)).then(res => setOtrosProductos(res))
  },[idItem])

  
  
  
  return (
    <div className="otrosProductosContainer">
      <h3>Otros Productos</h3>
        <div className="otrosProductos">
          {otrosProductos.map(producto => (
            <OtroProducto key={producto.id} {...producto} incrementarItems={incrementarItems}/>
          ))}
        </div>
      </div>
  )
}

export default OtrosProductos