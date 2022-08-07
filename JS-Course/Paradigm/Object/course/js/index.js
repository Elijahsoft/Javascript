// Object Literals
/*
    const circle = {
    radius:1,
    location :{
        x:1,
        y:1
    },
    draw: function(){
        console.log('Draw');
    }
    }
*/
// Factory
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}
const circle = createCircle(1);

//  || calling Method width in an object circle.draw();

function Circle(radius){
    this.radius;
    let defaultLocation = {
        x:0,
        y:0
    };
    this.draw = function (){
        console.log("Draw")
    }
    // Redefining Private Properties;
    Object.defineProperty(this,'defaultLocation',{
      get:function(){
        return defaultLocation;
      },
      set:function(value){
        if(!value.x || !value.y)
        throw new Error('Invalid Location');
      }
    })
}
const another = new Circle(2);
// another.defaultLocation;
console.log(another.draw());
//
