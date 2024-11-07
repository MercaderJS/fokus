const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');

// funcion de cambio de imagen
const cambiarContexto = (contexto) => { 
   let imagen = document.querySelector('.app__image');
      imagen.setAttribute('src',`./imagenes/${contexto}.png`);
      html.setAttribute('data-contexto',contexto);

}


botonEnfoque.addEventListener('click', () => {
   cambiarContexto('enfoque');
})

botonDescansoCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');

})

botonDescansoLargo.addEventListener('click', () => {
   cambiarContexto('descanso-largo');
})