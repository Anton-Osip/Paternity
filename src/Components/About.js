class About{
    element = '';
    create(){
        this.element = document.createElement('section');
        this.element.classList.add('about');
        this.element.classList.add('section');
        this.element.id = 'about';
    };
    render(){
        document.querySelector('.main').insertAdjacentElement('beforeend', this.element);
        this.element.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class = "col-lg-5 col-md-5 col-12">
                        <h1 class = "about-left__title">Подразделение «Комплекс» </h1>
                        <p class = "about-left__description">Подразделение «Комплекс» от «СПУ Отцовство» создано 
                        в апреле 2020 года для помощи предпринимателям 
                        по всем юридическим и бухгалтерским вопросам. 
                        Мы обладаем опытом регистрации и сопровождения собственных структурных подразделений и филиалов.
                        </p>
                        <a href="#" class="about-left__links">Подробнее об «СПУ Отцовство»</a>
                        <img src="./img2.jpg" class="about-left__img" />
                    </div>
                    <div class = "col-lg-7 col-md-7 col-12">
                        <img src="./img1.jpg" class="about-right__img" />
                        <h1 class = "about-right__title">Почему мы? </h1>
                        <p class = "about-right__description">Мы – единственная компания, предоставляющая весь спектр услуг по подготовке документов, предоставлению юридического адреса, регистрации, а также бухгалтерскому и юридическому сопровождению по приемлемым ценам с высококвалифицированными специалистами.
                        </p>
                        <button class="about-right__btn btn">Получить консультацию</button>
                    </div>
                </div>
            </div>`
    }
    init(){
        this.create();
        this.render();
    };
}

export default new About().init();