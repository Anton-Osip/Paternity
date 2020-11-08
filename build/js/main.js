const menu = document.querySelector('.header__menu');
const headerNavContainer = document.querySelector('.header__nav-container');


menu.addEventListener('click',()=>{
     menu.classList.toggle('header__menu--active')
     headerNavContainer.classList.toggle('header__nav-container--active')
})


const header = document.querySelector('.header');
const headerHight = header.clientHeight;

let timerId = setInterval(() => showHeader(), 300);

function showHeader(){
     const windowScroll =  window.scrollY;
     if(windowScroll>=headerHight){
          header.classList.add('header--active')

     }else{
          header.classList.remove('header--active')

     }
}


const cards = document.querySelectorAll('.services__cards');

const arrows = document.querySelectorAll('.services__card-arrow');

function getArrow(e){
     
}


