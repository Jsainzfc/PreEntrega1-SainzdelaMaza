import Product from "./Product" // Objeto que define el producto y sus métodos

const addProduct = () => { // función para añadir un producto al carrito

  const getName = () => { // Nombre del producto
    return  prompt("Indique el nombre del producto.")
  }

  const getPrice = () => { // Precio del producto
    let price = parseFloat(prompt("Indique el precio a continuación."))
    if (isNaN(price)) {
      alert("El valor introducido para el precio no es correcto, introduzca un número válido")
      return -1
    } else {
      return price
    }
  }

  const getTax = () => { // Valor del impuesto
    let tax = parseFloat(prompt("Indique el impuesto a continuación."))
    if (isNaN(tax)) {
      alert("El valor introducido para el impuesto no es correcto, introduzca un número válido")
      return -1
    } else {
      return tax
    }
  }

  const getQuantity = () => { // Número de unidades
    let quantity = parseFloat(prompt("Indique la cantidad de vecez que quiere añadir este producto."))
    if (isNaN(quantity)) {
      alert("La cantidad no es válida, introduzca un valor correcto.")
      return -1
    } else {
      return quantity
    }
  }

  const name = getName()
  let price = -1
  let tax = -1
  let quantity = -1

  do {
    price = getPrice()
  } while (price < 0)

  do {
    tax = getTax()
  } while (tax < 0)

  do {
    quantity = getQuantity()
  } while (quantity < 0)

  const product = new Product(name, price, tax, quantity)
  cart.addItem(product)
}

const addSeveralProducts = () => {
  const getQuantity = () => { // Número de unidades
    let quantity = parseFloat(prompt("Indique el número de productos a añadir."))
    if (isNaN(quantity)) {
      alert("La cantidad no es válida, introduzca un valor correcto.")
      return -1
    } else {
      return quantity
    }
  }
  const quantity = getQuantity()
  for (let i = 1; i <= quantity; i++) {
    addProduct()
  }
}

export {addProduct, addSeveralProducts}