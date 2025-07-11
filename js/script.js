const selectElement = function (element) {
    return document.querySelector(element);
}


let menuToggle = selectElement('.menu-toggle');
let itemButton = selectElement('.nav-list');
let body = selectElement('body');

// Abrir y cerrar el menú al hacer clic en el icono de menú
menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
})

// Cerrar el menú al hacer clic en un enlace
itemButton.addEventListener('click', function () {
    body.classList.remove('open');
})