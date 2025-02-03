import {useState , useEffect} from 'react'
import './ItemDetailConteiner.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getUnProducto} from '../../asyncmock'
import { useParams } from 'react-router-dom'
import OtrosProductos from '../OtrosProductos/OtrosProductos'


const ItemDetailConteiner = ({incrementarItems}) => {
    
    const [productoUnico,setProductoUnico]= useState(null)
    const [cargando, setCargando] = useState(true);

    const {idItem} = useParams()
    
    

    useEffect(() => {
        getUnProducto(idItem).then(res=>setProductoUnico(res))
        .finally(() => setCargando(false));
    },[idItem])
    
    
    return (
    <div>
        {cargando 
        ? <img src="../../../public/loader.gif" alt="Cargando..." style={{ width: '100px' }} /> 
        : <ItemDetail {...productoUnico} incrementarItems={incrementarItems}/>}
        

        <OtrosProductos incrementarItems={incrementarItems}/>
    </div>
  )
}

export default ItemDetailConteiner