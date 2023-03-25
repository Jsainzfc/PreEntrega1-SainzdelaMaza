// Este módulo contiene métodos para gestionar el carrito
import { getProductInfo } from "./manageStorage.js"
import Product from "./Product.js"
import Cart from "./Cart.js"
import { openCart } from "./cartDisplay.js"

const cart = new Cart() // Creamos el carrito que inicializaremos con la información guardada en el session storage

// Función para añadir un producto al carrito
const addProduct = (e) => {
  e.preventDefault()
  const quantity = document.querySelector(`#${e.target.id} input[type="number"]`).value
  const productInfo = getProductInfo(e.target.id)
  const product = new Product (e.target.id, productInfo.name, productInfo.price, productInfo.impuesto, parseInt(quantity))
  cart.addItem(product)
  openCart()
}

// Función para eliminar un producto al carrito
const removeProduct = (e) => {
  cart.removeItem(e.target.id)
}

// Función para vaciar el carrito
const emptyCart = () => {
  cart.empty()
}

// Función para formatear el precio en un string de moneda.
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR'}).format(price)
}

// Función para obtener el total del contenido del carrito
const getTotal = () => {
  return cart.getTotal()
}

// Esta función lee los productos del session storage y los construye en el HTML a la vez que 
// crea eventos de click para cada uno de ellos
const initialize = () => {
  cart.initialize()
  const products = JSON.parse(sessionStorage.getItem('products'))
  const productsContainer = document.querySelector('.tienda__products')
  let productsHTML = ''
  for (const item of products) {
    const itemHtml = `
      <div class="store-product">
        <div class="product flex__col flex--center">
          <img src="../assets/product-1.png" alt="Imagen de producto genérica." />
          <h3>${item.info.name}</h3>
          <p class="product__price">${formatPrice(item.info.price)}</p>
          <form id="${item.id}" class="product__form flex--center">
            <input type="number" value="1" min="1" max="3">
            <button type="submit" class="button">Añadir al carrito </button>
          </form>
        </div>
      </div>
    `
    productsHTML = productsHTML + itemHtml
  }
  productsContainer.innerHTML = productsHTML
  // Añadir eventos para añadir productos al carrito
  document.querySelectorAll('.product__form')
    .forEach((product) => product.addEventListener('submit', addProduct))
}

export {initialize, formatPrice, removeProduct, emptyCart, getTotal}