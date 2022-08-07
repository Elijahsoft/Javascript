class Animal{
    constructor(_name){
        this.name = _name;
    }
    makeSound(){
        console.log("This Is A Generic Animal Sound !");
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound();
        console.log("Woof Woof");
    }
}
const a1 = new Animal("Dev");
const a2 = new Dog("Kelen");
a1.makeSound();
a2.makeSound();