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

// class Rectangle {
//   constructor(hight, width) {
//     this.hight = hight;
//     this.width = width;
//   }

//   area() {
//     return this.hight * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     this.side = side
//   }
// }

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

class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.year = year;
  }

  get title() {
    return this.#title
  }

  get author() {
    return this.#author
  }

  get year() {
    return this.#year
  }

  set year(n) {
    if (typeof(n) === 'number' && n >= 1900) {
      this.#year = n
    } else {
      throw new RangeError('Invalid year')
    }
  }
}

class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }

  deposit(n) {
    this.#balance += n;
    this.#checkBalance();
  }

  withdraw(n) {
    if (typeof(n) === 'number' && this.#balance >= n) {
      this.#balance -= n
    } else {
      throw new RangeError('Insufficient funds')
    }
  }
}

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#height = height;
    this.#width = width;
  }

  get width() {
    return this.#width
  }

  get height() {
    return this.#height
  }

  get area() {
    return this.#height * this.#width;
  }

  set width(n) {
    if (typeof(n) === 'number' && n > 0) {
      this.#width = n
    } else {
      throw new RangeError('width must be positive')
    }
  }

  set height(n) {
    if (typeof(n) === 'number' && n > 0) {
      this.#height = n
    } else {
      throw new RangeError('height must be positive')
    }
  }
}

class MathUtils {
  static add(n1, n2) {
    return n1 + n2
  }

  static subtract(n1, n2) {
    return n1 - n2
  }

  static multiply(n1, n2) {
    return n1 * n2
  }

  static divide(n1, n2) {
    if (n2 === 0) {
      throw new RangeError('Division by zero');
    }
    return n1 / n2;
  }
}

console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7));  // 42
console.log(MathUtils.divide(20, 5));   // 4
console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero