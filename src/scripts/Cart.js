import { updateCart } from "./cartDisplay.js"
import { getCart, setCart } from "./manageStorage.js"

class Cart { // objeto carrito que va a guardar toda la información y métodos para acceder a él
  constructor () { //Inicializa el carrito vacío
    this.items = []
    this.flatDiscount = 0
    this.percentageDiscount = 0
  }

  // Actualizar el carrito con nuevos parámetros
  build ({items, flatDiscount, percentageDiscount}) {
    this.items = items
    this.flatDiscount = flatDiscount
    this.percentageDiscount = percentageDiscount
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

  // Calcula el total del carrito aplicando los descuentos que haya
  getTotal(hasDiscount, isFlatDiscount, discount) { 
    let total = this.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    hasDiscount
      ? isFlatDiscount
        ? total = total - discount
        : total = total * (100 - discount)
        : null
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