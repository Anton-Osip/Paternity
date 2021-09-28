class Services{
    element = '';
    create(){
        this.element = document.createElement('section');
        this.element.classList.add('services');
        this.element.classList.add('section');
        this.element.id = 'services';

    };
    render(){
        document.querySelector('.main').insertAdjacentElement('beforeend', this.element);
        this.element.innerHTML = `
            <div class="container">
                <h1 class="title services__title">Услуги</h1>
                <div class="services__row">
                    
                </div>
            </div>`
            this.createCard();
    }
    createCard(){
        let cards = JSON.parse(localStorage.getItem('cards'));

        cards.forEach((card, index) => {
            let cardItem = '' ;
            card.list.forEach(item=>{cardItem +=`<p class="card__item">${item}</p>`})
            
            document.querySelector(".services__row").insertAdjacentHTML('beforeend',`
                <div class="card">
                    <div class='card__wrapper'>
                        <p class="card__complex">Комплекс ${index+1}</p>
                        <h1 class="card__title">${card.title}</h1>
                        <div class="card__list">
                            ${cardItem}
                        </div>
                        <div class="card__bottom">
                            <p class="card__price">${card.price}</p>
                            <button class="card__btn btn">заказать комплекс</button>
                            <div class="card__arrow"></div>
                        </div>
                    </div>
                </div>
            `);
        });     
        const servicesRow = document.querySelector('.services__row');
        servicesRow.addEventListener('click', (e)=>{
            if(e.target.classList.contains('card__arrow')){
                this.toogleItem(e.target);
            };
        });   
    }
    toogleItem(arrow){
        let card = arrow.closest('.card'),
            list = card.querySelector('.card__list'),
            cardWrapper = card.querySelector('.card__wrapper'),
            cardBtn = card.querySelector('.card__btn');
        
        if(list.classList.contains('open')){
			let animate = list.animate([
				{ height: list.clientHeight + 'px' },
				{ height: 0 }
			], { duration: 500 });

			animate.addEventListener('finish', function(){
				list.classList.remove('open');
                cardWrapper.classList.remove('open');
                cardBtn.classList.remove('visibil');
			});
		}
		else{
			list.classList.add('open');
            cardWrapper.classList.add('open');
            cardBtn.classList.add('visibil');
			list.animate([
				{ height: 0 },
				{ height: list.clientHeight + 'px' }
			], { duration: 500 });
		};
    };
    
    init(){
        this.create();
        this.render();
    };

}
export default new Services().init();