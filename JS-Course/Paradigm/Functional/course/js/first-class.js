// First Class
console.log("--------------First Class------------------");

const greet = function(salutation){
    return function(firstName){
        return `${salutation} - ${firstName}`;
    }
}
const howdy = greet('howdy');
console.log(howdy('Bob'));

console.log("-------------Decrarative Programming------------------");
// Decrarative Programming
const number = [1,2,3,4,5,6];
const output = item => console.log(item);
number.forEach(output);
console.log("-------------Pure Function------------------");
// Pure Function: don't cause side effect 
function add(x,y){
    return x+y;
}
console.log(add(2,2)); // 4

console.log("-------------Impure Function------------------");

// Impure Function: cause side effect when called;
function add2(x,y){
    console.log(x+y);
    return x+y;
}
add2(2,2); // 4
console.log("-------------Immutability------------------");
const person = {
    name : 'Elijah'
}

console.log(person.name);
person.name = "Ghad";
//  This construct an Object hat Can not be Mutated
Object.freeze(person);
person.name = "hh";
console.log(person.name);
const indexes = Object.freeze([0,1,2,3,4,5,6,7,8,9]);
function addElement(arr){
    return Object.freeze([...arr,arr.length]);
}
console.log(addElement(indexes));
/*
console.log("---------Composing Dom Method------------------");
const try_it = (new Element('div'))
                .addClass("css-class")
                .addClass("another-class")
                .append(new Text('Content - to - be - displayed'));
console.log(try_it)
*/