

class Car{

    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;

    }


}


class CarFactory{
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4,'v6','black')
            case 'honda':
                return new Car(2,'v8','white')    
        }
    }
}


const factory = new CarFactory();


console.log(civic);
console.log(cx5);