class Animal {}
class Cat extends Animal {}

let myProto = {
  meow() {
    console.log("Meow!")
  }
}

function getDefiningObject(object, propKey) {
  let obj = object
  while (obj !== null) {
    if (obj.hasOwnProperty(propKey)) {
      return obj
    } else {
      obj = Object.getPrototypeOf(obj)
    }
  }
  return null;
}

function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object))
  for (let prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      copy[prop] = object[prop];
    }
  }
  return copy
}

function extend(destination, ...sources) {
  sources.forEach((source) => {
    Object.getOwnPropertyNames(source).forEach((name) => {
      destination[name] = source[name]
    })
  })
  return destination
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius
}

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA))
console.log(ninjaB.constructor === ninjaA.constructor);    // should log true