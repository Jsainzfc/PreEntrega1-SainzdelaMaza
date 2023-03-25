import {formatPrice, removeProduct, emptyCart} from './cartManager.js'

const cartDisplay = document.querySelector('.cart')
const cartClose = document.querySelector('.cart-close')
const navBarCart = document.querySelector('.navBar__cart')

// Cierra el carrito
const closeCart = () => {
  cartDisplay.style.display = 'none';
}

// Abre el carrito
const openCart = () => {
  cartDisplay.style.display = 'flex'
}

// Añade control de eventos a los elementos del carrito
const addCartEvents = () => {
  document.querySelectorAll('.remove-item')
      .forEach(element => element.addEventListener('click', removeProduct))
  document.querySelector('.empty-cart').addEventListener('click', emptyCart)
}

// Construye el HTML de los productos del carrito
const buildProducts = (products) => {
  let productHTML = ''

  for (const product of products) {
    productHTML = productHTML + `
      <div class="cart__item">
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

  productHTML = productHTML + `
    <button class="empty-cart button">Vaciar el carrito</button>
  `
  document.querySelector('.cart__content').innerHTML = productHTML
  
  addCartEvents()
}




// Construye el HTML del carrito en base a los productos que llegan por parámetro
const updateCart = (products) => {
  if (products.length === 0) {
    document.querySelector('.cart__content').innerHTML = `<strong>No hay ningún producto en el carrito`
  } else {
    buildProducts(products)
  }
}

const initializeCartListeners = () => {
  cartClose.addEventListener('click', closeCart)
  navBarCart.addEventListener('click', openCart)
}

export {initializeCartListeners, openCart, updateCart}