# PreEntrega2-SainzdelaMaza

PreEntrega 2 curso javascript Coderhouse

## Objetivo del proyecto

Creación de una tienda online. El alcance final será una tienda capaz de calcular el total de artículos comprados, los impuestos del pedido, el precio del envío en función de la ubicación y número de productos, así como un carrito funcional.
Conseguir un menú de categorías que actúe como filtro de los productos.

## Base del proyecto

El proyecto se basa en el proyecto final entregado en el curso de Desarrollo Web de Coderhouse finalizado unas semanas antes de comenzar este nuevo curso.

Aunque este proyecto cuenta con varias páginas, todos los esfuerzos se centrarán en la página de Tienda Gráfica por ahora.

El HTML y CSS están montados.

## Alcance de preEntrega1

En esta pre entrega se realizará un prototipo con un alcance limitado. Mediante alerts y prompts se añadirán productos al carrito. El carrito irá realizando la suma de los productos. Calculará el impuesto (si los productos no tienen impuesto establecido se dará por defecto un 21%).

Aunque está incorporado en una página funcional, por ahora no hay interacción entre HTML/CSS y Javascript. El prototipo de javascript funciona mediante la consola, alerts y prompts.

El resto de páginas de HTML pueden ser ignoradas por ahora.

## Alcance de preEntrega2

En esta pre entrega se mejorará el prototipo de la primera preEntrega aplicando las mejoras sugeridas en los comentarios de la corrección de la primera pre-entrega, haciendo uso de Classes (Objetos) y arrays, y mejorando el orden y limpieza del prototipo. La funcionalidad en sí no se ha modificado, únicamente se ha mejorado.

## Alcance de esta preEntrega

En esta pre entrega vamos a trabajar en que el prototipo comience a interactuar con el HTML. Va a haber primero dos cambios fundamentales en el HTML:

Se va a solicitar en primer lugar que el usuario se identifique como comprador o propietario de la tienda. Esto es una simplificación ya que se hará mediante un simple botón, en un futuro esto se hará mediante autenticación.

- El propietario podrá: añadir productos, eliminarlos, cambiarles el precio y añadir descuentos. Para simplificar, el propietario no va a añadir imagen del producto sino que simplemente va a cogerse una imagen genérica. Los productos añadidos se guardarán en el Session Storage por ahora. El objetivo final sería conectar el prototipo con una base de datos.
- 
- El comprador podrá añadir y eliminar productos del carrito. Visualizar el carrito y cerrarlo pulsando el botón de carrito.

Algunas funcionalidades previas se han eliminado: como la gestión de impuestos. Para poder dedicar más tiempo a pontenciar la posibilidad de añadir productos y descuentos por parte del propietario.