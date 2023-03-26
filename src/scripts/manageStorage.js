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

const updateProductInfo = (id, name, price) => {
  const storedProducts = JSON.parse(sessionStorage.getItem('products'))
  const index = storedProducts.findIndex(product => product.id === id)
  storedProducts[index].info.name = name
  storedProducts[index].info.price = price
  sessionStorage.setItem('products', JSON.stringify(storedProducts))
  initialize()
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

export {initializeProducts, getProductInfo, updateProductInfo, getUser, setUser, getCart, setCart}