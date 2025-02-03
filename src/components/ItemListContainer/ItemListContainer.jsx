import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos , getCategoria} from '../../asyncmock'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({incrementarItems}) => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true);

  const {categoryId} = useParams()

 

  useEffect(() => {
    const funcionProducto = categoryId ? getCategoria : getProductos
    funcionProducto(categoryId)
      .then(res=>setProductos(res))
      .finally(() => setCargando(false));
  },[categoryId])
  
  
  return (
    <div className="ItemlistContainer">
    <h2>Productos</h2>
    {cargando 
        ? <img src="../../../public/loader.gif" alt="Cargando..." style={{ width: '100px' }} /> 
        : <ItemList productos={productos} incrementarItems={incrementarItems}/>}
    </div>
  )
}

export default ItemListContainer