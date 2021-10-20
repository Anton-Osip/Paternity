let menu = document.querySelector('.header__list')
let links = menu.querySelectorAll('.header__link')
let scrollTimeout

window.addEventListener('scroll', function () {
	clearTimeout(scrollTimeout)
	scrollTimeout = setTimeout(onScroll, 200)
})

menu.addEventListener('click', function (e) {
	let link = e.target

	if (link.classList.contains('menu__link')) {
		e.preventDefault()
		scrollToTarget(link.hash)
	}
})

if (location.hash !== '') {
	scrollToTarget(location.hash)
}

function scrollToTarget(id) {
	let target = document.querySelector(id)

	if (target !== null) {
		let pos = target.offsetTop - 70

		window.scrollTo({
			top: pos,
			behavior: 'smooth',
		})
	}
}

function onScroll() {
	let pos = window.pageYOffset

	for (let i = links.length - 1; i >= 0; i--) {
		let link = links[i]
		let target = document.querySelector(link.hash)

		if (pos + window.innerHeight / 2 > target.offsetTop) {
			menu.querySelector('.active').classList.remove('active')
			link.classList.add('active')
			break
		}
	}
}
