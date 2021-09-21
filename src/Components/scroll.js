class Scroll{
	constructor(){

	}
	headerTop(){
		let header = document.querySelector('.header'),
		banner = document.querySelector(".banner")
		if(header.clientWidth>950 && window.scrollY>banner.clientHeight/2){
			header.classList.add('header__scrolll')
		}else{
			header.classList.remove('header__scrolll')

		}
	}
	init(){
		window.addEventListener('scroll',this.headerTop)
		
	}
}
const scroll = new Scroll().init();
export { scroll }