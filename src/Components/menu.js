class Menu{
	constructor(){
        this.burger = document.querySelector(".header__menu");
        this.menu = document.querySelector('.header__mobil-menu')
	}
    clickMenu(){
        this.burger.classList.toggle('header__menu-active')
        this.menu.classList.toggle('header__mobil-menu-active')
    }
	init(){
        this.burger.addEventListener('click',this.clickMenu.bind(this))
    }
}
const menu = new Menu().init();
export { menu }