let shape = {
  getType() {
    return this.type;
  }
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }
  this.name = `${first} ${last}`;
}

function createObject(obj) {
  return Object.setPrototypeOf({}, obj)
}

Object.prototype.begetObject = function() {
  function F() {};
  F.prototype = this;
  return new F()
}

function neww(constructor, args) {
  return new constructor(...args)
}

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length
  };

  getWidth() {
    return this.width;
  };

  getLength() {
    return this.length;
  };

  getArea() {
    return this.width * this.length;
  };
}

class Square extends Rectangle {
  constructor(n) {
    super(n, n)
  }
}

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }

  introduce() {
    return super.introduce() + ' Meow meow!'
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
    this.master = master
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`
  }
}

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello, I'm ${this.name}. It's very nice to meet you.`;
  }
}

class Shouter extends Person {
  constructor(name) {
    super(name);
  }

  greeting() {
    return super.greeting().toUpperCase()
  }
}

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  info() {
    return `a ${this.species} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {}; // map from owner name -> Owner instance
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.adoptions[owner.name]) {
      this.adoptions[owner.name] = owner;
    }
  }

  printAdoptions() {
    for (let name in this.adoptions) {
      const owner = this.adoptions[name];
      console.log(`${name} has adopted the following pets:`);
      owner.pets.forEach(pet => console.log(pet.info()));
      console.log('');
    }
  }
}

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([
      this.horizontalRule(),
      this.emptyLine(),
      this.messageLine(),
      this.emptyLine(),
      this.horizontalRule()
    ].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();