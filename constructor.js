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

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}