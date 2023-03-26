// Módulo para gestionar las funcionalidades del propietario de la tienda

import { formatPrice } from "./cartManager.js"
import { updateProductInfo } from "./manageStorage.js"

const saveProduct = (e) => {
  e.preventDefault()
  const name = document.querySelector(`#name--${e.target.id}`).value
  const price = document.querySelector(`#price--${e.target.id}`).value
  updateProductInfo(e.target.id, name, price)
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
    <button class="owner__add-product button">Añadir producto</button>`
  ownerSection.innerHTML = innerHTML
  document.querySelectorAll('.owner__edit-product')
    .forEach((product) => product.addEventListener('click', editarProducto))

}

export {initialize}