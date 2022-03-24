/* Sélection des éléments HTML */
let link = document.getElementById('sun-menu-link')
let burger = document.getElementById('sun-menu-burger')
let ul = document.getElementById('sun-burger-ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})