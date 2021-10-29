
import Square from "./Square.js";

const files = ['A', 'B', 'C','D', 'E', 'F','G', 'H'];

export default class Board{
    // if we pass in the selector id = board it will automatically generate itself;
    constructor({selector, dimensions}){
        this.element = document.querySelector(selector);
        this.cells = [];
        this.element.classList.add('board');
        this.dimensions = dimensions;
        this.init();
    }
    init(){
        if(this.dimensions){
            this.element.style.width =  this.dimensions.width;
            this.element.style.height =  this.dimensions.height;
        }else {
            // vmin set to 90 so its not right next to the edge of the window;
            // vmin is height\width of the viewport whichever is smaller
            const size =  `90vmin`;
            this.element.style.width = size;
            this.element.style.height = size;
        }
        this.cells = Array.from({length: 64}, (_, index) =>{
            // ranks are rows
            const rank = Math.ceil(index / 8);
            // files are columns
            const file = files[index % 8];
            const cell =  new Square({
                rank, 
                file,
            })
            this.element.appendChild(cell.element);
            return cell;
        });
    }
}