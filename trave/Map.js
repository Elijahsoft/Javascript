let number = [1,2,3,3,4,5,6,7,8,9]
let newNum = number.map(function (n) {
    return n*2;
})
console.log(newNum)
let num = [1,2,3,3,4,5,6,7,8,9]
let newnum = num.reduce(function (accumulator,n){
    return accumulator + n;
})
console.log(newnum)
let filterd = number.filter(function (n){
    return n % 2 == 0;
})
console.log(filterd)
const zoo = new Map();
zoo.set('Zebra',5);
zoo.set('Gorilla',3);
zoo.set('Monkey',7);
for (let [key,value] of zoo){
    console.log([key + ":"+ value])
}



const Direction = {
    TOP:"UP",
    DOWN:"DOWN",
    LEFT:"LEFT",
    RIGHT:"RiGHT"
}
function sayDirect(direct){
switch(direct){
    case Direction.TOP:
        console.log("Guess What I'm Heading Up");
        break;
    case Direction.DOWN:
        console.log("Guess What I'm Heading Down");
        break;
    case Direction.LEFT:
        console.log("Guess What I'm Heading Left");
        break;
    case Direction.RIGTH:
        console.log("Guess What I'm Heading Right");
        break;
        default:
        console.log("Stay there");
        break;
   
}
}
sayDirect(Direction.RIGTH)
//----------------------------------------------
console.log(document.body.offsetX)
