import React from 'react'
import './App.css'
import ProductoCard from './components/ProductoCard/ProductoCard';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import Carrito from './components/Carrito/Carrito';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { useItemsCarrito } from './CustomHooks/useItemsCarrito'
import FormCompra from './components/FormCompra/FormCompra';



const App = () => {
  //parte superior - JS
  
  const {productosCarrito, incrementarItems, decrementarItems} = useItemsCarrito()


  //parte del renderizado
  return (
    <div>
      <BrowserRouter>

        <NavBar productosCarrito={productosCarrito}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer incrementarItems= {incrementarItems}/> }/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/item/:idItem" element={<ItemDetailConteiner incrementarItems={incrementarItems}/>} />
          <Route path="*" element={<h1>404 - Not Found</h1>}/>
          <Route path="/cart" element={<Carrito decrementarItems={decrementarItems}/>}/>
          <Route path="/cart/buy" element={<FormCompra/>} />

          {/* <ProductoCard/>
          <Contador/> */}
          
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App