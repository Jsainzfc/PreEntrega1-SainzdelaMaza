// Módulo para gestionar las funcionalidades del propietario de la tienda

import { formatPrice } from "./cartManager.js"
import { updateProductInfo, removeProduct, addNewProduct } from "./manageStorage.js"

// Función para guardar los cambios en la info de un producto
const saveProduct = (e) => {
  e.preventDefault()
  const name = document.querySelector(`#name--${e.target.id}`).value
  const price = document.querySelector(`#price--${e.target.id}`).value
  updateProductInfo(e.target.id, name, price)
}

// Función para eliminar un producto
const eliminarProducto = (e) => {
  removeProduct(e.target.id)
}

// Callback del evento de editar producto. Abre un formulario de edición del producto.
const editarProducto = (e) => {
  const edition = document.querySelector(`.owner__edition--${e.target.id}`)
  const innerHTML = `
    <form id="${e.target.id}" class="owner__edition--submit owner__edition-submit--${e.target.id}">
      <div class="owner__edition--name flex__col">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name--${e.target.id}">
      </div>
      <div class="owner__edition--price flex__col">
        <label for="price">Precio</label>
        <input type="number" name="price" id="price--${e.target.id}">
      </div>
      <button type="submit" class="button">Guardar</button>
    </form>
  `
  edition.innerHTML = innerHTML
  document.querySelector(`.owner__edition-submit--${e.target.id}`)
    .addEventListener('submit', saveProduct)
}

// Función para guardar un nuevo producto
const saveNewProduct = (e) => {
  e.preventDefault()
  const id = document.querySelector('#new-product-id').value
  const name = document.querySelector('#new-product-name').value
  const price = document.querySelector('#new-product-price').value
  addNewProduct(id, name, price)
}

// Callback del evento de añadir un nuevo product. Crea el formulario para añadirlo.
const addProduct = () => {
  const edition = document.querySelector(`.owner__add-product--form`)
  const innerHTML = `
    <form class="owner__new--submit">
      <div class="owner__edition--name flex__col">
        <label for="id">Id</label>
        <input type="text" name="id" id="new-product-id">
      </div>
      <div class="owner__edition--name flex__col">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="new-product-name">
      </div>
      <div class="owner__edition--price flex__col">
        <label for="price">Precio</label>
        <input type="number" name="price" id="new-product-price">
      </div>
      <button type="submit" class="button">Guardar</button>
    </form>
  `
  edition.innerHTML = innerHTML
  document.querySelector(`.owner__new--submit`)
    .addEventListener('submit', saveNewProduct)
}

const addEvents = () => {
  document.querySelectorAll('.owner__edit-product')
    .forEach((product) => product.addEventListener('click', editarProducto))
  document.querySelectorAll('.owner__remove-product')
    .forEach((product) => product.addEventListener('click', eliminarProducto))
  document.querySelector('.owner__add-product').addEventListener('click', addProduct)
}

const initialize = () => {
  let innerHTML = ''
  const ownerSection = document.querySelector('.owner__products')
  const products = JSON.parse(sessionStorage.getItem('products'))
  for (const item of products) {
    const itemHtml = `
      <div class="owner__product flex__col">
        <p>Nombre: ${item.info.name}</p>
        <p>Id: ${item.id}</p>
        <p>Precio: ${formatPrice(item.info.price)}</p>
        <div class="owner__manage">
          <button id=${item.id} class="owner__edit-product button">Editar producto</button>
          <button id=${item.id} class="owner__remove-product button">Eliminar producto</button>
        </div>
        <div class="owner__edition--${item.id}"></div>
      </div>
    `
    innerHTML = innerHTML + itemHtml
  }
  innerHTML = innerHTML + `
    <button class="owner__add-product button">Añadir producto</button>
    <div class="owner__add-product--form"></div>  
  `

  ownerSection.innerHTML = innerHTML

  addEvents()
}

export {initialize}