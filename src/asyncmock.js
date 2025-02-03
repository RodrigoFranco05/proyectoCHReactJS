const productos = [
    {id: 1, nombre: 'Producto 1', precio: 100, categoria: 1, stock: 10,img: '/bolso.png'},
    {id: 2, nombre: 'Producto 2', precio: 100, categoria: 1, stock: 8,img: '/almohadon.png'},
    {id: 3, nombre: 'Producto 3', precio: 100, categoria: 1, stock: 3,img: '/caminodemesa.png'},
    {id: 4, nombre: 'Producto 4', precio: 100, categoria: 1, stock: 15,img: '/decoPared.png'},
    {id: 5, nombre: 'Producto 5', precio: 100, categoria: 1, stock: 18,img: '/espejo.png'},
    {id: 6, nombre: 'Producto 6', precio: 100, categoria: 1, stock: 10,img: '/llavero.png'},
    {id: 7, nombre: 'Producto 7', precio: 100, categoria: 1, stock: 9,img: '/portaplanta.png'},
    {id: 8, nombre: 'Producto 8', precio: 100, categoria: 1, stock: 14, img: '/bolso.png'}
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)                  
        }, 2000)
    })
}


// return new Promise(resolve => {setTimeout(() => {resolve(productos)}, 2000)})
    
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const prodructoBuscado = productos.find(producto => producto.id == id)
            resolve(prodructoBuscado)
        }, 2000)
})
}

export const getCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(producto => producto.categoria == idCategoria)
            resolve(productosCategoria)
        }, 1000)
    })
}

export const getTresProductos = (idItem) => {
    return new Promise(resolve => {
            const todosLosProductos = productos.filter(producto => producto.id != idItem)
            const productosAleatorios = todosLosProductos.sort(() => Math.random() - 0.5)
            resolve(productosAleatorios.slice(0,3))
    })
    }
