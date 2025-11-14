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

let database = {
  getStudent(name) {
    return 4201576;
  }
};

class Student {
  #firstName;
  #lastName;
  #track;
  static counter = 0

  static showCounter() {
    console.log(`We have created ${Student.counter} students!`)
  }
  constructor(firstName, lastName, track) {

    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#track = track;
    Student.counter += 1
  }

  get name() {
    return [this.firstName, this.lastName];
  }

  get firstName() {
    return this.#firstName
  }

  get lastName() {
    return this.#lastName
  }

  get track() {
    return this.#track
  }

  set track(newTrack) {
    switch (newTrack) {
      case 'javaScript':
      case 'Python':
      case 'Ruby':
        this.#track = newTrack
        break;
      default:
        throw new Error(`Invalid track: ${newTrack}`)
    }
  }
}

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age; // Call the setter to validate data
  }

  set age(age) {
    if (typeof(age) === 'number' && age > 0) {
      this.#age = age;
    } else {
      throw new RangeError('Age must be positive');
    }
  }

  showAge() {
    console.log(this.#age);
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

try {
  person.age = -5;
  // The following line will not run
  person.showAge();
} catch (e) {
  // The following line will run
  console.log('RangeError: Age must be positive');
}
