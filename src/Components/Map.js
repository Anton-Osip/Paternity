class Map {
	element = ''
	create() {
		this.element = document.createElement('section')
		this.element.classList.add('map')
		this.element.id = 'map'
	}
	render() {
		document
			.querySelector('.main')
			.insertAdjacentElement('beforeend', this.element)
		this.element.innerHTML = `
        <img class="map__img"src="./map.png"/>
            `
	}
	init() {
		this.create()
		this.render()
	}
}

export default new Map().init()
