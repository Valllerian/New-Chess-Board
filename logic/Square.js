export default class Square {
    constructor({board, rank, file, isOdd, index}){
        this.rank = rank;
        this.board = board;
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
    }
    update(){
        const current = this.board.getSquare(this.index);
        console.log(current);
    }
}