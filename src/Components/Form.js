class Form {
	element = ''
	create() {
		this.element = document.createElement('section')
		this.element.classList.add('contacts')
		this.element.classList.add('section')
		this.element.id = 'contacts'
	}

	render() {
		document
			.querySelector('.main')
			.insertAdjacentElement('beforeend', this.element)

		this.element.innerHTML = `
            <div class="container">
                <div class='contacts__wrapper'>
                    <div class='contacts__inputs'>
						<h1 class="contacts__title title">Хотите оформить бизнес?</h1>
						<p class="contacts__subtitle">Свяжитесь с нами по телефону/почте или оставьте заявку, и мы свяжемся с вами самостоятельно.</p>
						<form class="contacts__form">
							<input class="contacts__input" type="text" name="name" placeholder="Имя" required
	>
							<input class="contacts__input" type="tel" name="tel" placeholder="Телефон*" required
	>
							<input class="contacts__input" type="text" name="email" placeholder="Почта*" required>
							<input class="contacts__input-messege contacts__input" type="text" name="masseg" placeholder="Сообщение">
							<button class="contacts__btn btn" type="submit">Отправить заявку</button>
						</form>
                    </div>
                    <div class='contacts__contact'>
						<h2 class="contact__title">Звоните</h2>
						<a href="tel:+375173648812" class="contact__phone">+ 375 17 364-88-12</a>
                        <a href="tel:+375172700295" class="contact__phone">+ 375 17 270-02-95</a>
						<a href="tel:+375293577377" class="contact__phone last">+ 375 29 357-73-77</a>
						<h2 class="contact__title">Пишите</h2>
						<a href="mailto:info@komplex.by" class="contact__mail">info@komplex.by</a>
						<h2 class="contact__title">Приезжайте</h2>
						<a href="ул. Шпилевского, 57" class="contact__adress">ул. Шпилевского, 57</a>
					</div>
                </div>
            </div>
        `
	}
	init() {
		this.create()
		this.render()
	}
}

export default new Form().init()
