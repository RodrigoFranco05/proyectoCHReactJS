import React from 'react'
import './Contador.css'

const Contador = () => {
  
    const [contador, setContador] = React.useState(1)

    //funciones auxiliares
    let stock = 10;
    const incrementar = () => {
       if(contador < stock)
        setContador(contador + 1)
    }

    const decrementar = () => {
        if(contador > 1)
        setContador(contador - 1)
    }
    
    return (
    <div className='contador'>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

export default Contador