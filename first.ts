let a = 5;
let b = 5;
let c = a + b;

console.log(c);

let myVar : any = "It'seme, Mario!";

let num: number = 5;

if (true) {         
    let name: string = 'Mario';
    console.log(name)
  }

let isPresent: boolean = true;

class Dog {

    //fields:
    breed: String;
    legs: Number;
    isHealthy: Boolean;

    constructor(breed: String, legs: Number, isHealthy: Boolean) {
        this.breed = breed;
        this.legs = legs;
        this.isHealthy = isHealthy;
    }

    displayBreed(): void {
        console.log(`I am a ${this.breed}`);
    }
}

const Ringo = new Dog('Mallorqin Sheperd', 4, false);
Ringo.displayBreed();

const Ginger = new Dog('Australian Sheperd', 4, false);
Ginger.displayBreed();

interface IDog {

    breed: String,
    legs: Number,
    isHealthy: Boolean,
    displayBreed(): void

}