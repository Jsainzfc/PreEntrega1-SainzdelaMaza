let total = 0
// Valor inicial del total del carrito
let impuestoTotal = 0
// Valor inicial del total de impuestos del carrito
let salir = false
// Variable que define el flujo de la aplicación

const calcularTotal = (precio) => {
  total = total + precio
}

const calcularImpuesto = (impuesto) => {
  // Esta función devuelve el valor del impuesto por defecto si este no está definido previamente.
  if (impuesto === null) {
    return 0.21 //Valor de impuesto por defecto
  } else {
    return impuesto
  }
}

const aplicarDescuento = (descuento, relativo) => {
  // Aplica un descuento. Si relativo es true, es que el descuento es un porcentaje del precio final.
  // Si relativo es false, el descuento se aplica directamente al precio final.
  let posibleTotal
  let posibleImpuestoTotal
  if (relativo) {
    posibleTotal = total - (total * descuento / 100) // Aplicamos el porcentaje del descuento
    posibleImpuestoTotal = impuestoTotal - (impuestoTotal * descuento / 100)
  } else {
    posibleTotal = total - descuento // Restamos el descuento al total
    posibleImpuestoTotal = impuestoTotal - (descuento * calcularImpuesto)
  }
  if (total < 0) {
    alert("El total no puede ser inferior a 0€. Descuento no aplicado.")
    posibleTotal = 0 //No hay precios negativos, como mucho saldrá gratis
  } else {
    total = posibleTotal
    impuestoTotal = posibleImpuestoTotal
  }
}

const vaciarCarrito = () => {
  // Vaciamos el carrito
  total = 0
}

const productoAñadido = (precio, impuesto) => {
  // Añadimos el producto al total
  impuestoTotal = impuestoTotal + calcularImpuesto (impuesto) * precio / 100
  calcularTotal(precio)
}

const añadirProducto = () => {
  // Pedimos el valor del producto y del impuesto
  const precio = parseFloat(prompt("Indique el precio a continuación."))
  const impuesto = parseFloat(prompt ("Indique el porcentaje de impuesto."))
  productoAñadido(precio, impuesto)
}

const usarDescuento = () => {
  // Pedimos el tipo y el valor del descuento
  let esRelativo
  const tipo = prompt ("El descuento es plano o un porcentaje? Responda 'N' si es plano, 'S' si es un porcentaje")
  switch (tipo) {
    case 'S':
      esRelativo = true
      break;
    case 'N':
      esRelativo = false
      break;
    default:
      esRelativo = false
  }
  const descuento = parseFloat(prompt("Indique el descuento a continuación."))
  if (esRelativo && descuento > 95) {
    alert("El descuento en porcentaje no puede ser superior al 95%")
    usarDescuento()
  } else {
    aplicarDescuento (descuento, esRelativo)
  }
}

const añadirVariosProducts = () => {
  const numeroDeProductos = parseInt(prompt("Introduce el número de productos"))
  for (let i = 1; i <= numeroDeProductos; i++) {
    añadirProducto()
  }
}

const solicitarAccion = () => {
  // Damos las opciones de las posibles acciones a realizar
  alert("¿Qué quieres hacer?")
  const eleccion = parseInt(prompt("0: Salir. 1: Añadir un producto al carrito. 2: Aplicar un descuento. 3: Vaciar el carrito. 4: Ver el contenido del carrito. 5. Añadir varios productos."))
  console.log(eleccion)
  switch (eleccion) {
    case 0: 
      salir = true
      break;
    case 1:
      añadirProducto()
      break;
    case 2:
      usarDescuento()
      break;
    case 3:
      vaciarCarrito()
      break;
    case 4:
      funcionPrincipal()
      break;
    case 5:
      añadirVariosProducts()
      break;
    default:
      alert("La opción seleccionada no está disponible.")
      solicitarAccion()
      break;
  }
}

const funcionPrincipal = () => {
  do { //Mientras no se pulse salir, el programa sigue trabajando
    if (total === 0) {
      alert ("El carrito está vacío.")
      solicitarAccion()
    } else {
      alert (`El carrito tiene un total de ${total}€. Los impuestos del carrito ascienden a ${impuestoTotal}€.` )
      solicitarAccion()
    }
  } while (!salir) 
}

funcionPrincipal()

