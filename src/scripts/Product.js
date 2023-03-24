class Product { // Objeto que guarda toda la información de los productos del carrito
  constructor (name, price, impuesto, quantity) {
    this.name = name
    this.price = price
    this.impuesto = impuesto
    this.quantity = quantity
  }
  image () { // Método que devuelve la imagen del producto
    return `${this.name} / ${this.price}€ / x ${this.quantity} / Total = ${this.price * this.quantity}€`
  }
}

export default Product