class Footer {
	element = ''
	create() {
		this.element = document.createElement('footer')
		this.element.classList.add('footer')
		this.element.id = 'footer'
	}
	render() {
		document
			.querySelector('.main')
			.insertAdjacentElement('beforeend', this.element)
		this.element.innerHTML = `
            <div class="container footer__container">
                <p class="footer__left">
                    Юридическая информация
                </p>
                <div class="footer__right">
                    Юридическая информация
                    <img class='footer__logo' src="./footer.png"
                </div>

            </div>
            `
	}
	init() {
		this.create()
		this.render()
	}
}

export default new Footer().init()
