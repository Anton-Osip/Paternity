class Banner{
    element = '';
    creat(){
        this.element = document.createElement('section');
    };
    
    render(){
        this.element.classList.add('banner');
        document.getElementById('app').insertAdjacentElement('beforeend', this.element);

        this.element.innerHTML = `
            <div class="container">
                <div class="banner__container">
                    <h1 class="banner__title">Регистрация и сопровождение бизнеса</h1>
                    <p class="banner__subtitle">Предоставляем весь комплекс услуг, необходимый для открытия и стартового сопровождения вашего бизнеса.</p>
                    <button class="btn banner__btn">Получить консультацию</button>
                </div>
            </div>
        `;
    };
    init(){
        this.creat();
        this.render();
    };
}

export default new Banner().init()