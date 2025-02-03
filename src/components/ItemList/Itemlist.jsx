import React from 'react'
import Item from '../Item/Item'
import "./Itemlist.css"

const Itemlist = ({productos,incrementarItems}) => {


  return (
    <div>{
        productos.map((productos) => <Item key={productos.id} {...productos} incrementarItems={incrementarItems}/>)
    }
    </div>
  )
}

export default Itemlist