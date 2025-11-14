class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    )
  }
}

let cocoa = new Cat('Cocoa', 'black', 5);
let leo = new Cat('Leo', 'orange', 3);

class Rectangle {
  constructor(hight, width) {
    this.hight = hight;
    this.width = width;
  }

  area() {
    return this.hight * this.width;
  }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.area());

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side
  }
}

class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }

  checkBatteryLevel() {
    return `${this.brand} ${this.model} has 75% battery remaining.`;
  }

  displayInfo() {
    return `${this.releaseYear} ${this.brand} ${this.model}`;
  }
}

class Vehicles {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log(`The ${this.color} vehicle has accelerated`);
  }

  decelerate() {
    console.log(`The ${this.color} vehicle has decelerated`);
  }

  info() {
    console.log(`The ${this.color} vehicle weighs ${this.weight}`);
  }
}

class Car extends Vehicles {
  constructor(color, weight, plate) {
    super(color, weight);
    this.plate = plate;
  }

  honk() {
    console.log('Honk Honk');
  }

  info() {
    super.info();
    console.log(`Plate: ${this.plate}`);
  }
}

class Boat extends Vehicles {
  dropAnchor() {
    console.log('Anchor has dropped');
  }

  info() {
    console.log(`The ${this.color} boat weighs ${this.weight}`);
  }
}

class Plane extends Vehicles {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  info() {
    console.log(`The ${this.color} plane weighs ${this.weight} and belongs to ${this.airline}`);
  }
}

const car = new Car('red', 1400, 'ABC-123');
car.accelerate();
car.honk();
car.info();

const boat = new Boat('blue', 2000);
boat.dropAnchor();
boat.info();

const plane = new Plane('white', 8000, 'SkyWays');
plane.info();

console.log(car instanceof Car, car instanceof Vehicles);   // true true
console.log(boat instanceof Boat, boat instanceof Vehicles); // true true
