export default class Board{
    // if we pass in the selector id = board it will automatically generate itself;
    constructor({selector, dimensions}){
        this.element = document.querySelector(selector);
        this.element.classList.add('board');
        if(dimensions){
            this.element.style.width =  dimensions.width;
            this.element.style.height =  dimensions.height;
        }else {
            // vmin set to 90 so its not right next to the edge of the window;
            // vmin is height\width of the viewport whichever is smaller
            this.element.style.width =  `90vmin`;
            this.element.style.height = `90vmin`;
        }
    }
}