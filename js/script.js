let hamburger = document.querySelector('.header__hamburguer');
let enlaces = document.querySelector('.header__enlaces');
hamburger.addEventListener('click', ocultarMostrar);

function ocultarMostrar(){
     if(enlaces.classList.contains('mostrar')){
          enlaces.classList.remove('mostrar');
     }else{
          enlaces.classList.add('mostrar');
     }
}