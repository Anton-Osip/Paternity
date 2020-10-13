// const header = document.querySelector('.header');
// const bannerSection = document.querySelector('.banner__section');
// const headerHeight = header.clientHeight;
// const bannerSectionHeight = bannerSection.clientHeight;

// let timerId = setInterval(headerScroll, 100);

// function headerScroll () {
//      let scrollHeight = window.pageYOffset;
//      if(scrollHeight >= bannerSectionHeight-235){
//           header.classList.add('header__scroll')
//      }else{
//           header.classList.remove('header__scroll')
//      }
//      console.log(scrollHeight);
// }


const headerMenu = document.querySelector('.header__menu');
const headerWrapper = document.querySelector('.header__wrapper');

headerMenu.addEventListener('click',()=>{
     headerWrapper.classList.toggle('header__wrapper--active');
     headerMenu.classList.toggle('header__menu--active');
})