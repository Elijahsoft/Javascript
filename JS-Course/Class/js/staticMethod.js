class Square {
    constructor(_width){
        this.width = _width
        this.height = _width
    }
    static equals(a,b){
        return a.width * a.height === b.width * b.height;
    }
    static isValidDimension(width , height){
        return width === height;
    }

}
const square1 = new Square(9);
const square2 = new Square(9);
console.log(square1);
console.log(Square.equals(square1,square2));
console.log(Square.isValidDimension(2,1));