class Interactions{
    element = '';
    cards = {
        employees:[
            {
                img:"/people1.jpg",
                name:"Александр Величко",
                position:"Директор учреждения"
            },
            {
                img:"/people2.jpg",
                name:"Константин Пурко",
                position:"Руководитель подразделения"
            },
            {
                img:"/people3.jpg",
                name:"Екатерина Величко",
                position:"Администратор"
            },
            {
                img:"/people4.jpg",
                name:"Павел Величко",
                position:"Бухгалтер"
            },
        ],
        steps:[
            {
                step:1,
                title:"Предварительная беседа",
                text:`Для того, чтобы зарегистрировать бизнес, сначала вам необходимо побеседовать 
                с нашим специалистом, описать деятельность предприятия и высказать свои пожелания.`
            },
            {
                step:2,
                title:"Подготовка документов",
                text:"Мы подготовим и согласуем с вами все необходимые регистрационные документы, предоставим юридический адрес."
            },
            {
                step:3,
                title:"Регистрация бизнеса",
                text:`Согласование наименования предприятия 
                и подача документов на регистрацию, после чего сразу же изготовим печать и откроем счёт в банке.`
            },
            {
                step:4,
                title:"Предоставление бухгалтера",
                text:"На первые три месяца мы предоставим вам вашего персонального бухгалтера, а также шаблоны юридических документов, необходимых для вашего профиля."
            },
        ],
    }
    create(){
        this.element = document.createElement('section');
        this.element.classList.add('interactions');
        this.element.classList.add('section');
        this.element.id = 'interactions';

    };
    render(){
        document.querySelector('.main').insertAdjacentElement('beforeend', this.element);
        this.element.innerHTML = `
            <div class="container">
                <h1 class="title interactions__title">Этапы </h1>
                <div class="interactions__row">
                    <div class="employees__cards"></div>
                    <div class="steps__cards"></div>
                </div>
            </div>`
            this.renderEmployeesCards()
            this.renderStaepsCards()
    }
    renderStaepsCards(){
        this.cards.steps.forEach(item=>{
            document.querySelector(".steps__cards").insertAdjacentHTML('beforeend',`
                <div class="steps__card">
                    <p class="steps__step">
                        Шаг ${item.step}
                    </p>
                    <div class="steps__info">
                        <h3 class="steps__title">${item.title}</h3>
                        <p class="steps__text">${item.text}</p>
                    </div>
                </div>
            `);
        })
    }
    renderEmployeesCards(){
        this.cards.employees.forEach(item=>{
            document.querySelector(".employees__cards").insertAdjacentHTML('beforeend',`
                <div class="employees__card">
                    <div class="employees__img-box">
                        <img class="employees__img" src="${item.img}" alt="Работник изаброженный на фото${item.name}">
                    </div>
                    <div class="employees__info">
                        <h3 class="employees__name">${item.name}</h3>
                        <p class="employees__position">${item.position}</p>
                    </div>
                </div>
            `);
        })
    }
    init(){
        this.create();
        this.render();
    };

}
export default new Interactions().init();