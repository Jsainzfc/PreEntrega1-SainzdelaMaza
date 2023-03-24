class Cart { // objeto carrito que va a guardar toda la información y métodos para acceder a él
  constructor () { //Inicializa el carrito vacío
    this.items = []
    this.flatDiscount = 0
    this.percentageDiscount = 0
  }

  addItem (item) { // Añade un nuevo producto al carrito
    this.items.push(item)
  }

  empty () { // Vacía el carrito
    this.items = []
  }

  getTotal() { // Calcula el total del carrito aplicando los descuentos que haya
    let total = this.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    if (this.flatDiscount !== 0) {
      total = total - this.flatDiscount
    } else if (this.percentageDiscount !== 0) {
      total = total - this.percentageDiscount * total / 100
    }
    if (total < 0) {
      return 0
    } else {
      return total
    }
  }

  isEmpty() { // Devuelve true si hay algún elemento en el carrito
    return this.items.length === 0
  }

  hasDiscount() {
    return this.flatDiscount !== 0 || this.percentageDiscount !== 0
  }

  getDiscount() { // Devuelve la imagen del descuento aplicado al carrito.
    if (!this.hasDiscount()) {
      return '0€'
    } else {
      if (this.flatDiscount !== 0) {
        return `${this.flatDiscount}€`
      } else {
        return `${this.percentageDiscount}%`
      }
    }
  }

  addDiscount(isFlat, discount) { // Resetea ñps descuentos y añade uno nuevo
    this.flatDiscount = 0
    this.percentageDiscount = 0
    if (isFlat) {
      this.flatDiscount = discount
    } else {
      this.percentageDiscount = discount
    }
  }

  getProductsImage() { // Muestra la imagen de los productos del carrito
    let image = ''
    for (let i = 0; i < this.items.length; i++) {
      image = image + `
      ${i+1}.- ${this.items[i].image()}`
    }
    return image
  }

  showItems() { // Muestra el contenido del carrito
    if (this.items.length === 0) {
      alert('No hay productos en el carrito.')
    } else {
      alert(`Contenido del carrito:
      ${this.getProductsImage()}
      Descuento aplicado: ${this.getDiscount()}
      Total: ${this.getTotal()}€`)
    }
  }
}

export default Cart