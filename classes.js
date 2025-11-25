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

class Rectangle {
  constructor(hight, width) {
    this.hight = hight;
    this.width = width;
  }

  area() {
    return this.hight * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side
  }
}

// class Smartphone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   checkBatteryLevel() {
//     return `${this.brand} ${this.model} has 75% battery remaining.`;
//   }

//   displayInfo() {
//     return `${this.releaseYear} ${this.brand} ${this.model}`;
//   }
// }

// class Vehicles {
//   constructor(color, weight) {
//     this.color = color;
//     this.weight = weight;
//   }

//   accelerate() {
//     console.log(`The ${this.color} vehicle has accelerated`);
//   }

//   decelerate() {
//     console.log(`The ${this.color} vehicle has decelerated`);
//   }

//   info() {
//     console.log(`The ${this.color} vehicle weighs ${this.weight}`);
//   }
// }

// class Car extends Vehicles {
//   constructor(color, weight, plate) {
//     super(color, weight);
//     this.plate = plate;
//   }

//   honk() {
//     console.log('Honk Honk');
//   }

//   info() {
//     super.info();
//     console.log(`Plate: ${this.plate}`);
//   }
// }

// class Boat extends Vehicles {
//   dropAnchor() {
//     console.log('Anchor has dropped');
//   }

//   info() {
//     console.log(`The ${this.color} boat weighs ${this.weight}`);
//   }
// }

// class Plane extends Vehicles {
//   constructor(color, weight, airline) {
//     super(color, weight);
//     this.airline = airline;
//   }

//   info() {
//     console.log(`The ${this.color} plane weighs ${this.weight} and belongs to ${this.airline}`);
//   }
// }

// let database = {
//   getStudent(name) {
//     return 4201576;
//   }
// };

// class Student {
//   #firstName;
//   #lastName;
//   #track;
//   static counter = 0

//   static showCounter() {
//     console.log(`We have created ${Student.counter} students!`)
//   }
//   constructor(firstName, lastName, track) {

//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#track = track;
//     Student.counter += 1
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }

//   get firstName() {
//     return this.#firstName
//   }

//   get lastName() {
//     return this.#lastName
//   }

//   get track() {
//     return this.#track
//   }

//   set track(newTrack) {
//     switch (newTrack) {
//       case 'javaScript':
//       case 'Python':
//       case 'Ruby':
//         this.#track = newTrack
//         break;
//       default:
//         throw new Error(`Invalid track: ${newTrack}`)
//     }
//   }
// }

// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age; // Call the setter to validate data
//   }

//   set age(age) {
//     if (typeof(age) === 'number' && age > 0) {
//       this.#age = age;
//     } else {
//       throw new RangeError('Age must be positive');
//     }
//   }

//   showAge() {
//     console.log(this.#age);
//   }
// }

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

// class Rectangle {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.#height = height;
//     this.#width = width;
//   }

//   get width() {
//     return this.#width
//   }

//   get height() {
//     return this.#height
//   }

//   get area() {
//     return this.#height * this.#width;
//   }

//   set width(n) {
//     if (typeof(n) === 'number' && n > 0) {
//       this.#width = n
//     } else {
//       throw new RangeError('width must be positive')
//     }
//   }

//   set height(n) {
//     if (typeof(n) === 'number' && n > 0) {
//       this.#height = n
//     } else {
//       throw new RangeError('height must be positive')
//     }
//   }
// }

// class MathUtils {
//   static add(n1, n2) {
//     return n1 + n2
//   }

//   static subtract(n1, n2) {
//     return n1 - n2
//   }

//   static multiply(n1, n2) {
//     return n1 * n2
//   }

//   static divide(n1, n2) {
//     if (n2 === 0) {
//       throw new RangeError('Division by zero');
//     }
//     return n1 / n2;
//   }
// }

function Smartphone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Smartphone.prototype.getBrand = function() {
  return this.brand;
};

Smartphone.prototype.getModel = function() {
  return this.model;
};

Smartphone.prototype.getYear = function() {
  return this.year;
};

Smartphone.prototype.batteryLevel = function() {
  console.log('The battery level is at 75%');
};

Smartphone.prototype.info = function() {
  console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
};

function Vehicles(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicles.prototype.accelerate = function() {
  console.log('Vehicle is accelerating!');
}

Vehicles.prototype.decelerate = function() {
  console.log('Vehicle is decelerateing!')
}

Vehicles.prototype.info = function() {
  console.log(`This is a ${this.color} Vehicle that weighs ${this.weight}!`)
}

function Car(color, weight, plate) {
  Vehicles.call(this, color, weight)
  this.plate = plate;
}

Car.prototype = Object.create(Vehicles.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log('Honk Honk')
}

function Boat(color, weight) {
  Vehicles.call(this, color, weight)
}

Boat.prototype = Object.create(Vehicles.prototype)
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
  console.log('Anchor droped')
}

function Plane(color, weight, airline) {
  Vehicles.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicles.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeOff = function() {
  console.log('Taking off...')
}

Plane.prototype.land = function() {
  console.log('Landing now')
}

let smartCar = new Car('Blue', 14000, 'HelloWrld')
smartCar.accelerate();
console.log(smartCar.plate)

let pantoon = new Boat('Green', 23000);
pantoon.dropAnchor();

let citation = new Plane('White', 100000)
citation.takeOff();
citation.land()
citation.info()

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.communicate = function() {
  console.log(`Communicating`)
}

Person.prototype.eat = function() {
  console.log(`Eating`)
}

Person.prototype.sleep = function() {
  console.log(`Sleeping`)
}

function Doctor(firstName, lastName, age, gender, specialization,) {
  Person.call(this, firstName, lastName, age, gender)
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype)
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing')
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('Studying')
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching')
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype)
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log('Resaerching');
}