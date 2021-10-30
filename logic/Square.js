import Pieces from  "./pieces.js"

export default class Square {
    constructor({board, rank, file, isOdd, index}){
        this.board = board;
        // ranks are rows
        this.rank = rank;
        // files are columns;
        this.file = file;
        this.index = index;
        this.element = document.createElement(`div`);
        this.element.classList.add(`square`);
        if (isOdd){
            this.element.classList.add('odd');
        }
        
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
               this.element.append(image);
           }else{
               this.element.textContent = current.type;
           }
       }
    //    adding labels for bottom rank A - H
       if (this.rank === 1){
           const label = document.createElement('span');
           label.classList.add('label');
           label.textContent = this.file;
           this.element.append(label);
       }
    //    adding labels for right file 1 - 8
       if (this.file === 'H'){
           const fileLabel = document.createElement('span');
           fileLabel.classList.add('fileLabel');
           fileLabel.textContent = this.rank;
           this.element.append(fileLabel);
       }
    }
}