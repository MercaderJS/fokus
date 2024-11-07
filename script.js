const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');

// funcion de cambio de contexto
const cambiarContexto = (contexto) => { 
   let imagen = document.querySelector('.app__image');
      imagen.setAttribute('src',`./imagenes/${contexto}.png`);
      html.setAttribute('data-contexto',contexto);
      botones.forEach(contexto => {
         contexto.classList.remove('active');
      });
      

      // cambio de texto segun contexto
      switch (contexto) {
         case 'enfoque': 
               titulo.innerHTML = `
                    Optimiza tu productividad,<br>
                  <strong class="app__title-strong" >sumérgete en lo que importa.</strong>
               `
            break;
         case 'descanso-corto':
               titulo.innerHTML = `
                  Toma un respiro,<br>
                <strong class="app__title-strong" >Haz una pausa corta</strong>
               `
            break;
         case 'descanso-largo':
               titulo.innerHTML = `
                  Hora de volver a la superficie,<br>
                <strong class="app__title-strong" >Haz una pausa larga</strong>
               `
            break;
         }

}


botonEnfoque.addEventListener('click', () => {
   cambiarContexto('enfoque');
   botonEnfoque.classList.add('active');
   
})

botonDescansoCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
    botonDescansoCorto.classList.add('active');

})

botonDescansoLargo.addEventListener('click', () => {
   cambiarContexto('descanso-largo');
   botonDescansoLargo.classList.add('active');

})