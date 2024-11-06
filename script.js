const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');


botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
})

botonDescansoCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto');

})

botonDescansoLargo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo');
})

