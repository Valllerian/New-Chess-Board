import { Chess } from 'https://cdn.skypack.dev/chess.js'

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
        // flat is an array method with a parameter "depth"
        // method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
        // console.log(this.chess.board().flat());
            this.chess = new Chess();
            this.board = this.chess.board().flat();
            this.cells = Array.from({length: 64}, (_, index) =>{
            // ranks are rows
            const rank = 8 - (Math.floor(index / 8));
            // files are columns
            const fileNum = index % 8;
            const file = files[fileNum];
            const isOdd = !(rank % 2 ===  fileNum % 2);
            const cell =  new Square({
                board: this,
                isOdd,
                rank, 
                file,
                index,
            })
            this.element.appendChild(cell.element);
            return cell;
        });
    }
    getSquare(index){
        return this.board[index];
        }
}