import React from 'react'
import './App.css'
import ProductoCard from './components/ProductoCard/ProductoCard';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  //parte superior - JS
  
  let comision =5020;


  //parte del renderizado
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a PAMAP articulos de Macrame"/>
      <ProductoCard/>
    </>
  )
}

export default App