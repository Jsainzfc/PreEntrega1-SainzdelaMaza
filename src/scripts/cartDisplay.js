import {formatPrice} from './buyerDisplay.js'
import { removeProduct } from './buyerDisplay.js'

const cartDisplay = document.querySelector('.cart')
const cartClose = document.querySelector('.cart-close')
const navBarCart = document.querySelector('.navBar__cart')

const closeCart = () => {
  cartDisplay.style.display = 'none';
}

const openCart = () => {
  cartDisplay.style.display = 'flex'
}

// Construye el HTML del carrito en base a los productos que llegan por parámetro
const updateCart = (products) => {
  const cart = document.querySelector('.cart__content')

  if (products.length === 0) {
      cart.innerHTML = `<strong>No hay ningún producto en el carrito`
  } else {
    let productHTML = ''
    for (const product of products) {
      productHTML = productHTML + `
        <div class="cart__item flex--center">
          <img src="../assets/product-1.png" alt="Imagen de producto genérica." />
          <div class="cart__item--info flex__col">
            <p class="info__name">${product.name}</p>
            <p class="info__price">${product.price}</p>
            <p class="info__quantity">x${product.quantity}</p>
            <span id="${product.id}" class="remove-item"></span>
          </div>
        </div>
      `
    }
    cart.innerHTML = productHTML
    document.querySelectorAll('.remove-item')
      .forEach(element => element.addEventListener('click', removeProduct))
  }

}

const initializeCartListeners = () => {
  cartClose.addEventListener('click', closeCart)
  navBarCart.addEventListener('click', openCart)
}

export {initializeCartListeners, openCart, updateCart}