let exit = false
// Variable que define el flujo de la aplicación

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
    if (!cart.hasDiscount()) {
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
      Descuento aplicado: ${cart.getDiscount()}
      Total: ${cart.getTotal()}€`)
    }
  }
}

const cart = new Cart()

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

const addDiscount = () => { // Se aplica un descuento al carrito
  if (cart.hasDiscount()) { //Solo puede haber un descuento
      alert("El carrito ya tiene un descuento añadido, se eliminará el descuento anterior.")
  }

  const getType = () => { // Obtenemos el tipo de descuento
    let selection = prompt ("El descuento es plano o un porcentaje? Responda 'S' si es plano, 'N' si es un porcentaje")
    switch (selection) {
      case 'S':
        return true
      case 'N':
        return false
      default:
        alert('Introduzca una opción válida')
        return getType()
    }
  }

  const getValue = () => { // Valor del descuento
    let price = parseFloat(prompt("Indique el descuento a continuación."))
    if (isNaN(price)) {
      alert("El valor introducido para el descuento no es correcto, introduzca un número válido")
      return -1
    } else {
      return price
    }
  }

  const isFlat = getType()
  const discount = getValue()
  if (!isFlat && discount > 95) {
    alert("El descuento en porcentaje no puede ser superior al 95%")
    addDiscount()
  } else {
    cart.addDiscount (isFlat, discount)
  }
}

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

const getAction = () => {
  // Damos las opciones de las posibles acciones a realizar
  alert("¿Qué quieres hacer?")
  const option = parseInt(prompt("0: Salir. 1: Añadir un producto al carrito. 2: Aplicar un descuento. 3: Vaciar el carrito. 4: Ver el contenido del carrito. 5. Añadir varios productos."))
  switch (option) {
    case 0:
      exit = true
      break;
    case 1:
      addProduct()
      break;
    case 2:
      addDiscount()
      break;
    case 3:
      cart.empty()
      break;
    case 4:
      cart.showItems()
      break;
    case 5:
      addSeveralProducts()
      break;
    default:
      alert("La opción seleccionada no está disponible.")
      getAction()
      break;
  }
}

const main = () => {
  do { //Mientras no se pulse salir, el programa sigue trabajando
    if (cart.isEmpty()) {
      alert ("El carrito está vacío.")
      getAction()
    } else {
      cart.showItems()
      getAction()
    }
  } while (!exit)
}

main()

