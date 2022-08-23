class NumberModel {
    constructor(){
        this.number = 0;
        this.color = "red";
        this.observer = [];
            }
   increment(){
       const colors = ["blue","green","cyan","magenta","chocolate","yellow","black"];
        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.notifyObserer()
     }
     addObserver (o){
         this.observer.push(o)
     }
     notifyObserer(){
         for(let o of this.observer){
             o.update(this)
         }
     }
}
class ElementObserver{
    constructor(elementId){
        this.element = document.getElementById(elementId)
    }
    update(newColor){
        this.element.innerHTML = newColor.number;
        this.element.style.backgroundColor = newColor.color
    }
}