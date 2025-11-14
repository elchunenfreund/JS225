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
    console.log(`the ${this.color} vehicle has accelerated`)
  }

  decelerate() {
    console.log(`the ${this.color} vehicle has decelerated`)
  }
}

class Car extends Vehicles {
  constructor(color, weight, plate) {
  super(color, weight);
  this.plate = plate;
  }

  honk() {
    console.log('Honk Honk')
  }

  info() {
    console.log(`The ${this.color} car weighs ${this.weight} and has a plate number of ${this.plate}`)
  }
}

class Boat extends Vehicles {
  constructor(color, weight) {
    super(color, weight)
  }

  dropAnchor() {
    console.log(`Anchor has droped`)
  }

  info() {
    console.log(`The ${this.color} car weighs ${this.weight}`)
  }
}

class Plane extends Vehicles {
  constructor(color, weight, airline) {
    super(color, weight)
    this.airline = airline;
  }

  info() {
    console.log(`The ${this.color} plane weighs ${this.weight} and belongs to ${this.airline}`)
  }
}




