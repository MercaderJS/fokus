const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');

// funcion de cambio de imagen
const cambiarImagen = (rutaImagen) => { 
   let imagen = document.querySelector('.app__image');
   imagen.setAttribute('src',rutaImagen);

}


botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
    cambiarImagen('./imagenes/enfoque.png')

})

botonDescansoCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto');
    cambiarImagen('./imagenes/descanso-corto.png')

})

botonDescansoLargo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo');
    cambiarImagen('./imagenes/descanso-largo.png')
})

