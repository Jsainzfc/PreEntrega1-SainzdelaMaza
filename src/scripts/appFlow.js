// Este módulo gestiona el flujo de la aplicación.
import { initializeProducts, getUser, setUser } from "./manageStorage.js"
import {  initialize as cartManagerInitialize } from "./cartManager.js"
import { initializeCartListeners } from "./cartDisplay.js"

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
  document.querySelector('.owner').style.display = 'none'
  document.querySelector('.buyer').style.display = 'flex'
  setUser ('buyer')
}

// Función al clicar en cambiar de usuario
const onSwitchClick = () => {
  console.log(getUser())
  if (getUser() === 'buyer') {
    onOwnerClick()
  } else {
    onBuyerClick()
  }
}

// Función al clicar en usuario propietario
const onOwnerClick = () => {
  updateButtons()
  document.querySelector('.owner').style.display = 'flex'
  document.querySelector('.buyer').style.display = 'none'
  setUser ('owner')
}

// Inicializamos los botones a mostrar en función del usuario registrado en el Session Storage
const displayInitialize = () => {
  // Añadimos un control de evento de clicado en los tres botones
  buyerSelector.addEventListener('click', onBuyerClick)
  ownerSelector.addEventListener('click', onOwnerClick)
  switchSelector.addEventListener('click', onSwitchClick)

  if (getUser() === 'owner' || getUser() === 'buyer') {
    switchSelector.style.display = 'block'
    document.querySelector(`.${getUser()}`).style.display = 'flex'
  } else {
    buyerSelector.style.display = 'block'
    ownerSelector.style.display = 'block'
  } 
}

// Realiza todas las labores iniciales de la app
const initialize = () => {
  initializeCartListeners()
  displayInitialize()
  initializeProducts()
  cartManagerInitialize()
}

export {initialize}