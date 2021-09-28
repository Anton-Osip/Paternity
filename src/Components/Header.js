class Header{
    element = '';

    creat(){
        this.element = document.createElement('header');
    };
    
    render(){
        this.element.classList.add('header');
        document.getElementById('app').insertAdjacentElement('beforeend', this.element);

        this.element.innerHTML = `
            <div class="container">
                <div class="header__container">
                    <div class="header__big-logo header__logo">
                        <img src="./big-logo.png" alt='Социально-просветительское учреждение "ОТЦОВСТВО"'>
                    </div>
                    <div class="header__small-logo header__logo">
                        <img src="./small-logo.png" alt='Социально-просветительское учреждение "ОТЦОВСТВО"'>
                    </div>
                    <nav class="header__nav">
                        <ul class="header__list">
                            <li class="header__item">
                                <a href="#" class="header__link active">
                                    Услуги
                                </a>
                            </li>
                            <li class="header__item">
                                <a href="#" class="header__link">
                                    О нас
                                </a>
                            </li>
                            <li class="header__item">
                                <a href="#" class="header__link">
                                    Процесс работы
                                </a>
                            </li>
                            <li class="header__item">
                                <a href="#" class="header__link">
                                    Клиеты
                                </a>
                            </li>
                            <li class="header__item">
                                <a href="#" class="header__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                        <div class="header__contacts">
                            <div class="header__phons">
                                <a href="tel:+375173648812" class="header__phone">+ 375 17 364-88-12</a>
                                <a href="tel:+375172700295" class="header__phone">+ 375 17 270-02-95</a>
                                <div class ="header__main-contacts">
                                    <a href="tel:+375293577377" class="header__main-phone">+ 375 29 357-73-77</a>
                                    <a href="#" class="header__telegram"></a>
                                    <a href="#" class="header__viber"></a>
                                </div>
                            </div>
                            <div class="header__mails">
                                <a href="mailto:info@komplex.by" class="header__mail">info@komplex.by</a>
                            </div>
                            
                        </div>
                    </nav>
                    <button class="header__btn btn">Получить консультацию</button>	
                    <div class="header__burger-menu">
                        <div class="header__line"></div>
                    </div>
                </div>
            </div>`;
    };
    burgerMenu(){
        const headerNav = document.querySelector('.header__nav'),
            headerBurgerMenu = document.querySelector('.header__burger-menu');

        headerBurgerMenu.addEventListener('click',()=>{
            headerBurgerMenu.classList.toggle('active');
            headerNav.classList.toggle('active');
        });
    };
    scrollDown(){
        const header = document.querySelector('.header'),
            banner = document.querySelector('.banner');
        window.addEventListener('scroll',()=>{
            if(header.offsetWidth>984 && window.scrollY>banner.offsetHeight/2){

                header.classList.add('header__scroll');
            }else{
                header.classList.remove('header__scroll');
            }

            
        });
        
    };
    init(){
        this.creat();
        this.render();
        this.burgerMenu();
        // this.scrollDown()
    };
}

export default new Header().init()