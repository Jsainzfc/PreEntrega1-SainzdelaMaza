// Este módulo exporta todos los métodos para gestionar el flujo de la aplicación.
import { initializeProducts, getUser, setUser } from "./manageStorage.js"
import {initializeBuyerDisplay} from "./buyerDisplay.js"
import { initializeCartListeners } from "./cartDisplay.js"

let user = getUser() // Variable para saber qué tipo de usuario está registrado actualmente en la sesión

// Constantes para los tres bottones que definirán el flujo de la aplicación
const buyerSelector = document.querySelector('.buyer--selector')
const ownerSelector = document.querySelector('.owner--selector')
const switchSelector = document.querySelector('.switch--selector')

// Función para actualizar los botones a mostrar tras inicializar el usuario
const updateButtons = () => {
  buyerSelector.style.display = 'none'
  ownerSelector.style.display = 'none'
  switchSelector.style.display = 'block'
}

// Función al clicar en usuario comprador
const onBuyerClick = () => {
  updateButtons()
  document.querySelector('.buyer').style.display = 'flex'
  setUser ('buyer')
}

// Función al clicar en cambiar de usuario
const onSwitchClick = () => {
  null
}

// Función al clicar en usuario propietario
const onOwnerClick = () => {
  null
}

// Añadimos un control de evento de clicado en los tres botones
buyerSelector.addEventListener('click', onBuyerClick)
ownerSelector.addEventListener('click', onOwnerClick)
switchSelector.addEventListener('click', onSwitchClick)

// Inicializamos los botones a mostrar en función del usuario registrado en el Session Storage
const displayInitialize = () => {
  if (user === 'owner' || user === 'buyer') {
    switchSelector.style.display = 'block'
    document.querySelector(`.${user}`).style.display = 'flex'
  } else {
    buyerSelector.style.display = 'block'
    ownerSelector.style.display = 'block'
  } 
}

const initialize = () => {
  initializeCartListeners()
  displayInitialize()
  initializeProducts()
  initializeBuyerDisplay()
}

export {initialize}