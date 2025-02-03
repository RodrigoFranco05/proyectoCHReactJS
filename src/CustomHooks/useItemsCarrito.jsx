import {useState, useEffect} from 'react'

export const useItemsCarrito = () => {
  
    const [productosCarrito, setProductosCarrito] = useState(0)

    useEffect(() => {
        const productosEnElCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        setProductosCarrito(productosEnElCarrito.length)
    },[productosCarrito])

    const incrementarItems = () => {
        setProductosCarrito(productosCarrito + 1)
    }

    const decrementarItems = () => {
        setProductosCarrito(productosCarrito - 1)
        
    }
  
    return {   productosCarrito, incrementarItems, decrementarItems}
}
