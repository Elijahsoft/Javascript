/* -------- Important Nb Dta about js classes
*   They Have instance Properties : what they have 
*  like : name,age,height
*  
*   They Have instance method : what they do
*  like : jump ,walk,dance ,etc
*/
class Rectangle {
    constructor (_width,_height,_color){
        console.log('Rectangle is created');
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
    getArea(){
        return  this.width * this.height;
    }
    printDescription(){
        console.log(`I am a Rectangle of ${this.width} X ${this.height} and am ${this.color} colored`);
    }
}
const rec1 = new Rectangle(5,3,"Blue");
const rec2 = new Rectangle(3,2,"green");
console.log(rec1)
console.log("Area of rectangle1 is "+ rec1.getArea())
console.log(rec2)
console.log("Area of rectangle2 is "+ rec2.getArea())
rec1.printDescription();