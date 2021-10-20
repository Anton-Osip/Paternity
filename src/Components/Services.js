class Services{
    element = '';
    cards = [
        {
            title:"«Юридический адрес»",
            price:"30 руб./мес.",
            list:["Предоставление юридического адреса."]
        },
        {
            title:"«Регистрация»",
            price:"100 руб.",
            list:["Предоставление юридического адреса;","Подготовка пакета документов, необходимых для регистрации."]
        },
        {
            title:"«Бухгалтерское оформление»",
            price:"120 руб.",
            list:["Бухгалтерское оформление;",
                "Регистрация в налоговой инспекции;",
                "Регистрация в социальном страховании;",
                "Открытие счета в банке;",
                "Изготовление печати;",
                "Приобретение и регистрация книг учета."
            ]
        },
        {
            title:"«Юридическое обеспечение»",
            price:"100 руб.",
            list:["Подготовка пакета необходимых договоров для деятельности предприятия."]
        },
        {
            title:"«Регистрация+»",
            price:"180 руб.",
            list:["Юридическое и бухгалтерское оформление;",
                "Предоставление юридического адреса;",
                "Подготовка документов для регистрации;",
                "Согласование наименования предприятия;",
                "Подача документов на регистрацию предприятия нашим специалистом;",
                "Регистрация в налоговой инспекции;",
                "Регистрация в социальном страховании;",
                "Открытие счета в банке;",
                "Изготовление печати;",
                "Приобретение и регистрация книг учета;",
                "Подготовка пакета необходимых договоров для деятельности предприятия."
            ]
        },
        {
            title:"«Сопровождение»",
            price:"от 100 руб./мес.",
            list:[
                "Юридическое и бухгалтерское сопровождение деятельности предприятия;",
                "Подготовка пакета необходимых договоров для деятельности предприятия;",
                "Бухгалтерский учет деятельности предприятия."
            ]
        }
    ]
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
        this.cards.forEach((card, index) => {
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