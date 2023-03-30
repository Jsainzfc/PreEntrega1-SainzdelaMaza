// Este módulo exporta todas las funciones necesarias para gestionar el session storage
import { initialize as cartManagerInitialize } from "./cartManager.js"
import { initialize } from "./owner.js"
import products from "./products.js" // Lista inicial de productos

// Función para inicializar los productos con los básicos o los guardados en la sesión
const initializeProducts = () => {
  const storedProducts = sessionStorage.getItem('products')
  if (storedProducts === null) sessionStorage.setItem('products', JSON.stringify(products))
  cartManagerInitialize()
}

// Función que devuelve la info de un producto a través de su id
const getProductInfo = (id) => {
  const storedProducts = JSON.parse(sessionStorage.getItem('products'))
  const productFound = storedProducts.find(product => product.id === id)
  return productFound.info
}

// Actualiza la información de un producto del session storage
const updateProductInfo = (id, name, price) => {
  const storedProducts = JSON.parse(sessionStorage.getItem('products'))
  const index = storedProducts.findIndex(product => product.id === id)
  storedProducts[index].info.name = name
  storedProducts[index].info.price = price
  sessionStorage.setItem('products', JSON.stringify(storedProducts))
  Swal.fire({
    title: 'Producto actualizad',
    text: 'El producto se ha actualizado correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
  initialize()
}

// Elimina un producto del session storage
const removeProduct = (id) => {
  const storedProducts = JSON.parse(sessionStorage.getItem('products'))
  const index = storedProducts.findIndex(product => product.id === id)
  storedProducts.splice(index, 1)
  sessionStorage.setItem('products', JSON.stringify(storedProducts))
  Swal.fire({
    title: 'Producto eliminado',
    text: 'El producto se ha eliminado correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
  initialize()
}

// Añade un nuevo producto al session storage
const addNewProduct = (id, name, price) => {
  const storedProducts = JSON.parse(sessionStorage.getItem('products'))
  const index = storedProducts.findIndex(product => product.id === id)
  if (index > -1) {
    Swal.fire({
      title: 'Id repetido',
      text: 'El id introducido está repetido. Por favor, introduzca un id único.',
      icon: 'error',
      confirmButtonText: 'Corregirlo'
    })
  } else {
    const newProduct = {
      id: id,
      info: {
        name: name,
        price: price
      }
    }
    const newProducts = [...storedProducts, newProduct]
    sessionStorage.setItem('products', JSON.stringify(newProducts))
    Swal.fire({
      title: 'Producto creado',
      text: 'El producto se ha añadido correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
    initialize()
  }
}


// Devuelve el usuario guardado en la sesión
const getUser = () => {
  return sessionStorage.getItem('user')
}

// Guarda el usuario en la sesión
const setUser = (user) => {
  sessionStorage.setItem('user', user)
}

// Devuelve el usuario guardado en la sesión
const getCart = () => {
  return sessionStorage.getItem('cart')
}

// Guarda el carrito en la sesión
const setCart = (cart) => {
  sessionStorage.setItem('cart', cart)
}

export { initializeProducts, getProductInfo, updateProductInfo, removeProduct, addNewProduct, getUser, setUser, getCart, setCart }