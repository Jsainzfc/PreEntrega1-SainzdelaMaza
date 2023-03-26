import { updateCart } from "./cartDisplay.js"
import { getCart, setCart } from "./manageStorage.js"

class Cart { // objeto carrito que va a guardar toda la información y métodos para acceder a él
  constructor () { //Inicializa el carrito vacío
    this.items = []
  }

  // Actualizar el carrito con nuevos parámetros
  build ({items}) {
    this.items = items
  }

  // Actualizar el carrito en el storage y el HTML
  update () {
    setCart(JSON.stringify(this))
    updateCart(this.items)
  }

  // Añade un nuevo producto al carrito
  addItem (item) {
    const index = this.items.findIndex(element => element.name === item.name)
    index === -1   
      ? this.items.push(item)
      : this.items[index].quantity = this.items[index].quantity + item.quantity
    this.update()
  }

  // Elimina un producto del carrito
  removeItem (id) {
    const index = this.items.findIndex(element => element.id === id)
    index > -1 ? this.items.splice(index, 1) : null
    console.log(this)
    this.update()
  }

  // Vacía el carrito
  empty () { 
    this.items = []
    this.update()
  }

  // Calcula el total del carrito
  getTotal() { 
    let total = this.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    return total
  }

  // Inicializa el carrito
  initialize () {
    const storedCart = getCart()
    if (storedCart !== null) {
      this.build(JSON.parse(storedCart)) 
    }
    this.update()
  }
}

export default Cart