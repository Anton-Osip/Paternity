// const header = document.querySelector('.header');
// const bannerSection = document.querySelector('.banner__section');
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
const headerMainWrapper = document.querySelector('.header__main-wrapper');

headerMenu.addEventListener('click',()=>{
     headerMainWrapper.classList.toggle('header__main-wrapper--active');
     headerMenu.classList.toggle('header__menu--active');
})

