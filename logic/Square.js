export default class Square {
    constructor({rank,file, isOdd}){
        this.rank = rank;
        this.file = file;
        this.element = document.createElement(`div`);
        this.element.classList.add(`square`);
        if (isOdd){
            this.element.classList.add('odd');
        }
        this.element.textContent = `${file}${rank}`
        this.element.setAttribute(`data-rank`, rank);
        this.element.setAttribute(`data-file`, file);
    }
}