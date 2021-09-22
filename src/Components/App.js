class App {
    element = '';

    creat(){
        this.element = document.createElement('div');
    };

    render(){
        this.element.id = 'app';
        document.body.appendChild(this.element);
    };

    init(){
        this.creat();
        this.render();
    };
};

export default new App().init();