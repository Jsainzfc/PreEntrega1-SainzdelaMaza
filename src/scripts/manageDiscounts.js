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

export {addDiscount}