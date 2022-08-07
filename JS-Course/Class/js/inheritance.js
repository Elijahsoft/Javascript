class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    describe(){
        console.log(`Hi ! I am ${this.name} and am ${this.age} years old!`)
    }
}
class Programmer extends Person{
    constructor(_name,_age,_yearsOfExperience){
        super(_name,_age);
        // Custom Behavior
        this.yearsOfExperience = _yearsOfExperience;
    }
    code(){
        console.log(`${this.name} is coding`)
    }
}
let programmers = [
    new Programmer("Jibuh",14,0),
    new Programmer("Elijah",17,3)
]
function developSoftware(programmers){
for (let programmer of programmers){
    programmer.code();
}
}
developSoftware(programmers)