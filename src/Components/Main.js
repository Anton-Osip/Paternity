class Main{
    element = '';
    
    create(){
        this.element = document.createElement('main');
        this.element.classList.add('main');
    }
    render(){
        document.getElementById('app').insertAdjacentElement('beforeend', this.element);
    };
    init(){
        this.create();
        this.render();
    };
};
export default new Main().init();