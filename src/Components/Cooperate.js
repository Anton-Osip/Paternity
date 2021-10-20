class Cooperate {
	element = ''
	trans = 0
	slide = [
		'image1.png',
		'image2.png',
		'image3.png',
		'image4.png',
		'image1.png',
		'image2.png',
		'image3.png',
		'image4.png',
		'image1.png',
		'image2.png',
		'image3.png',
		'image4.png',
	]
	create() {
		this.element = document.createElement('section')
		this.element.classList.add('cooperate')
		this.element.classList.add('section')
		this.element.id = 'cooperate'
	}
	render() {
		document
			.querySelector('.main')
			.insertAdjacentElement('beforeend', this.element)
		this.element.innerHTML = `
            <div class="container">
                <h1 class="title cooperate__title">С нами сотрудничают</h1>
                <div class="slider">
                    <button class="slider__btn slider__btn-prev">&lt;</button>
                    <div class="slider__wrapper">
                        <div class="slider__lines"></div>   
                    </div>
                    <button class="slider__btn slider__btn-next">&gt;</button>
                </div>
            </div>`
		this.createSlides()
		document
			.querySelector('.slider__btn-prev')
			.addEventListener('click', () => {
				this.sliderPrev()
			})
		document
			.querySelector('.slider__btn-next')
			.addEventListener('click', () => {
				this.sliderNext()
			})
	}
	createSlides() {
		this.slide.forEach(item => {
			document.querySelector('.slider__lines').insertAdjacentHTML(
				'beforeend',
				`
                <div class="slide">
                    <img class="slide__img" src="./${item}" alt="Спонсоры">
                </div>
            `
			)
		})
	}
	calculatingScreenWidth() {
		let width = document.querySelector('.cooperate').offsetWidth
		return width > 926 ? 4 : width > 726 ? 3 : width > 524 ? 2 : 1
	}
	sliderNext() {
		let sliderLine = document.querySelector('.slider__lines'),
			slide = document.querySelector('.slide').offsetWidth,
			mult = this.calculatingScreenWidth()
		if (this.trans > (-this.slide.length + mult) * slide) {
			this.trans -= slide
			sliderLine.style.transform = `translateX(${this.trans}px)`
		}
	}

	sliderPrev() {
		let sliderLine = document.querySelector('.slider__lines'),
			slide = document.querySelector('.slide').offsetWidth
		if (this.trans !== 0) {
			this.trans += slide
			sliderLine.style.transform = `translateX(${this.trans}px)`
		}
	}
	init() {
		this.create()
		this.render()
	}
}
export default new Cooperate().init()
