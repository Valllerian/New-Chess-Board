import Pieces from  "./pieces.js"

export default class Square {
    constructor({board, rank, file, isOdd, index}){
        this.board = board;
        this.rank = rank;
        this.file = file;
        this.index = index;
        this.element = document.createElement(`div`);
        this.element.classList.add(`square`);
        if (isOdd){
            this.element.classList.add('odd');
        }
        this.element.textContent = `${file}${rank}`
        this.element.setAttribute(`data-rank`, rank);
        this.element.setAttribute(`data-file`, file);
        this.update();
        
    }
    update(){
        // displaying pieces in initial squares;
        const current = this.board.getSquare(this.index);
        
       if(current){
           const imageUrl = Pieces[`${current.color}${current.type}`];
        //    if image is available - display;
           if(imageUrl){
               const image = document.createElement('img');
               image.src = imageUrl;
               this.element.textContent = '';
               this.element.append(image);
           }else{
               this.element.textContent = current.type;
           }
       }else {
        this.element.textContent = '';
       };
       
    }
}