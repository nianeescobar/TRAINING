export class View {
    constructor(el) {
        this.el = el;
    }
    
    render(data) {
        this.el.innerHTML = this.getContent(data)
    }
    
    getContent(data) {
        throw new Error("implemente esse metodo na classe filha")
    }
    
}