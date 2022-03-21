//  Singleton pattern

let instance = null;

class Car{

    constructor(doors,engine,color){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;

        }else{
            return instance;
        }
        

    }


}

// class SUV extends Car {
//     constructor(doors,engine,color){
//         super(doors,engine,color);
//         this.wheels = 4;
//     }

// }


const civic = new Car(4,'v6',"black");
const cx5 = new Car(4,'v8',"red");

console.log(civic);
console.log(cx5);

//  IF THERE is already a instance of a class it will return that 
