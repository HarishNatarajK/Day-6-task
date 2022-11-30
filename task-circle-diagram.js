//To convert the UML diagram to Typescript class.

class circle {
    constructor(...arr) {
        this.radius = arr[0];
        this.color = arr[1];
    }
    
    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }

    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }

}

let a = new circle()    // => Empty
let b = new circle(9.6) // => Radius : 9.6
let c = new circle(9.6, "red")  // => Radius : 9.6, Color : red
