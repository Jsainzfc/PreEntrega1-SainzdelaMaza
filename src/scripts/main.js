import Cart from "./Cart.js" // Objeto que define el carrito y sus métodos
import { addProduct, addSeveralProducts } from "./manageProducts.js"
import { addDiscount } from "./manageDiscounts.js"

let exit = false
// Variable que define el flujo de la aplicación

const cart = new Cart()

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

